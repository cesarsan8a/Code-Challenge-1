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
    this._rotateRight = this._rotateRight.bind(this);
    this._rotateLeft = this._rotateLeft.bind(this);
  }

  _moveForward() {
    if ( this.state.rotation === 0 && this.state.x < 4 ) {
      this.setState({ x: this.state.x + 1 });
    } else if ( this.state.rotation === 180 && this.state.x > 0 ) {
      this.setState({ x: this.state.x - 1 });
    } else if ( this.state.rotation === 90 && this.state.y < 4 ) {
      this.setState({ y: this.state.y + 1 });
    } else if ( this.state.rotation === 270 && this.state.y > 0 ){
      this.setState({ y: this.state.y - 1 })
    }
  }

  _rotateRight() {
    if (this.state.rotation >= 270) {
      this.setState({ rotation: 0 })
    } else {
      this.setState({ rotation: this.state.rotation + 90 })
    }
  }

  _rotateLeft() {
    if (this.state.rotation <= 0) {
      this.setState({ rotation: 270 })
    } else {
      this.setState({ rotation: Math.abs(this.state.rotation - 90) })
    }
  }


  render() {
    return (
      <div>
        <Board pacmanPosition={ [this.state.x, this.state.y] } rotation={ this.state.rotation } />
  
        <button onClick={ this._moveForward }>Move</button>
        <button onClick={ this._rotateRight }>Right</button>
        <button onClick={ this._rotateLeft }>Left</button>
        <button>Report</button>
      </div>
    );
  }  
}

export default App;
