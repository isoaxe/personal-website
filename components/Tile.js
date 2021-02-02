const React = require('react');
const ReactDOM = require('react-dom');
const makeCarousel = require('react-reveal/makeCarousel');
const Bounce = require('react-reveal/Bounce');
const DOMPurify = require('dompurify');
const renderHTML = require('react-render-html');
const styled = require('styled-components');
'use strict';

const tileSelector = require('../util/tileSelector.js');

const styledTag = styled.default;
const css = styled.css;


function Tile(props) {
  const [hover, setHover] = React.useState(false);
  const id = Number(props.id);

  const Container = styledTag.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    margin: 5px;
    padding: 10px 0px;
    width: 32%;
    min-width: 380px;
    letter-spacing: 0.07em;
    border-radius: 5px;
    text-align: center;
    height: 250px;
    ${props => props.hover ? css`border: 3px solid #1e688f;` : css`border: 3px solid #fff;`}
    ${props => props.hover ? css`background-color: #9daba1;` : css`background-color: #fff;`}
  `;
  const ArrowContainer = styledTag.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `
  const ArrowImg = styledTag.img`
    position: relative;
    cursor: pointer;
    padding: 10px;
    width: 15%;
    z-index: 2;
    ${props => props.hover ? css`visibility: visible;` : css`visibility: hidden;`}
  `

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container hover={hover}>
      {children}
      <ArrowContainer><ArrowImg src='media/down-arrow.png' onClick={handleClick} data-position={position + 1} hover={hover} /></ArrowContainer>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  // Add hook to automatically open link in new page.
  DOMPurify.addHook('afterSanitizeAttributes', function(node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });

  let tile2Clean = DOMPurify.sanitize(tileSelector(id, 2), {USE_PROFILES: {html: true}});
  let tile3Clean = DOMPurify.sanitize(tileSelector(id, 3), {USE_PROFILES: {html: true}});

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Carousel>
        <Bounce bottom wait={3600000}>
          <div className='tile coverLogo'>
            <img src={tileSelector(id, 1)} />
          </div>
        </Bounce>
        <Bounce bottom wait={3600000}>
          <div className='tile'>
            {renderHTML(tile2Clean)}
          </div>
        </Bounce>
        <Bounce bottom wait={3600000}>
          <div className='tile'>
            {renderHTML(tile3Clean)}
          </div>
        </Bounce>
      </Carousel>
    </div>
  );
}

// Find all appropriate DOM containers, and render Tile components into them.
document.querySelectorAll('.tile-container')
  .forEach(domContainer => {
    const id = domContainer.dataset.id;
    ReactDOM.render(<Tile id={id} />, domContainer);
  });
