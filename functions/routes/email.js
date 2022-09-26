const nodemailer = require("nodemailer");
const fetch = require("isomorphic-fetch");
const express = require("express");
const router = express.Router();

router.post("/submit", async (req, res) => {
  const email = process.env.EMAIL_ADDRESS;
  const password = process.env.EMAIL_PASSWORD;

  // Set Nodemailer configuration, auth and email details.
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: email,
      pass: password
    }
  });

  const myEmail = {
    to: "lucasoconnell4@gmail.com",
    from: email,
    subject: `A new message from ${req.body.name}`,
    text: `${req.body.name} sent the following message:
          \n\n ${req.body.message}
          \n\n Senders email: ${req.body.email}`
  };

  const sendersEmail = {
    to: req.body.email,
    from: email,
    subject: "A copy of your message to Lucas",
    text: `You just sent Lucas the following message:\n\n${req.body.message}`
  };

  // Call reCaptcha api to verify user.
  const responseKey = req.body["g-recaptcha-response"];
  const secretKey = process.env.RECAPTCHA_SECRET;
  const baseUrl = "https://www.google.com/recaptcha/api/siteverify";
  const params = `?secret=${secretKey}&response=${responseKey}`;

  const googleRes = await fetch(baseUrl + params);
  const captchaRes = await googleRes.json();

  // Send message if user is verified as not a bot.
  if (captchaRes.success) {
    await transporter.sendMail(myEmail);
    await transporter.sendMail(sendersEmail);
    res.redirect("/#contact");
  } else {
    res.send({ error: "reCaptcha verification failed. Your message was not sent. Please try again." });
  }
});

module.exports = router;
