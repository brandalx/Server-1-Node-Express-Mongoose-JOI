const express = require("express");
const router = express.Router();
const { BooksModel } = require("../models/bookModel");
router.get("/", async (req, res) => {
  try {
    let data = await BooksModel.find({}).limit(4);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
