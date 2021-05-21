import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Style from '../Components/CSS/profile.module.scss'

function Profile() {
    const backBtn = true;
    const profileBtn = false;
    const cameraBtn = true;
    const imageBtn = true;

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
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <div className={Style.wrapper}>
                
            </div>
            <hr/>
            <div className={Style.imgWrapper}>
            {
                newPosts.map(post => (
                    <div>
                        <img className={Style.images} src={post.url} alt={post.tags.join(' ')} />
                    </div>
                ))
            }
            </div>
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
        </div>
    )
}

export default Profile
