import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Components/CSS/createPost.module.scss';

const CreatePost = () => {

    // State for Post data
    const [imageData, setImageData] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [tagsArray, setTagsArray] = useState([]);
    const [oldArray, setOldArray] = useState([]);
    const [tagId, setTagId] = useState(0);
    const [divId, setDivId] = useState(0);

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

    const addTag = () => {
        const boxValue = document.getElementById('tagBox').value;

        if(boxValue == ""){
            console.log(tagsArray);
            console.log(oldArray);
            return;
        }else{
            setOldArray(tagsArray);
            setTagsArray(oldArray => [...oldArray, boxValue]);
            setTagId(tagId + 1);
            setDivId(divId + 1);
            console.log(tagsArray);
            console.log(oldArray);

            var tag = document.createElement('div');
            tag.value = boxValue;
            tag.id = "Div" + divId;
            tag.innerHTML = boxValue + " " + `<i id=${tagId} value="${boxValue}" class="fas fa-times"></i>`;
            var element = document.getElementById("tagDiv");
            element.appendChild(tag);

            document.getElementById("Div" + divId).addEventListener("click", removeTag);

            document.getElementById('tagBox').value = ''
        }
    }

    function removeTag() {
        console.log("YAYAYA")
        var removeDiv = document.getElementById(this.id);
        console.log(removeDiv)

        var test = document.getElementById(this.id).value;
        var arr = tagsArray;
        console.log(test)
        console.log(arr)

        // ======== Code works but the array isnt updated as it should ========
        arr = arr.filter(e => e !== `${test}`);
        setTagsArray(arr)
        setOldArray(arr)
        removeDiv.parentNode.removeChild(removeDiv);
    }

    return (
        <div className={Style.createPost}>

            <div className={Style.wrapper}>
                {imageData && <img src={imageData} width="175" />}
                <div className={Style.tags}>
                    <input id="tagBox" maxLength="15" type="text" placeholder="Tags..." onChange={e => { setTags(e.target.value.split(" "))} } />
                    <button className={Style.icon} onClick={addTag}><i className="fas fa-check"></i></button>
                    <div id="tagDiv" className={Style.tagDiv}>

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