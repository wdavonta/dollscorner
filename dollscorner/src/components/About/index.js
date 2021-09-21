import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import tameka from './images/tameka.JPG';


function About() {
  return (


    <div class="about-section">
  {/* <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p> */}


{/* <h2 style="text-align:center">Our Team</h2> */}


  <div class="column" >
    <div class="card">
      <div class="container">
        <h2 class="color">Tameka Hanford</h2>
        <img style={{width: 350, height: 350, borderRadius: 500/ 2}} alt="" className='mi'  src={tameka} />
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>tameka@example.com</p>
        <p><Link to="/contact-us"><button class="button">Contact</button></Link></p>
      </div>
    </div>
  </div>
</div>





    
  );
}

export default About;