import React, { Component } from 'react';
import '../styles/App.css';
import Board from '../components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: [0,0],
      facing: "E"
    };
  }
  render() {
    return (
      <div>
        <Board pacmanPosition={ this.state.coordinates } facing={ this.state.facing } />
  
        <button>Move</button>
        <button>Right</button>
        <button>Left</button>
        <button>Report</button>
      </div>
    );
  }  
}

export default App;
