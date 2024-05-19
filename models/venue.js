
// TODO : Define the user schema according to Docs

const mongoose = require("mongoose");

const venueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const venue = mongoose.model("venue", venueSchema);


module.exports = venue