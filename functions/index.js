const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");

const rootDir = require("./util/path");
const emailRoute = require("./routes/email");

// Initialize Firebase in order to access its services.
admin.initializeApp();

const app = express();

// Automatically allow cross-origin requests.
app.use(cors({ origin: true }));

/* The root directory is the 'functions' folder. This needs to be set to the
   true root (up one level) in order to find the required file (i.e. index.html) */
app.use("/", express.static(path.join(rootDir, "..")));

app.use(emailRoute);

// Define secrets available in the app.
const secrets = {
   secrets: [
     "EMAIL_ADDRESS",
     "EMAIL_PASSWORD",
   ],
 };

// Expose Express API as a single Cloud Function.
exports.app = functions.runWith(secrets).https.onRequest(app);
