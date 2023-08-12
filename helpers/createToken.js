const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "5h" });
  return token;
};

module.exports = createToken;
