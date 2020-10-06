const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

router.get("/test", (req, res, next) => {
  res.send('Hello World');
});

router.get("/", (req, res, next) => {
  res.sendFile("index.html");
});

router.post("/submit", (req, res, next) => {
  console.log(req.body);
  res.redirect("/#contact");
});

module.exports = router;
