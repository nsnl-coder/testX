const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Blank document',
    },
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
    ordering: { type: Number, default: 0 },
    document: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Document',
      required: true,
    },
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

const Collection = mongoose.model('Collection', schema);

module.exports = Collection;
