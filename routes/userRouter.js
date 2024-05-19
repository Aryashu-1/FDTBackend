const { checkIfAdminExists,createUserAccount, checkIfUserExists } = require('../controllers/userControl')

const express = require("express");

const userRouter = express.Router();


userRouter.route('/admin/signin')
.post(checkIfAdminExists)

userRouter.route('/signin')
.post(checkIfUserExists)

userRouter.route('/signup')
.post(createUserAccount)

module.exports = {
    userRouter
}

