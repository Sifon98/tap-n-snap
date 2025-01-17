import React, { useState, useEffect } from 'react';
import Style from './CSS/createPost.module.scss';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const CreatePost = () => {

    // State for Post data
    const [imageData, setImageData] = useState('');


    // State for geolocation coordinates
    const [lat, setLat] = useState('');
    const [long, setLong] = useState(''); 
    const [message, setMessage] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState([]); 

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

    // Get coordinates for location
    const getLocation =  () => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        }, err => console.log(err));
    }

    const removeLocation = () => {
        setMessage(false)
    };

    // Get location with coordinates
    const fetchLocation = async () => {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +`${lat},${long}` + '&result_type=locality&key=AIzaSyBzpTdrJHHqA12vSEEGI-vvtn85FEC94hs')
        const data = await response.json();
        setLocation(data['results'])

        setMessage(true)
    }

    const user = async() => {
        const response = await fetch('http://localhost:4000/user', {
              headers: {'Content-Type': 'application/json'},
              credentials: 'include'
        });
  
        const content = await response.json();
        setName(content.name);
    }

    const uploadPhoto = async e => {
        e.preventDefault();
        // If no photo chosen do nothing
        if (!imageData) { return; }

        const tester = document.getElementById('test').innerHTML;
        console.log(tester)

        fetch("http://localhost:4000/posts", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: imageData,
                user: name,
                location: tester,
                tags: tags
            })
        })

        console.log('Photo uploaded!');
    }

    const addTag = () => {
        const boxValue = document.getElementById('tagBox').value;

        if (boxValue == "") { return; } 

        setTags(tags => [...tags, newTag]);
        setNewTag('');
    }

    // Re-render with callback
    useEffect(() => {
        addTag()
        user()
    }, [tags]);

    useEffect(() => {
        getLocation()
    }, [long]);

    function removeTag(tagToRemove) {
        setTags(tags => (
            tags.filter(tag => tag !== tagToRemove))
        )
    }

    return (
        <div>
        <Navbar />
        <form name="textForm" className={Style.form} onSubmit={uploadPhoto}>
            <div className={Style.wrapper}>
                {imageData ? <img src={imageData} width="175" /> : <div className={Style.placeholder}><i className="fas fa-user fa-5x"></i></div>}
                <div className={Style.buttonLayout}>
                    <input type="file" name="file" accept="image/*" onChange={photoChosen} className={Style.inputFile} />
                    <input type="button" value="Take photo" className={Style.inputButton} />
                </div>
            </div>
            <div className={Style.tags}>
                <div className={Style.centerDiv}>
                    {
                    message ? location.map(location => <div key={location + Math.random()}><p id="test" className={Style.location} >{location.formatted_address} </p></div>)
                            : <p id="test" className={Style.location}></p>
                    }
                    <div className = {Style.getlocation}>
                        {
                        message ? <button type="button" className={Style.getLocation} onClick={removeLocation} >Remove</button> 
                                : <button type="button"  className={Style.getLocation} onClick={fetchLocation} >Get Location</button>
                        }
                    </div>
                    <input id="tagBox" maxLength="15" type="text" placeholder="Enter tags" onChange={e => setNewTag(e.target.value)} value={newTag} autoComplete="off"/>
                    <button type="button" className={Style.icon} onClick={addTag}><i className="fas fa-check"></i></button>
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
            <div className={Style.submit}>
                <input type="submit" value="&#xf067;" className={Style.inputButton, Style.inputSubmit} />
            </div>
            <Link to="/home" className={Style.iHelper}>
                <i className="fas fa-chevron-left"></i>
            </Link>
        </form>
        </div>
        
    )
}

export default CreatePost;
