const Zoom = require('Zoom');
'use strict';


function Tile() {

  return (
    <Zoom>
      <p>Markup that will be revealed on scroll</p>
    </Zoom>
  );
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.tile-container')
  .forEach(domContainer => {
    ReactDOM.render(<Tile />, domContainer);
  });
