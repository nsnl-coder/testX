const catchAsync = require('../utils/catchAsync');
const Document = require('../models/document');
const Collection = require('../models/collection');
const Quiz = require('../models/quiz');

const createDocument = catchAsync(async (req, res, next) => {
  const document = await Document.create(req.body);
  res.status(200).json({ status: 'success', data: document });
});

const getDocuments = catchAsync(async (req, res, next) => {
  const documents = await Document.find().sort('-createdAt');
  res
    .status(200)
    .json({ status: 'success', result: documents.length, data: documents });
});

const getDocument = catchAsync(async (req, res, next) => {
  const documents = await Document.findById(req.params.id);
  res
    .status(200)
    .json({ status: 'success', result: documents.length, data: documents });
});

const deleteDocument = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const document = await Document.findById(id);

  await Collection.deleteMany({ document: id });
  await Quiz.deleteMany({ document: id });

  await Document.findByIdAndDelete(id);

  res.status(204).json({ message: 'Document deleted' });
});

module.exports = { createDocument, deleteDocument, getDocuments, getDocument };
