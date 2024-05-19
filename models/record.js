
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'event',
    required: true
  },
  numberOfDaysAttended: {
    type: Number,
    required: true
  },
  score: {
    type: Number
  }
});

recordSchema.pre('save', async function(next) {
  if (this.isModified('numberOfDaysAttended') || this.isNew) {
    try {
      await this.populate('event');
      await this.populate('user');
      if (this.event && this.event.numOfDays) {
        this.score = (this.numberOfDaysAttended / this.event.numOfDays) * 10;
      }
    } catch (err) {
      return next(err);
    }
  }
  next();
});

const record = mongoose.model('record', recordSchema);

module.exports = record;

