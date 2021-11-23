const React = require("react");
const ReactDOM = require("react-dom");
const Zoom = require("react-reveal/Zoom");


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
