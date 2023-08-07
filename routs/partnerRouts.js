const express = require("express");

const { authControllers: cntr } = require("../controllers");
const { validation } = require("../middlewars");
const { cntrlWrap } = require("../helpers");
const { joiPartnerSchema } = require("../models/partners");

const partnerRouter = express.Router();

partnerRouter.post("/", validation(joiPartnerSchema), cntrlWrap(cntr.register));

module.exports = partnerRouter;
