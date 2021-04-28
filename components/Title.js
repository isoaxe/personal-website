const React = require("react");
const ReactDOM = require("react-dom");
const LightSpeed = require("react-reveal/LightSpeed");


function Title (props) {
  return (
    <div>
      <LightSpeed left>
        <h2>{props.text}</h2>
      </LightSpeed>
    </div>
  );
}

// Find all appropriate DOM containers, and render Title components into them.
document.querySelectorAll(".title-container")
  .forEach(domContainer => {
    const text = domContainer.dataset.text;
    ReactDOM.render(<Title text={text} />, domContainer);
  });
