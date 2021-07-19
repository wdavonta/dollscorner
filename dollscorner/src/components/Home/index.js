import React from 'react';
import './style.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/dolls.png',
  'images/ccorn.jpeg',
  'images/slide_4.jpg'
];

const Home = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
};

export default Home;