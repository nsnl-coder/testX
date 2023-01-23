const mongoose = require('mongoose');

const schema = mongoose.Schema({
  question: String,
  answer: String,
  win_count: {
    type: Number,
    default: 0,
  },
  lost_count: {
    type: Number,
    default: 0,
  },
  last_try: {
    type: Boolean,
    default: true,
  },
  collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',
    required: true,
  },
  document: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
    required: true,
  },
});

const Quiz = mongoose.model('Quiz', schema);

module.exports = Quiz;
