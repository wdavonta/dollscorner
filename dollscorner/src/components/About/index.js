import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import mangoinferno from './images/mangoinferno.jpg';


function About() {
  return (


    <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>


{/* <h2 style="text-align:center">Our Team</h2> */}


  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/> */}
      <div class="container">
        <h2 class="color">Tameka Hanford</h2>
        <img style={{width: 200, height: 200, borderRadius: 500/ 2}} alt="" className='mi'  src={mangoinferno} />
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