const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const rootDir = require("./util/path");
const homeRoute = require("./routes/home");
const emailRoute = require("./routes/email");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/* The root directory is the 'backend' folder. This needs to be set to the
   public directory in order for files to reference correctly in
   the local node server (localhost:3000) */
app.use("/", express.static(path.join(rootDir, "../public")));

app.use(homeRoute);
app.use(emailRoute);

app.listen(process.env.PORT || 3000);
