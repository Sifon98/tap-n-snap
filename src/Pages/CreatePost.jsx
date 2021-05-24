import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Components/CSS/createPost.module.scss';

const CreatePost = () => {
    
    // State for Post data
    const [imageData, setImageData] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);

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

    const uploadPhoto = async e => {
        e.preventDefault();
        // If no photo chosen do nothing
        if (!imageData) { return; }

        fetch("http://localhost:4000/posts", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: imageData,
                user: "User123", // <-- temporary user
                description: desc,
                tags: tags
            })
        })
    }

    return (
        <div className={styles.createPost}>
            <Link className={styles.backArrow} to="/">
                <i className="fas fa-arrow-left fa-3x"></i>
            </Link>
            <form name="textForm" onSubmit={uploadPhoto}> 
                <input type="text" placeholder="Description" onChange={e => { setDesc(e.target.value)} } />
                <input type="text" placeholder="Space seperated tags" onChange={e => { setTags(e.target.value.split(" "))} } />
                
                <input name="file" type="file"
                    accept="image/*" onChange={photoChosen} />
                {imageData && <img src={imageData} width="300" />}

                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default CreatePost;