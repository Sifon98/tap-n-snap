import React, { useState, useEffect } from 'react'
import { useStates, useNamedContext } from 'react-easier';

function TempPostImage() {
    
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);


    const postImageHandler = (image, desc, tags) => {
        fetch("http://localhost:4000/posts", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: image,
                user: "User123",
                description: desc,
                tags: tags
            })
        })
    }

    const [newPosts, setNewPosts] = useState([]); // -------------------------------- POSTS

    const getImageHandler = async () => {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();

        console.log(data);

        setNewPosts(data);
    }

    /*
    (2) [{…}, {…}]
        0: {url: "http://www.rspcasa.org.au/wp-content/uploads/2019/01/Adopt-a-cat-or-kitten-from-RSPCA.jpg", tags: Array(2), _id: "60a788cb3f2b7559e463ab06", user: "User123", description: "hejsan", …}
        1: {url: "https://i.imgur.com/W3z3fcL.jpg", tags: Array(2), _id: "60a78ac1d61d803c18bda255", user: "User123", description: "testar", …}
        length: 2
        __proto__: Array(0)
    */
    return (
        <div>
            <h2>Send post</h2>
            <form name="textForm" onSubmit={(e) => {
                e.preventDefault();
                postImageHandler(image, desc, tags);
                }}>
                <input type="text" placeholder="Image URL" onChange={e => { setImage(e.target.value)} } />
                <input type="text" placeholder="Description" onChange={e => { setDesc(e.target.value)} } />
                <input type="text" placeholder="Space seperated tags" onChange={e => { setTags(e.target.value.split(" "))} } />
                <input type="submit" value="Send" />
            </form>
            <hr />
            
            <div>
                <h3>Fetch posts</h3>
                <button onClick={getImageHandler}>Fetch new posts</button>
                {
                    newPosts.map(post => (
                        <div>
                            <img src={post.url} alt={post.tags.join(' ')} />
                            <p>User: {post.user}</p>
                            <p>{post.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TempPostImage