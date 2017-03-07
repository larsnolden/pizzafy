import React, { Component } from 'react';
import './SelectionArea.css'

import Item from './Item.js'

// props:
// dataSet = items to display

class SelectionArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ''
    }

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    let items = this.props.dataSet.map((item) => <Item name={ item.name } imageSrc={ item.imageSrc } />)
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="SelectionArea">
        {this.state.items }
      </div>
    )
  }
}

export default SelectionArea;