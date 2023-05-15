import React, { useEffect, useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreateItem({isAuth}) {
    const [title, setTitle] = useState("");
    const [posttext, setPostText] = useState("");

    let navigate = useNavigate();

    const itemsCollectionRef = collection(db, "items");
    const createPost = async () => {
        await addDoc(itemsCollectionRef, {title, posttext, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} });
        navigate("/")
    }

    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    }, [])

    return (
        <div className='createPostPage'>  
            <div className='cpContainer'>
                <h1>Post an Item</h1>
                <div className='inputGp'>
                    <label> Title: </label>
                    <input placeholder='Title...' onChange={(event) => {
                        setTitle(event.target.value)
                    }}/>
                </div>
                <div className="inputGp">
                    <label> Item:</label>
                    <input placeholder='Post' onChange={(event) => {
                        setPostText(event.target.value)
                    }}/>
                </div>
                <button onClick={createPost}> Submit </button>
            </div>
        </div>
    );
}

export default CreateItem;