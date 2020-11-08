import React from 'react';
import Pacman from '../components/Pacman';
import Square from '../components/Square';

function renderSquare(i, [pacmanX, pacmanY]) {
    const x = i % 5;
    const y = Math.floor(i / 5);
    const isPacmanHere = (x === pacmanX &&  y === pacmanY);
    const character = isPacmanHere ? <Pacman /> : null;

    return (
        <div key ={i} style={{ width: '20%', height: '20%' }}>
            <Square>{ character }</Square>
        </div>
    );
}

function Board({ pacmanPosition }) {
    const squares = [];
    for (let i = 0; i < 25; i++) {
        squares.push(renderSquare(i, pacmanPosition))
    }

    console.log(squares);
    return (
        <div
            style={{
                width: '13em',
                height: '13em',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            { squares }
        </div>
    );
}

export default Board;