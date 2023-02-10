const express = require("express");
const router = express.Router();
const { BooksModel, validateBooks } = require("../models/bookModel");
router.get("/", async (req, res) => {
  let perPage = 4;
  let page = req.query.page - 1 || 0;
  let sort = req.query.sort || "DATE_CREATED";
  let reverse = req.query.reverse == "yes" ? 1 : -1;
  try {
    let data = await BooksModel.find({})
      .limit(4)
      .skip(page * perPage)
      .sort({ [sort]: reverse });
    res.json(data);

    //Query request example: for this CRUD "GET" request:  http://localhost:3001/s1books?sort=name&page=1&reverse=yes
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  let validBody = validateBooks(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let books = new BooksModel(req.body);
    await books.save();
    res.status(201).json(books);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BooksModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BooksModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
