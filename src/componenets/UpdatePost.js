import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../ajax-requests";


function UpdatePost({ posts, token, getPosts }){
    const navigate = useNavigate();
    const { postId } = useParams();

    const [post] = posts.filter((post) => post._id === postId);

    const { title, description, price, location, willDeliver } = post ? post : {};

    const [updatedTitle, setTitle] = useState(title);
    const [updatedDescription, setDescription] = useState(description);
    const [updatedPrice, setPrice] = useState(price);
    const [updatedLocation, setLocation] = useState(location);
    const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedPost = {
            title: updatedTitle,
            description: updatedDescription,
            price: updatedPrice,
            location: updatedLocation,
            willDeliver: updatedWillDeliver,
        }

        const results = await updatePost(postId, token, updatedPost);
            if (results.succcess) {
            getPosts();
            navigate('/');
            } else {
                getPosts();
                navigate('/');
            }
    }

    return (
        <>
        {
        post ? (
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder="Title"
                value={updatedTitle}
                onChange={(ev) => setTitle(ev.target.value)}
                />
                <input 
                type='text'
                placeholder="Description"
                value={updatedDescription}
                onChange={(ev) => setDescription(ev.target.value)}
                />
                <input 
                type='text'
                placeholder="Price"
                value={updatedPrice}
                onChange={(ev) => setPrice(ev.target.value)}
                />
                <input 
                type='text'
                placeholder="Location"
                value={updatedLocation}
                onChange={(ev) => setLocation(ev.target.value)}
                />
                <input 
                type='checkbox'
                name="delivery"
                checked={updatedWillDeliver}
                onChange={(ev) => setWillDeliver(!updatedWillDeliver)}
                />
                <label htmlFor="delivery">Will Deliver</label>
                <button type='submit'>Submit Changes</button>
            </form>
        ) : (
            <h1>Post Does not Exist</h1>
            )}
        </>
    );
    
}

export default UpdatePost