import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';




const Comments = (props) => {
   // console.log(props.comments.postId);
    const {comment_id} = props.comments.postId;
    const {postId} = useParams([]);
    const {Id} = comment_id.find(post => post.postId === postId);

    console.log(Id);
  
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments/${postId}`;
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

    const {name, email, body} = comments;
   // console.log(comments);

    return (
        <div>
          
            <h5>{name}</h5>
            <h6>{email}</h6>
            <p><small>{body}</small></p>
        </div>
    );
};

export default Comments;