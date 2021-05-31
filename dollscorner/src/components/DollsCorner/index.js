import React from 'react';
import mangoinferno from './images/mangoinferno.jpg';
import './style.css'

function DollsCorner() {
  return (
    <div class="container-fluid bg-3 text-center">    
      <h3 class="margin">Dolls Corner</h3>
      <div class="row">
        <div class="col-sm-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img alt="" className='mi'  src={mangoinferno}/>
        </div>
        <div class="col-sm-4"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img alt="" className='mi'  src={mangoinferno}/>
        </div>
        <div class="col-sm-4"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img alt="" className='mi'  src={mangoinferno}/>
        </div>
      </div>
    </div>
      );
    }

export default DollsCorner;