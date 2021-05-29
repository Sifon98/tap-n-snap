import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Searchbar from '../Components/Searchbar'
import Style from './CSS/home.module.scss';
import { Link } from 'react-router-dom'

function Home() {
    const backBtn = false;
    const profileBtn = true;
    const cameraBtn = true;
    const imageBtn = true;

    const [newPosts, setNewPosts] = useState([]); 
    const [display, setDisplay] = useState(null); 
    
    const fetchPosts = async () => {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();

        setNewPosts(data);
        setDisplay(true);
    }

    useEffect(() => fetchPosts(), [])

    return display ? (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Searchbar />
            <div className={Style.postContainer}>
                {
                    newPosts.map(post => (
                        <div key={post['_id']} className={Style.wrapper}>
                            <Link to={`/Post/${post['_id']}`}><img src={'/uploads/' + post.url} alt={post.tags.join(' ')}/></Link>
                            <p>User: {post.user}</p>
                            <p>{post.description}</p>
                            <p>{post.tags.map(tag => '#' + tag).join(' ')}</p>
                        </div>
                    )).sort((a, b) => b - a) // Reverse order, so newest posts at top
                }
            </div>
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
        </div>
    ) : null;
}

export default Home
