import React from 'react';
import Pacman from '../components/Pacman';
import Square from '../components/Square';
import '../styles/Board.css';

function renderSquare(i, [pacmanX, pacmanY], rotation) {
    const x = i % 5;
    const y = 4 - Math.floor(i / 5);
    const isPacmanHere = (x === pacmanX &&  y === pacmanY);
    const character = isPacmanHere ? <Pacman rotate = { rotation } /> : null;

    return (
        <div key ={i} style={{ width: '20%', height: '20%' }}>
            <Square>{ character }</Square>
        </div>
    );
}

function Board({ pacmanPosition, rotation }) {
    const squares = [];
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