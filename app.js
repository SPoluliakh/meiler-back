const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const partnerRouter = require("./routs/partnerRouts");
const loginRouter = require("./routs/loginRout");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", loginRouter);
app.use("/api/partners", partnerRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
