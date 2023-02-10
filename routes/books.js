const express = require("express");
const router = express.Router();
const { BooksModel } = require("../models/bookModel");
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

module.exports = router;
