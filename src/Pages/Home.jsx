import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Searchbar from '../Components/Searchbar'
import styles from '../Components/CSS/Home.module.scss';

function Home() {
    const backBtn = false;
    const profileBtn = true;
    const cameraBtn = true;
    const imageBtn = true;

    const [newPosts, setNewPosts] = useState([]); 

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('http://localhost:4000/posts');
            const data = await res.json();

            console.log(data);
            setNewPosts(data);
        }

        fetchPosts();
    }, [])


    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Searchbar />
            <div className={styles.postContainer}>
                {
                    newPosts.map(post => (
                        <div key={post['_id']} style={{ border: '2px solid #BBB', margin: '5px', padding: '10px' }}>
                            <img src={'/uploads/' + post.url} alt={post.tags.join(' ')} style={{ width: '100%' }}/>
                            <p>User: {post.user}</p>
                            <p>{post.description}</p>
                            <p>{post.tags.map(tag => '#' + tag).join(' ')}</p>
                        </div>
                    )).sort((a, b) => b - a) // Reverse order, so newest posts at top
                }
            </div>
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
        </div>
    )
}

export default Home
