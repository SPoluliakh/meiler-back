const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userDbSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, " Name must be unique"],
      default: "test",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: [true, " Password must be unique"],
      default: "TEST1",
    },

    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userDbSchema);

const joiLoginSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  User,
  joiLoginSchema,
};
