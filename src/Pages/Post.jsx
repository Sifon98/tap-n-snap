import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Style from './CSS/post.module.scss';

function Post({match}) {
    const [posts, setPost] = useState([]); 
    const [display, setDisplay] = useState(null);
    
    const fetchPost = async () => {
        const res = await fetch(`http://localhost:4000/posts/${match.params.id}`);
        const data = await res.json();

        setPost(data);
        setDisplay(true);
    }

    useEffect(() => fetchPost(), [match.params.id])

    return display ? (
        <div>
            <div className={Style.wrapper}>
                <div className={Style.post}>
                    <img src={'/uploads/' + posts.url} alt={posts.tags.join(' ')}/>
                    <p>User: {posts.user}</p>
                    <p>{posts.description}</p>
                    <p>{posts.tags.map(tag => '#' + tag).join(' ')}</p>
                </div>
            </div>
        </div>
    ) : null;
}

export default Post