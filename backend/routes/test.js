const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

router.get("/test", (req, res, next) => {
  res.send('Hello World');
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "..", "index.html"));
});

module.exports = router;
