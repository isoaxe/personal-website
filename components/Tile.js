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
    height: 220px;
  `;
  const Arrow = styledTag.div`
    text-shadow: 1px 1px 1px #fff;
    z-index: 100;
    line-height: 220px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
  `;
  const Dot = styledTag.span`
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: 1px 1px 1px #fff;
    user-select: none;
  `;
  const Dots = styledTag.span`
    text-align: center;
    width: 100%;
    z-index: 100;
  `;

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container hover={hover}>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map( (val, index) =>
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? '● ' : '○ ' }
          </Dot>
        )}
      </Dots>
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
