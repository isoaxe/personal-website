const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const fetch = require("isomorphic-fetch");
const express = require("express");
const router = express.Router();

router.post("/submit", async (req, res) => {
  // Set Nodemailer configuration, auth and email details.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().email_router.email,
      pass: functions.config().email_router.password
    }
  });

  const myEmail = {
    to: "lucasoconnell4@gmail.com",
    subject: `A new message from ${req.body.name}`,
    text: `${req.body.name} sent the following message:
          \n\n ${req.body.message}
          \n\n Senders email: ${req.body.email}`
  };

  const sendersEmail = {
    to: req.body.email,
    subject: "A copy of your message to Lucas",
    text: `You just sent Lucas the following message:\n\n${req.body.message}`
  };

  // Call reCaptcha api to verify user.
  const responseKey = req.body["g-recaptcha-response"];
  const secretKey = "6LfeSREdAAAAANliAluUdtgpT2V5CkVhGddr5xxQ";
  const baseUrl = "https://www.google.com/recaptcha/api/siteverify";
  const params = `?secret=${secretKey}&response=${responseKey}`;

  const googleRes = await fetch(baseUrl + params);
  const captchaRes = await googleRes.json();

  // Send message if user is verified as not a bot.
  if (captchaRes.success) {
    transporter.sendMail(myEmail);
    transporter.sendMail(sendersEmail);
    res.redirect("/#contact");
  } else {
    res.send({ response: "reCaptcha verification failed" });
  }
});

module.exports = router;
