import React, { Component } from 'react';
import './Item.css'

//props:
// imageSrc = url for Item image
// name     = name of item

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <img src={ this.props.imageSrc } />
        <p>{ this.props.name }</p>
      </div>
    )
  }
}

export default Item