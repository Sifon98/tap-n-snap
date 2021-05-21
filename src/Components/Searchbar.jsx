import React, { useState, useEffect } from 'react'
import Style from './CSS/Home.module.scss'
import TestImage from '../img/TestImage.jpg'

function Searchbar() {

  const [newPosts, setNewPosts] = useState([]); // -------------------------------- POSTS

    const getImageHandler = async () => {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();

        console.log(data);

        setNewPosts(data);
    }

    useEffect(() => getImageHandler(), [])

  return ( 
    <div>
      <div className={Style.padding}>
      {
        newPosts.map(post => (
            <div>
                <img className={Style.images} src={post.url} alt={post.tags.join(' ')} />
            </div>
        ))
      }
      </div>
    </div>
  );
}

export default Searchbar;
