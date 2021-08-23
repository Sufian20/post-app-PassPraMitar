import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    //console.log(posts.length);
    return (
        <div>
            <h2>Total Post: {posts.length}</h2>
            {
                posts.map(pd => <Post post={pd}></Post>)
            }
        </div>
    );
};

export default Home;