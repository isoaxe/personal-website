const React = require('react');
const ReactDOM = require('react-dom');
const makeCarousel = require('react-reveal/makeCarousel');
const Slide = require('react-reveal/Slide');
const styled = require('styled-components');
'use strict';


function Tile() {

  const width = '300px', height='150px';
  const Container = styled.default.div`
    border: 1px solid red;
    position: relative;
    overflow: hidden;
    width: ${width};
  `;
  const Children  = styled.default.div`
    width: ${width};
    position: relative;
    height: ${height};
  `;
  const Arrow = styled.default.div`
    text-shadow: 1px 1px 1px #fff;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${props => props.right ? styled.css`left: 90%;` : styled.css`left: 0%;`}
  `;
  const Dot = styled.default.span`
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: 1px 1px 1px #fff;
    user-select: none;
  `;
  const Dots = styled.default.span`
    text-align: center;
    width: ${width};
    z-index: 100;
  `;
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
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
  );
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.tile-container')
  .forEach(domContainer => {
    ReactDOM.render(<Tile />, domContainer);
  });
