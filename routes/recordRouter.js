const express = require("express");
const { getRecords, createRecord } = require("../controllers/recordControl");

const recordRouter = express.Router();


recordRouter.route('/')
.get(getRecords)
.post(createRecord)


module.exports = recordRouter

