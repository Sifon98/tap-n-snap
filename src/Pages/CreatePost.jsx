import React, { useState, useEffect } from 'react';
import Style from './CSS/createPost.module.scss';
import Image from '../img/logo.png'

const CreatePost = () => {

    // State for Post data
    const [imageData, setImageData] = useState('');

    // Tag states
    const [newTag, setNewTag] = useState('');
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
                description: "DESCRIPTION NOT NEEDED", // <-- description should be removed from backend 
                tags: tags
            })
        })

        console.log('Photo uploaded!');
    }

    const addTag = () => {
        const boxValue = document.getElementById('tagBox').value;

        if(boxValue == ""){
            console.log(tags);
            return;
        }else{
            setTags(tags => [...tags, newTag]);
            setNewTag('');
        }
    }

    useEffect(() => {
        addTag()
    }, [tags]);

    function removeTag(tagToRemove) {
        setTags(tags => (
            tags.filter(tag => tag !== tagToRemove))
        )
    }

    return (
        <div className={Style.createPost}>

            <div className={Style.wrapper}>
                
                {imageData ? <img src={imageData} width="175" /> : <div className={Style.placeholder}><i className="fas fa-user fa-5x"></i></div>}
                <div className={Style.tags}>
                    <input id="tagBox" maxLength="15" type="text" placeholder="Enter tag" onChange={e => setNewTag(e.target.value)} value={newTag} />
                    <button className={Style.icon} onClick={addTag}><i className="fas fa-check"></i></button>
                    <div className={Style.tagDiv}>
                        {
                            tags.map(tag => (
                                <div key={Date.now() + Math.random()} onClick={() => removeTag(tag)}>
                                    {tag} <i className="fas fa-times"></i>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <form name="textForm" onSubmit={uploadPhoto}>
                <input type="file" name="file" accept="image/*" onChange={photoChosen} />
                <input type="button" value="TAKE PHOTO" className={Style.inputButton} />
                <input type="submit" value="&#xf067;" className={Style.inputButton} />
            </form>
        </div>
    )
}

export default CreatePost;
