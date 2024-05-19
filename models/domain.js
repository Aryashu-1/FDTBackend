
// TODO : Define the user schema according to Docs

const mongoose = require("mongoose");

const domainSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const domain = mongoose.model("domain", domainSchema);

module.exports = domain
