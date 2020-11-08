import React, { Component } from 'react';
import '../styles/App.css';
import Board from '../components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 2,
      y: 2,
      rotation: 0
    };
    this._moveForward = this._moveForward.bind(this);
  }

  _moveForward() {
    let movement;
    let coordinate;

    if ( this.state.facing === "E" || this.state.facing === "S" ) {
      movement = 1;
    } else {
      movement = -1;
    }

    if ( this.state.facing === "E" || this.state.facing === "W") {
      coordinate = 'x';
    } else {
      coordinate = 'y';
    }

    if ( this.state.[`${ coordinate }`] === 4 && movement === 1 ) {
      this.setState({ [`${ coordinate }`]: 4 })
    } else if ( this.state.[`${ coordinate }`] === 0 && movement === -1 ) {
      this.setState({ [`${ coordinate }`]: 0 })
    } else {
      this.setState({ [`${ coordinate }`]: this.state.[`${coordinate}`] + movement })
    }

  }

  render() {
    return (
      <div>
        <Board pacmanPosition={ [this.state.x, this.state.y] } facing={ this.state.rotation } />
  
        <button onClick={ this._moveForward }>Move</button>
        <button onClick={ this._rotateRight }>Right</button>
        <button>Left</button>
        <button>Report</button>
      </div>
    );
  }  
}

export default App;
