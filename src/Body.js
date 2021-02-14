import React from 'react';
import './Body.css';
import MainImage from './images/Main.jpg';

function Body() {
  return (
    <div className="main">
      <div className="main__container">
        <img
          className="main__image"
          src={ MainImage } 
        />
        <div className="main__title">SCORE<br/>KEEPER</div>
        
      </div>
    </div>
  )
}

export default Body
