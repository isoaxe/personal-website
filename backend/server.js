const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const rootDir = require("./util/path");
const testRoute = require("./routes/test");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

/* The root directory is the 'backend' folder. This needs to be set to the
   true root (up one level) in order for files to reference correctly in
   the local node server (localhost:3000) */
app.use('/', express.static(path.join(rootDir, "..")));

app.use(testRoute);

app.listen(3000);
