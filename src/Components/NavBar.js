import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav>
                <Link to='/'><h2>Go back to list?</h2></Link>
            </nav>
        </>
    );
}

export default NavBar;
