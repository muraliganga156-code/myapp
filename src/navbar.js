import React from 'react';
function navbar(){
    return(
        <nav>
            <h2>My react app</h2>
            <a href="/">Home</a>
            {' | '}
            <a href="/contact">Contact</a>
            </nav>
    );
}
export default navbar;