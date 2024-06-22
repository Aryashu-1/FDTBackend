
// TODO : Define the user schema according to Docs

const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber : {
    type : String,
    unique : true,
    required : true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user
