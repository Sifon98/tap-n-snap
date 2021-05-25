import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Components/CSS/createPost.module.scss';

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

        console.log('Photo uploaded!');
    }

    return (
        <div className={Style.createPost}>

            <div className={Style.wrapper}>
                {imageData && <img src={imageData} width="175" />}
                <div className={Style.tags}>
                    <input type="text" placeholder="Tags..." onChange={e => { setTags(e.target.value.split(" "))} } />
                    <p>{tags}</p>
                </div>
            </div>

            <form name="textForm" onSubmit={uploadPhoto}> 
                <input name="file" type="file" accept="image/*" onChange={photoChosen} />
                <button>TAKE PHOTO<i className="fas fa-camera fa-2x"></i></button>
                <input type="submit" value="SEND" className={Style.inputButton} />
            </form>
        </div>
    )
}

export default CreatePost;