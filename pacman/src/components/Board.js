import React from 'react';
import Pacman from '../components/Pacman';
import Square from '../components/Square';
import '../styles/Board.css';

function renderSquare(i, [pacmanX, pacmanY], rotation) {
    const x = i % 5; // 5x5 grid
    const y = 4 - Math.floor(i / 5); // The offset of 4 is to relocate the origin (0,0) from the top left corner to bottom left corner.
    const isPacmanHere = (x === pacmanX &&  y === pacmanY); // checks the location of pacman in the square
    const character = isPacmanHere ? <Pacman rotate = { rotation } /> : null; // if true shows pacman in the square

    return (
        <div key ={i} id='squares'>
            <Square>{ character }</Square>
        </div>
    );
}

function Board({ pacmanPosition, rotation }) {
    const squares = []; // The Board component will consist in an array of the 25 positions that Pacman can be in
    for (let i = 0; i < 25; i++) {
        squares.push(renderSquare(i, pacmanPosition, rotation))
    }

    return (
        <div id="board">
            { squares }
        </div>
    );
}

export default Board;