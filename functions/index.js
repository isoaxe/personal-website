const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const rootDir = require("./util/path");
const emailRoute = require("./routes/email");

// Initialize Firebase in order to access its services.
admin.initializeApp();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

/* The root directory is the 'functions' folder. This needs to be set to the
   true root (up one level) in order to find the required file (i.e. index.html) */
app.use("/", express.static(path.join(rootDir, "..")));

app.use(emailRoute);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
*/
