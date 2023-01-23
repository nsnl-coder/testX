const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quizz_count: Number,
  win_count: Number,
  lost_count: Number,
  lastTested: Number,
  recent_100: {
    win_count: Number,
    lost_count: Number,
    last_time: {
      type: Number,
      enum: [0, 1],
    },
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',
  },
  ordering: Number,
  ordering_updated: Date,
  lastTested: Date,
});

const SubCollection = mongoose.model('SubCollection', schema);

module.exports = SubCollection;
