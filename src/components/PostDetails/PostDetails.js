import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../fakeData/Comments';
import './PostDetails.css';


const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([])
    
    //console.log(postId);

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    })
    
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data =>setComment(data))
    }, [])

    const {title, body} = post;
    
    return (
        <div>
           <div className="post-details-col">
                <h2>{title}</h2>
                <p>{body}</p>
           </div>
           <div>
           <h2>Comments</h2>
              {
                  comment.map(com =>  <Comments comments={com} key={com.id}></Comments>)
              }
             
           </div>
        </div>
    );
};

export default PostDetails;