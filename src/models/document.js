const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ordering: Number,
    quizz_count: {
      type: Number,
      default: 0,
    },
    win_count: {
      type: Number,
      default: 0,
    },
    lost_count: {
      type: Number,
      default: 0,
    },
    lastTested: Date,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

schema.virtual('win_rate').get(function () {
  return ((this.win_count / (this.win_count + this.lost_count)) * 100).toFixed(
    0,
  );
});

const Document = mongoose.model('Document', schema);

module.exports = Document;
