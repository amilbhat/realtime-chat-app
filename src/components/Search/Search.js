import React, { useContext, useState } from "react";
import { collection, query, where, getDoc, setDoc, getDocs,serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "./../../firebase"
import { AuthContext } from  "./../../context/AuthContext"  

import classes from './Search.module.css'

const Search = () => {

    const [ username, setUsername ] = useState("")
    const [ user, setUser ] = useState(null)
    const [ error, setError ] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setUser(doc.data())
            });
        }catch(err) {
            setError(true)
            console.log(err)
        }
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch(); 
    }
    const handleSelect = async () => {
        // check chat collection is there or create chat
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const response = await getDoc(doc(db, "chats", combinedId))
            if (!response.exists()) {
                await setDoc(doc(db, "chats", combinedId), {messages: []});
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId+".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                })

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId+".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                })
            }
        }
        catch (err) {
            console.log(err)
        }
        setUser(null)
        setUsername("")
    }


    return (
        <div className={classes.search}>
            <div className={classes.searchForm}>
                <input 
                    type="text" 
                    placeholder="find a user" 
                    onKeyDown={handleKey} 
                    onChange={e=> setUsername(e.target.value)} 
                    value={username} />
            </div>
            {error && <span>User not Found!</span>}
            {user && (<div className={classes.userChat} onClick = {handleSelect}>
                <img src={user.photoURL} alt="searched User" />
                <div className={classes.userChatInfo}>
                    <span>{user.displayName}</span>
                </div>
            </div>)}
        </div>
    )
}

export default Search