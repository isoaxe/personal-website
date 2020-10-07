var nodemailer = require("nodemailer");
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
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'businessemailrouter@gmail.com',
      pass: 'emailrouter47'
    }
  });

  const myEmail = {
    to: 'lucasoconnell4@gmail.com',
    subject: `A new message from ${req.body.name}`,
    text: `${req.body.name} sent the following message:\n\n${req.body.message}`
  };

  const sendersEmail = {
    to: req.body.email,
    subject: `A copy of your message to Lucas`,
    text: `You just sent Lucas the following message:\n\n${req.body.message}`
  };

  transporter.sendMail(myEmail);
  transporter.sendMail(sendersEmail);

  res.redirect("/#contact");
});

module.exports = router;
