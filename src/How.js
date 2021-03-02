import React from 'react';
import './How.css';
// import Home from './images/How-01-Home.png';
// import Signup from './images/How-02-Signup.png';
// import Game from './images/How-03-Game.png';
// import Schedule from './images/How-04-Schedule.png'
import CompareImage from './images/5-compare.png';


class How extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // imageOneDisplay : false,
      // imageTwoDisplay : false,
      // imageThrDisplay: false,
      // imageFouDisplay: false,
      compareDisplayed: false,
    }

    this.compareClick = this.compareClick.bind(this);
  }

  compareClick = () => {
    this.setState({compareDisplayed:!this.state.compareDisplayed})
  }

  render() {
    return (
      <div>
      <h1 className="compare__title">TRY THE DEMO</h1>
      <div className="compare__buttons">
          <button className="compare__button" onClick={this.compareClick}><small>1</small> Signup</button>
          <button className="compare__button" onClick={this.compareClick}><small>2</small> compare</button>
          <button className="compare__button" onClick={this.compareClick}><small>3</small> compare</button>
          <button className="compare__button" onClick={this.compareClick}><small>4</small> compare</button>
      </div>
      <div className="bottom__content">
        <img
          className="compare__image"
          src={ this.state.compareDisplayed ? CompareImage : '' }
          alt=""
        />
      </div>


    </div>
  )}
}

export default How;
