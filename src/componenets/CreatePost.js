import React, { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    return (
        <form>
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
            <button type='submit'>Create Post</button>
        </form>
    )
}

export default CreatePost;