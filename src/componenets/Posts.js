import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { deletePost } from "../ajax-requests";

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
                        <p style={{padding: "1px 40px", fontSize: "20px", flexFlow: "row wrap", border: "solid black" }}>
                            <span style={{ fontWeight: "bold"}}> Title:</span> {post.title}
                            <span style={{ fontWeight: "bold"}}> Description:</span> {post.description}
                            <span style={{ fontWeight: "bold"}}> Price:</span> {post.price} 
                            <span style={{ fontWeight: "bold"}}> Location:</span>{post.location} 
                            <span style={{ fontWeight: "bold"}}> Delivery:</span>{post.willDeliver}</p>
                        <button onClick={deletePost}>Delete Post</button>
                        <button><Link to={`/update-post/${post._id}`} >Edit Post</Link></button>
                        </>
                    ) : (
                        <p style={{padding: "1px 40px", fontSize: "20px", flexFlow: "row wrap", border: "solid black" }}>
                        <span style={{ fontWeight: "bold"}}> Title:</span> {post.title}
                        <span style={{ fontWeight: "bold"}}> Description:</span> {post.description}
                        <span style={{ fontWeight: "bold"}}> Price:</span> {post.price} 
                        <span style={{ fontWeight: "bold"}}> Location:</span>{post.location} 
                        <span style={{ fontWeight: "bold"}}> Delivery:</span>{post.willDeliver}</p>
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