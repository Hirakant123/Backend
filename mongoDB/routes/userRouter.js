const express = require("express")
const { createUser } = require("../models/controllers/userController")

const userRouter = express.Router()

userRouter.post("/", createUser)

module.exports = {userRouter}