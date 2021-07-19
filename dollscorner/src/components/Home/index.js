// import React from 'react';
// import './style.css'
// import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   'images/dolls.png',
//   'images/ccorn.jpeg',
//   'images/slide_4.jpg'
// ];

// const Home = () => {
//   return (
//     <div>
//       <Slide easing="ease">
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//             <span>Slide 1</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//             <span>Slide 2</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//             <span>Slide 3</span>
//           </div>
//         </div>
//       </Slide>
//     </div>
//   )
// };

// export default Home;

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
export default Home;