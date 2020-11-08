import React from 'react';
import sprite from '../utils/pacman.png';
import '../styles/Pacman.css';

function Pacman(prop) {
    return(
        <img 
        id="pacman" 
        src={ sprite }
        style={{
            transform: `rotate(${ prop.rotate }deg)`, // The transform-rotate function allows Pacman to rotate and face diferent directions
        }}
        />
    );
}

export default Pacman;