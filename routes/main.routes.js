const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contact", (req, res) => {
  res.render("contact", { success: false });
});

router.post("/contact", (req, res) => {
  // Just fake-submit (no DB)
  console.log("Contact form submitted:", req.body);
  res.render("contact", { success: true });
});

module.exports = router;
