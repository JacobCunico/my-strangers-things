import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Register, Posts, Login, CreatePost } from "./";
import { fetchPosts } from '../ajax-requests';


function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);


    function tokenCheck() {
    if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'));
    }}

    async function getPosts() {
        const results = await fetchPosts();
        if (results.success) {
            setPosts(results.data.posts);
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
        getPosts();
    }, [token])


    return (
        <div>
            <Routes>
                <Route 
                    path='/posts' 
                    element={<Posts posts={posts} />}
                />
                  <Route 
                    path='/login' 
                    element={<Login setToken={setToken}/>}
                />
                <Route 
                    path='/register' 
                    element={<Register setToken={setToken} />}
                />
                <Route 
                    path='/create-post' 
                    element={<CreatePost />}
                />
            </Routes>
        </div>
        );
    }

export default App;