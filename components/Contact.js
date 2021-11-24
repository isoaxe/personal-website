const React = require("react");
const ReactDOM = require("react-dom");
const Zoom = require("react-reveal/Zoom");

let captchaCorrect = false;

/* eslint-disable-next-line */
function correctCaptcha (response) {
  captchaCorrect = true;
};

/* eslint-disable-next-line */
function expiredCaptcha (response) {
  captchaCorrect = false;
};

// Contact form validation of user input.
// This function is called from index.html and thus is not used in this file.
/* eslint-disable-next-line */
function validateForm () {
  const name = document.forms.contact.name.value;
  const email = document.forms.contact.email.value;
  const message = document.forms.contact.message.value;

  // Check each field for valid input.
  if (name === "") {
    document.getElementById("name").style.outline = "medium solid red";
    document.getElementById("name").placeholder = "Please enter your name here";
  }
  if (email.indexOf("@") === -1) {
    document.getElementById("email").style.outline = "medium solid red";
    document.getElementById("email").value = "";
    document.getElementById("email").placeholder = "Valid emails must contain an '@' symbol";
  }
  if (email === "") {
    document.getElementById("email").placeholder = "Please enter your email address here";
  }
  if (message === "") {
    document.getElementById("message").style.outline = "medium solid red";
    document.getElementById("message").placeholder = "Please enter your message here";
  }

  // Remove red box around fields where valid input has been entered on next submission.
  if (name !== "") {
    document.getElementById("name").style.outline = 0;
  }
  if (email.indexOf("@") !== -1) {
    document.getElementById("email").style.outline = 0;
  }
  if (message !== "") {
    document.getElementById("message").style.outline = 0;
  }

  // Let the user know that they need pass the captcha before form submission.
  if (!captchaCorrect) {
    alert("You need to prove your humanity first.\n\n Hint: It's a box ticking exercise.");
  }

  // If all fields pass, then return true so message can be sent.
  if (name !== "" && email.indexOf("@") !== -1 && message !== "" && captchaCorrect) {
    alert("Message sent! \n\nYou have also been sent a copy. \nCheck your junk mail folder if not found.");
    return true;
  }
  return false;
}

function Contact () {
  return (
    <div>
      <Zoom delay={500}>
        <form action="/submit" method="POST" onSubmit="return validateForm()" name="contact">
          <input id="name" className="contact-user" type="text" placeholder="Name" name="name" /><br></br>
          <input id="email" className="contact-user" type="text" placeholder="Email" name="email" /><br></br>
          <textarea id="message" className="contact-message" placeholder="Message" name="message"></textarea><br></br>
          <div className="g-recaptcha"
               data-sitekey="6LfeSREdAAAAAGO14nqrqWFxEc03lAq47TbrNgL6"
               data-callback="correctCaptcha"
               data-expired-callback="expiredCaptcha">
          </div>
          <button type="submit" className="submit">Submit</button>
        </form>
      </Zoom>
    </div>
  );
}

// Find appropriate DOM container, and render Contact component into it.
document.querySelectorAll(".contact-container")
  .forEach(domContainer => {
    ReactDOM.render(<Contact />, domContainer);
  });
