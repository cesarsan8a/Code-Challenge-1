import React from 'react';
import sprite from '../utils/pacman.png';
import '../styles/Pacman.css';

function Pacman(prop) {
    console.log(prop.rotate);
    const isFacingW = prop.rotate === 180;
    return(
        <img 
        id="pacman" 
        src={ sprite }
        style={{
            transform: `rotate(${ prop.rotate }deg)`,
        }}
        />
    );
}

export default Pacman;