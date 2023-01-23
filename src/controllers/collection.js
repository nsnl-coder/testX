const catchAsync = require('../utils/catchAsync');
const Collection = require('../models/collection');
const Document = require('../models/document');
const Quiz = require('../models/quiz');

const createCollection = catchAsync(async (req, res, next) => {
  const document = await Collection.create(req.body);
  res.status(200).json({ status: 'success', data: document });
});

const updateCollection = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const document = await Collection.findByIdAndUpdate(req.params.id, { name });
  res.status(200).json({ status: 'success', data: document });
});

const getCollection = catchAsync(async (req, res, next) => {
  const collection = await Collection.findById(req.params.id);

  res.status(200).json({ status: 'success', data: collection });
});

const getCollections = catchAsync(async (req, res, next) => {
  const document = req.query.document;

  if (!document) {
    res.status(400).json({ message: 'Include document id' });
    return;
  }

  const documents = await Collection.find({ document }).sort('name -createdAt');
  res
    .status(200)
    .json({ status: 'success', result: documents.length, data: documents });
});

const deleteCollection = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const collection = await Collection.findById(id);

  await Document.findByIdAndUpdate(collection.document, {
    $inc: {
      quizz_count: -collection.quizz_count,
      win_count: -collection.win_count,
      lost_count: -collection.lost_count,
    },
  });

  await Quiz.deleteMany({
    collectionId: id,
  });

  await Collection.findByIdAndDelete(id);
  res.status(204).json({ message: 'Collection deleted' });
});

module.exports = {
  createCollection,
  deleteCollection,
  getCollections,
  updateCollection,
  getCollection,
};
