import React, { useState, useEffect } from 'react'
import Searchbar from '../Components/Searchbar'
import Style from './CSS/home.module.scss';
import { Link } from 'react-router-dom'
import ReactPullToRefresh from 'react-pull-to-refresh'

function Home() {
    const [newPosts, setNewPosts] = useState([]); 

    const [display, setDisplay] = useState(null); 
    const [search, newSearch] = useState('');
    
    const fetchPosts = async () => {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();

        setNewPosts(data);
        setDisplay(true);
    }

    useEffect(() => fetchPosts(), [])

    function handleRefresh() {
        const success = true
        if (success) {
          setTimeout(function(){ window.location.reload(false); }, 700);
        } else {
          console.log("Scroll refresh failed")
        }
    }

    function logSearch() {
        console.log(search)
    }

    return display ? (
        <ReactPullToRefresh onRefresh={handleRefresh} className="wrapperRefresh">
            <Searchbar newSearch={newSearch} logSearch={logSearch}/>
            <div className={Style.postContainer}>
                {
                    newPosts.sort((a, b) => a.date > b.date ? -1 : 1).map(post => (
                        <div key={post['_id']} className={Style.wrapper}>
                            <div className={Style.post}>
                                <Link to={`/Post/${post['_id']}`}><img src={'/uploads/' + post.url} alt={post.tags.join(' ')}/></Link>
                                <div className={Style.info}>
                                    <p>{post.user}</p>
                                    <div className={Style.tagDiv}>
                                    {
                                        post.tags.map(tag => <p key={post + Math.random()} className={Style.tags}>{tag}</p>)
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ReactPullToRefresh>
    ) : null;
}

export default Home
