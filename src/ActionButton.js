import React, { Component } from 'react';
import './actionButton.css'

class ActionButton extends Component {
  render() {
    return(
      <button className='actionButton' href={ this.props.link }>{ this.props.text }</button>
    )
  }
}

export default ActionButton;