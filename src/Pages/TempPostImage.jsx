import React, { useState } from 'react'

function TempPostImage() {
    
    // State for Post data
    const [imageData, setImageData] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);

    // State for fetched Post objects
    const [newPosts, setNewPosts] = useState([]); 

    const photoChosen = () => {
        let file = document.forms.textForm.file.files[0];
        if (!file) { return; }
        // convert the file data to a base64-encoded url
        // used for preview and also for saving the photo later
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            // imageData = reader.result;
            setImageData(reader.result);
        }, false);
        reader.readAsDataURL(file);
    }

    // upload photo
    const uploadPhoto = async e => {
        e.preventDefault();
        // If no photo chosen do nothing
        if (!imageData) { return; }
        // Create a new Photo
        // let photo = new Posts({
        //     // (we are not using tag and description fields yet)
        //     url: imageData,
        //     user: "user321",
        //     description: desc,
        //     tags: tags
        // });
        //const postImageHandler = (imageData, desc, tags) => {
        fetch("http://localhost:4000/posts", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: imageData,
                user: "User123",
                description: desc,
                tags: tags
            })
        })
    }

    const getImageHandler = async () => {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();

        console.log(data);
        setNewPosts(data);
    }

    return (
        <div>
            <h2>Send post</h2>
            <form name="textForm" onSubmit={uploadPhoto}>
                <input type="text" placeholder="Description" onChange={e => { setDesc(e.target.value)} } />
                <input type="text" placeholder="Space seperated tags" onChange={e => { setTags(e.target.value.split(" "))} } />
                
                <input name="file" type="file"
                    accept="image/*" onChange={photoChosen} />
                {imageData && <img src={imageData} width="300" />}

                <input type="submit" value="Send" />

            </form>
            
            <div>
                <h3>Fetch posts</h3>
                <button onClick={getImageHandler}>Fetch new posts</button>
                {
                    newPosts.map(post => (
                        <div key={post['_id']} style={{ 
                            border: '2px solid #BBB', 
                            margin: '5px',
                            padding: '10px'
                            }}>
                            <img 
                                src={'/uploads/' + post.url} 
                                alt={post.tags.join(' ')} 
                                style={{ width: '100%' }}/>
                            <p>User: {post.user}</p>
                            <p>{post.description}</p>
                            <p>{post.tags.map(tag => '#' + tag).join(' ')}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TempPostImage