const { Schema, model } = require("mongoose");
const Joi = require("joi");

const partnerDbSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, " Email must be unique"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Partner = model("partner", partnerDbSchema);

const joiPartnerSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  Partner,
  joiPartnerSchema,
};
