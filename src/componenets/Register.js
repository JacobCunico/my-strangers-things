import React, { useState } from "react";
import { registerUser } from '../ajax-requests';

function Register({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const user = {username, password};
        
        const results = await registerUser(user);

        console.log(results);

        if (results.success) {
            setToken(results.data.token);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register;