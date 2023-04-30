import React from "react";
import { Link } from 'react-router-dom';


function Nav({ setToken }) {
    function logout() {
        setToken('');
        window.localStorage.removeItem('token');
        alert('You have been logged out');
        
    }

    return(
        <nav>
            <h1>Stranger's things</h1>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/Register'>Register</Link></button>
            <button onClick={logout}>Log Out</button>
        </nav>
    )
}

export default Nav;