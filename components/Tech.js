const React = require("react");
const ReactDOM = require("react-dom");
const Zoom = require("react-reveal/Zoom");


function screenSize () {
  if (window.screen.width > 800) {
    return "media/tech.png";
  } else {
    return "media/tech-mobile.png";
  }
}

function Tech () {
  return (
    <div>
      <Zoom delay={800}>
        <img src={screenSize()} />
      </Zoom>
    </div>
  );
}

// Find appropriate DOM container, and render Tech component into it.
document.querySelectorAll(".tech-container")
  .forEach(domContainer => {
    ReactDOM.render(<Tech />, domContainer);
  });
