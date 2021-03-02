import React from 'react';
import './How.css';
import Home from './images/How-01-Land.png';
import Signup from './images/How-02-Signup.png';
import Game from './images/How-03-Game.png';
import Schedule from './images/How-04-Schedule.png'


class How extends React.Component {
  render() {
    return (
      <div className="main">
        {/* <h1 className="compare__title">PROTOTYPE</h1> */}
        <div className="image-container">
          <div className="image"><img className="image-exact" src={Home}></img></div>
          <div className="image"><img className="image-exact" src={Signup}></img></div>
          <div className="image"><img className="image-exact" src={Game}></img></div>
          <div className="image"><img className="image-exact" src={Schedule}></img></div>
        </div>
      </div>
    )
  }
}

export default How;
