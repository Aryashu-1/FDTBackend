const express = require("express");
const { getAllVenues, createVenue } = require("../controllers/venueControl");

const venueRouter = express.Router();


venueRouter.route('/')
.get(getAllVenues)
.post(createVenue)


module.exports = venueRouter

