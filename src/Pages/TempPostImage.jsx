import React, { useState, useEffect } from 'react'
import { useStates, useNamedContext } from 'react-easier';
// import { Posts } from '../../backend/models/Post'

function TempPostImage() {
    
    // const [image, setImage] = useState('');
    const [imageData, setImageData] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);


    /*const postImageHandler = (imageData, desc, tags) => {
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
    }*/

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
        //await photo.save();
    }

    const [newPosts, setNewPosts] = useState([]); 

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
            <form name="textForm" onSubmit={uploadPhoto}>
                <input type="text" placeholder="Description" onChange={e => { setDesc(e.target.value)} } />
                <input type="text" placeholder="Space seperated tags" onChange={e => { setTags(e.target.value.split(" "))} } />
                
                <input name="file" type="file"
                    accept="image/*" onChange={photoChosen} />
                {imageData && <img src={imageData} width="300" />}

                <input type="submit" value="Send" />

            </form>

            {/* <h2>Upload photo</h2>
            <form name="photoUpload" onSubmit={uploadPhoto}>
            
            </form>
            <hr /> */}
            
            <div>
                <h3>Fetch posts</h3>
                <button onClick={getImageHandler}>Fetch new posts</button>
                {
                    newPosts.map(post => (
                        <div>
                            <img src={'../../public/uploads/' + post.url} alt={post.tags.join(' ')} />
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