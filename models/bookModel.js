const mongoose = require("mongoose");

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
