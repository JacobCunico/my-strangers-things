import React from "react";

function Posts({ posts }) {

    return (
    <>
    {
        posts && posts.map((posts) => {
            return (
                <p key={posts._id}>Title: {posts.title} Description: {posts.description}</p>
            )
        })  
    }
    </>
    );
}

export default Posts;