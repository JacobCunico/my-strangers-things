import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Posts({ posts }) {

    return (
    <>
    {
        posts && posts.map((post) => {
            return (
                <Fragment key={post._id}>
                {
                    post.isAuthor ? (
                        <>
                        <p>Title: {post.title} Description: {post.description} Price: {post.price} location: {post.location} Delivery: {post.willDeliver}</p>
                        <button>Delete Post</button>
                        <button><Link to={`/update-post/${post._id}`} >Edit Post</Link></button>
                        </>
                    ) : (
                        <p>Title: {post.title} Description: {post.description} Price: {post.price} location: {post.location} Delivery: {post.willDeliver}</p>
                    )
                }
                </Fragment>
            )
        })  
    }
    </>
    );
}

export default Posts;