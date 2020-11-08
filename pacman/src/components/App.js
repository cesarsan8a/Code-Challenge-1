import React, { Component } from 'react';
import '../styles/App.css';
import Board from '../components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: null, // horizontal location
      y: null, // vertical location
      isPacmanOntheMap: false,
      rotation: 0, // where it's facing
      display: 'none' // report visibility
    };

    this._moveForward = this._moveForward.bind(this);
    this._rotateRight = this._rotateRight.bind(this);
    this._rotateLeft = this._rotateLeft.bind(this);
    this._report = this._report.bind(this);
    this._handleSubmit= this._handleSubmit.bind(this);
  }

  _moveForward() {
    if (!this.state.isPacmanOntheMap) return; //ignores commands if pacman is not on the map.
    
    // depending on which direction pacman is facing it will move in that direction one unit
    if ( this.state.rotation === 0 && this.state.x < 4 ) {
      this.setState({ x: this.state.x + 1 });
    } else if ( this.state.rotation === 180 && this.state.x > 0 ) {
      this.setState({ x: this.state.x - 1 });
    } else if ( this.state.rotation === 270 && this.state.y < 4 ) {
      this.setState({ y: this.state.y + 1 });
    } else if ( this.state.rotation === 90 && this.state.y > 0 ){
      this.setState({ y: this.state.y - 1 })
    }

    // because the grid is 5x5 the limits are set at 0 and 4
    this.setState({ display: 'none' });
  }

  _rotateRight() {
    if (!this.state.isPacmanOntheMap) return;
    // it will allow pacman to rotate clock-wise 90deg
    if (this.state.rotation >= 270) { // 360deg == 0deg
      this.setState({ rotation: 0 })
    } else {
      this.setState({ rotation: this.state.rotation + 90 })
    }
    this.setState({ display: 'none' });
  }

  _rotateLeft() {
    if (!this.state.isPacmanOntheMap) return;
    // same as above but anticlock-wise
    if (this.state.rotation <= 0) {
      this.setState({ rotation: 270 })
    } else {
      this.setState({ rotation: Math.abs(this.state.rotation - 90) })
    }
    this.setState({ display: 'none' });
  }

  _report() {
    if (!this.state.isPacmanOntheMap) return;
    // shows the location where pacman is and where is facing.
    this.setState({ display: 'inline' });
  }

  _handleSubmit(event) {
    // allows to relocate pacman in any point of the grid
    event.preventDefault();
    this.setState({ x: parseFloat(event.target.x.value) });
    this.setState({ y: parseFloat(event.target.y.value) });
    this.setState({ rotation: parseFloat(event.target.rotation.value) })
    this.setState({ display: 'none' });
    this.setState({ isPacmanOntheMap: true });
  }

  render() {
    let facing;
    // translation of deg into cardinal points
    if ( this.state.rotation === 0 ) {
      facing = "East";
    } else if ( this.state.rotation === 90 ) {
      facing = "South";
    } else if ( this.state.rotation === 180 ) {
      facing = "West";
    } else if ( this.state.rotation === 270 ) {
      facing = "North";
    }

    return (
      <div>
        <Board pacmanPosition={ [this.state.x, this.state.y] } rotation={ this.state.rotation } />
  
        <button onClick={ this._moveForward }>Move</button>
        <button onClick={ this._rotateRight }>Right</button>
        <button onClick={ this._rotateLeft }>Left</button>
        <button onClick={ this._report }> Report</button>

        <form onSubmit={ this._handleSubmit }>

          <label>
            X Coordanate:
            <input id='x' autoFocus type="number" min="0" max="4" placeholder="x" required /> 
          </label>

          <br />

          <label>
            Y Coordenate:
            <input id="y" type="number" min="0" max="4" placeholder="y" required />
          </label>

          <br />

          {/* The values of the cardinal directions represent the angle in a circle */}
          <label>
            North:
            <input type='radio'  id='north' name='rotation' value='270' />
          </label>
          <label>
            East:
            <input type='radio' defaultChecked id='east' name='rotation' value='0' />
          </label>
          <label>
            South:
            <input type='radio' id='south' name='rotation' value='90' />
          </label>
          <label>
            West:
            <input type='radio' id='west' name='rotation' value='180' />
          </label>



          <input type="submit" value="Place" />
        </form>

        <div id="report" style={{ display:`${ this.state.display }` }}>
          <h2>Pacman's coordinates are ({this.state.x}, {this.state.y}) and is facing { facing }</h2>
        </div>
      </div>
    );
  }  
}

export default App;
