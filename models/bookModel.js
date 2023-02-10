const mongoose = require("mongoose");
const Joi = require("joi");
const booksSchema = new mongoose.Schema({
  name: String,
  cat_url: String,
  info: String,
  img_url: String,
  DATE_CREATED: {
    type: Date,
    default: Date.now,
  },
});

exports.BooksModel = mongoose.model("s1books", booksSchema);
exports.validateBooks = (_reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    cat_url: Joi.string().min(2).max(100).required(),
    info: Joi.string().min(2).max(100).required(),
    img_url: Joi.string().min(2).max(100).allow(null, ""),
  });
  return joiSchema.validate(_reqBody);
};
