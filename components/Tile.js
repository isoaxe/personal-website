const React = require('react');
const ReactDOM = require('react-dom');
const makeCarousel = require('react-reveal/makeCarousel');
const Slide = require('react-reveal/Slide');
const styled = require('styled-components');
'use strict';

const styledTag = styled.default;
const css = styled.css;


function Tile() {
  const [hover, setHover] = React.useState(false);

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
    ${props => props.hover ? css`border: 3px solid #1e688f;` : css`border: none;`}
    ${props => props.hover ? css`background-color: #9daba1;` : css`background-color: #fff;`}
  `;
  const Children = styledTag.div`
    text-align: center;
    position: relative;
    width: 90%;
    height: 250px;
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
  `


  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container hover={hover}>
      <Children>
        {children}
        <ArrowContainer><ArrowImg src='media/down-arrow.png' onClick={handleClick} data-position={position + 1} /></ArrowContainer>
      </Children>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Carousel>
        <Slide right>
          <div>
            <h1>Slide 1</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 2</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 3</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
    </div>
  );
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.tile-container')
  .forEach(domContainer => {
    ReactDOM.render(<Tile />, domContainer);
  });
