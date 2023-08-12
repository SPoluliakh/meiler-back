const express = require("express");

const { authControllers: cntr } = require("../controllers");
const { validation } = require("../middlewars");
const { cntrlWrap } = require("../helpers");
const { joiLoginSchema } = require("../models/user");

const loginRouter = express.Router();

loginRouter.post("/login", validation(joiLoginSchema), cntrlWrap(cntr.login));

module.exports = loginRouter;
