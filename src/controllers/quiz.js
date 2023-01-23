const catchAsync = require('../utils/catchAsync');
const Quiz = require('../models/quiz');
const Collection = require('../models/collection');
const Document = require('../models/document');

const updateQuizResult = catchAsync(async (req, res, next) => {
  const { id, result, document, collectionId } = req.body;

  // update quiz statistic
  // update collection quiz statistic
  // update document quiz statistic

  if (result) {
    await Quiz.findByIdAndUpdate(id, {
      $inc: { win_count: 1 },
      last_try: true,
    });

    await Collection.findByIdAndUpdate(collectionId, {
      $inc: { win_count: 1 },
    });

    await Document.findByIdAndUpdate(document, {
      $inc: { win_count: 1 },
      last_tested: Date.now(),
    });
  }

  if (result === false) {
    await Quiz.findByIdAndUpdate(id, {
      $inc: { lost_count: 1 },
      last_try: false,
    });

    await Collection.findByIdAndUpdate(collectionId, {
      $inc: { lost_count: 1 },
    });

    await Document.findByIdAndUpdate(document, {
      $inc: { lost_count: 1 },
      last_tested: Date.now(),
    });
  }

  res.status(200).json({ message: 'success' });
});

const createQuiz = catchAsync(async (req, res, next) => {
  const document = await Quiz.create(req.body);

  await Collection.findByIdAndUpdate(document.collectionId, {
    $inc: { quizz_count: 1 },
  });
  await Document.findByIdAndUpdate(document.document, {
    $inc: { quizz_count: 1 },
  });

  res.status(200).json({ status: 'success', data: document });
});

const updateQuiz = catchAsync(async (req, res, next) => {
  const document = await Quiz.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ status: 'success', data: document });
});

const getQuizzes = catchAsync(async (req, res, next) => {
  const { collectionId, document } = req.query;

  console.log(req.query);

  if (!collectionId && !document) {
    res.status(400).json({ message: 'Include collection id' });
    return;
  }
  const query = {};

  if (document) query.document = document;
  if (collectionId) query.collectionId = collectionId;

  const documents = await Quiz.find(query).sort('question -createdAt');
  res
    .status(200)
    .json({ status: 'success', result: documents.length, data: documents });
});

const deleteQuiz = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const quiz = await Quiz.findById(id);

  await Collection.findByIdAndUpdate(quiz.collectionId, {
    $inc: { quizz_count: -1 },
  });

  await Document.findByIdAndUpdate(quiz.document, {
    $inc: { quizz_count: -1 },
  });

  await Quiz.findByIdAndDelete(id);
  res.status(204).json({ message: 'Quiz deleted' });
});

module.exports = {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  updateQuiz,
  updateQuizResult,
};
