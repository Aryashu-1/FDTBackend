const express = require("express");
const { createEvent, getEvents } = require("../controllers/eventControl");

const eventRouter = express.Router();


eventRouter.route('/')
.get(getEvents)
.post(createEvent)


module.exports = eventRouter

