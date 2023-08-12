const { Partner } = require("../../models/partners");

const { sendMail } = require("../../helpers");

const register = async (req, res) => {
  const { _id } = req.user;
  const { email } = req.body;

  const newUser = new Partner({ email, owner: _id });

  const mail = {
    to: email,
    subject: " Email`s verify",
    html: `<a target='_blank' href='https://sparkling-beijinho-e39059.netlify.app/' >Protect your data</a>`,
  };
  await sendMail(mail);

  await newUser.save();

  res.status(201).json({
    response: "success",
    status: 201,
  });
};

module.exports = register;
