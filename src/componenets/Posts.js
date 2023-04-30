import React, { Fragment } from "react";

function Posts({ posts, deletePost }) {

    return (
    <>
    {
        posts && posts.map((post) => {
            return (
                <Fragment key={post._id}>
                {
                    post.isAuthor ? (
                        <>
                        <p>Title: {post.title} Description: {post.description} Price: {post.price}</p>
                        <button onClick={deletePost}>Delete Post</button>
                        </>
                    ) : (
                        <p>Title: {post.title} Description: {post.description} Price: {post.price}</p>
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