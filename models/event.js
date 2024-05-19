const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["FDP","STTP","Workshop","Training"],
  },
  mode: {
    type: String,
    enum: ["online","offline"],
    required: true
  },
  domain: {
    type: mongoose.Schema.ObjectId,
    ref: 'domain',
    required: true,
  },
  venue: {
    type: mongoose.Schema.ObjectId,
    ref: 'venue',
    required: true
  },
  startDate:{
    type: Date,
    required: true,
  },
  endDate:{
    type: Date,
    required: true,
  },
  numOfDays: {
    type: Number,
  }
});

eventSchema.pre('save',async function(next) {
    try {
        await this.populate('domain');
        await this.populate('venue');
        if (this.startDate && this.endDate) {
          const diffTime = Math.abs(this.endDate - this.startDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          this.numOfDays = diffDays;
        }
    } catch (error) {
        console.log(error)
    }
    next();
});

const event = mongoose.model("event", eventSchema);

module.exports = event
