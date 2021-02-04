const path = require('path');
const express = require("express");
const router = express.Router();

const rootDir = require("./../util/path.js");

// Set the root directory to the build folder.
router.use('/ravenous', express.static(path.join(rootDir, "..", "projects", "Ravenous", "build")));

router.get("/ravenous", (req, res) => {
  res.sendFile("index.html");
});

module.exports = router;
