const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  res.json({ message: "Express index.js as default route works correctly" });
});
module.exports = router;
