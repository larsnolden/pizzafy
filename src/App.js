import React, { Component } from 'react';
import './App.css';

import data from './data.json'

import Intro from './Intro.js';
import SelectionArea from './SelectionArea.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectionArea dataSet={ data } />
      </div>
    );
  }
}

export default App;
