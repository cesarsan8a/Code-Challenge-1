import React from 'react';
import '../styles/Square.css';


function Square({ children }) {
    return(
        <div id="square">
            {/* So it ignores the pacman component */}
            { children }
        </div>
    );
}

export default Square;