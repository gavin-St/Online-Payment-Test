import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase-config';

function Home({isAuth}) {
    const [postLists, setPostList] = useState([]);
    const itemsCollectionRef = collection(db, "items");
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(itemsCollectionRef);
            
            setPostList(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })));
            //console.log(postLists)
        }
        getPosts();
        
    })

    const deletePost = async (id) => {
        const postDoc = doc(db, "items", id);
        await deleteDoc(postDoc);
    }
    
    return (
        <div className='homePage'>
            Home
            {postLists.map((post) => {
                return (
                    <div className='post'> 
                        <div className='postHeader'> 
                            <div className='title'>
                                <h1> {post.title}</h1>
                            </div>
                            <div className='deletePost'>
                                {isAuth && post.author.id === auth.currentUser.uid && 
                                    <button onClick={() => deletePost(post.id)}> &#128465;</button>
                                }
                            </div>
                        </div>
                        <div className='postTextContainer'>
                            {post.posttext}
                        </div>
                        <h3>@{post.author.name}</h3>
                    </div>
                )
            })} 
        </div>
    );
}

export default Home;