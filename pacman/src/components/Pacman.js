import React from 'react';
import sprite from '../utils/pacman.png';
import '../styles/Pacman.css';

function Pacman() {
    return(
        <img id="pacman" src={ sprite } />
    );
}

export default Pacman;