const React = require("react");
const ReactDOM = require("react-dom");
const makeCarousel = require("react-reveal/makeCarousel");
const Bounce = require("react-reveal/Bounce");
const Reveal = require("react-reveal/Reveal");
const Slide = require("react-reveal/Slide");
const DOMPurify = require("dompurify");
const renderHTML = require("react-render-html");
const styled = require("styled-components");

const tileSelector = require("../util/tileSelector.js");

const styledTag = styled.default;
const css = styled.css;
const TEN_HOURS = 36000000; // 36 million ms = 10 hours.


function Tile (props) {
  const [hover, setHover] = React.useState(false);
  const id = Number(props.id);

  const Container = styledTag.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: #9daba1;
    overflow: hidden;
    margin: 10px;
    padding: 10px 0px;
    width: 32%;
    min-width: 380px;
    letter-spacing: 0.07em;
    border-radius: 5px;
    text-align: center;
    height: 250px;
    ${props => props.hover ? css`box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;` : css`box-shadow: none;`}
  `;
  const ArrowContainer = styledTag.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `;
  const ArrowImg = styledTag.img`
    position: relative;
    cursor: pointer;
    padding: 10px;
    width: 15%;
    z-index: 2;
    ${props => props.hover ? css`visibility: visible;` : css`visibility: hidden;`}
  `;

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container hover={hover}>
      {children}
      <ArrowContainer><ArrowImg src='media/down-arrow.png' onClick={handleClick} data-position={position + 1} hover={hover} /></ArrowContainer>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  // Add hook to automatically open link in new page.
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    // set all elements owning target to target=_blank
    if ("target" in node) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Sanatize HTML to prevent possibility of XSS attacks.
  const tile2Clean = DOMPurify.sanitize(tileSelector(id, 2), { USE_PROFILES: { html: true } });
  const tile3Clean = DOMPurify.sanitize(tileSelector(id, 3), { USE_PROFILES: { html: true } });

  function staggeredDelay () {
    switch (id) {
      case 0: return 0;
      case 1: return 150;
      case 2: return 300;
      case 3: return 0;
      case 4: return 150;
      case 5: return 0;
      case 6: return 150;
      case 7: return 300;
    }
  }

  return (
    <Slide bottom delay={400 + staggeredDelay()}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Carousel>
          <Reveal wait={TEN_HOURS}>
            <div className='tile cover-logo'>
              <img src={tileSelector(id, 1)} />
            </div>
          </Reveal>
          <Bounce bottom wait={TEN_HOURS}>
            <div className='tile'>
              {renderHTML(tile2Clean)}
            </div>
          </Bounce>
          <Bounce bottom wait={TEN_HOURS}>
            <div className='tile'>
              {renderHTML(tile3Clean)}
            </div>
          </Bounce>
        </Carousel>
      </div>
    </Slide>
  );
}

// Find all appropriate DOM containers, and render Tile components into them.
document.querySelectorAll(".tile-container")
  .forEach(domContainer => {
    const id = domContainer.dataset.id;
    ReactDOM.render(<Tile id={id} />, domContainer);
  });
