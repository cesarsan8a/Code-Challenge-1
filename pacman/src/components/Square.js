import React from 'react';

function Square({ children }) {
    return(
        <div 
            style={{
                backgroundColor: 'black',
                width: '100%',
                height: '100%'
            }}
        >

            { children }
        
        </div>
    );
}

export default Square;