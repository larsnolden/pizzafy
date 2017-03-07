import React, { Component } from 'react';
import './Intro.css';

import ActionButton from './ActionButton.js';

class Intro extends Component {
  render() {
    return(
      <div className="IntroContainer">
        <img className="pizzaImage" src="https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2077496/open-uri20150525-11-nchufh" />
        <h1 className="introHeader">Pizzafy </h1>
        <ActionButton link='#' text='I am a button' />
      </div>
    )
  }
}

export default Intro;