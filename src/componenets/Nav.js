import React from "react";
import { Link } from 'react-router-dom';


function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
    function logout() {
        setToken('');
        setIsLoggedIn(false);
        window.localStorage.removeItem('token');
        alert('You have been logged out');

    }

    return(
        <nav>
            <h1>Stranger's things</h1>
            <button><Link to= '/'>Home</Link></button>
            {
                isLoggedIn ? (
                    <>
                    <button onClick={logout}>Log Out</button>
                    <button><Link to='/create-post'>Create Post</Link></button>
                    </>
                ) : (
                    <>
                    <button><Link to='/login'>Login</Link></button>
                    <button><Link to='/Register'>Register</Link></button>
                    </>
                )
            }
        </nav>
    )
}

export default Nav;