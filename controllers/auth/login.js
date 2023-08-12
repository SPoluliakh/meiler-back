const { createToken } = require("../../helpers");
const { User } = require("../../models/user");

const login = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });

  const payload = {
    id: user._id,
  };

  const token = createToken(payload);
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    response: "success",
    status: 200,
  });
};

module.exports = login;
