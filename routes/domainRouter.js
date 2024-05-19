const express = require("express");
const { getAllDomains, createDomain } = require("../controllers/domainControl");

const domainRouter = express.Router();


domainRouter.route('/')
.get(getAllDomains)
.post(createDomain)


module.exports = domainRouter

