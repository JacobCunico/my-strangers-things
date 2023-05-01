import React, { useState } from "react";
import { makePost } from "../ajax-requests"; 

    function CreatePost({ token, getPosts }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const post = {title, description, price, location, willDeliver}

        const results = await makePost(post, token)


        if (results.succcess) {
            getPosts()
        } else (
            getPosts()
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Title'
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
            />
            <input
                type='text'
                placeholder="Enter Description"
                value={description}
                onChange={(event) => {setDescription(event.target.value)}}
            />
            <input
                type='text'
                placeholder="Enter Price"
                value={price}
                onChange={(event) => {setPrice(event.target.value)}}
            />
            <input
                type='text'
                placeholder="Enter Location"
                value={location}
                onChange={(event) => {setLocation(event.target.value)}}
            />
            <input
                type='checkbox'
                name="delivery"
                checked={willDeliver}
                onChange={(event) => {setWillDeliver(event.target.value)}}
            />
            <button type='submit'>Create Post</button>
        </form>
    )
}

export default CreatePost;