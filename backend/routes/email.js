const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/submit", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "INSERT_ROUTER_EMAIL_ADDRESS",
      pass: "INSERT_ROUTER_EMAIL_PASSWORD"
    }
  });

  const myEmail = {
    to: "lucasoconnell4@gmail.com",
    from: "INSERT_ROUTER_EMAIL_ADDRESS",
    subject: `A new message from ${req.body.name}`,
    text: `${req.body.name} sent the following message: \n\n ${req.body.message} \n\n Senders email: ${req.body.email}`
  };

  const sendersEmail = {
    to: req.body.email,
    from: "INSERT_ROUTER_EMAIL_ADDRESS",
    subject: "A copy of your message to Lucas",
    text: `You just sent Lucas the following message:\n\n${req.body.message}`
  };

  await transporter.sendMail(myEmail);
  await transporter.sendMail(sendersEmail);

  res.redirect("/#contact");
});

module.exports = router;
