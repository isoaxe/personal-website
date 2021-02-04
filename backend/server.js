const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const rootDir = require("./util/path");
const homeRoute = require("./routes/home");
const emailRoute = require("./routes/email");
const ravenousRoute = require("./routes/ravenous");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

/* The root directory is the 'backend' folder. This needs to be set to the
   true root (up one level) in order for files to reference correctly in
   the local node server (localhost:3000) */
app.use('/', express.static(path.join(rootDir, "..")));

app.use(homeRoute);
app.use(emailRoute);
app.use(ravenousRoute);

app.listen(3000);
