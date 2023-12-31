import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "./../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


import classes from './Register.module.css'
import addAvatarImg from "./../../assets/images/addAvatar.png"
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
            await uploadBytesResumable(storageRef, file).then( () => {
                    getDownloadURL(storageRef).then(async(downloadURL) => {
                        try {
                            await updateProfile(response.user,{
                                displayName: displayName,
                                photoURL: downloadURL,
                            })
                            await setDoc(doc(db, 'users', response.user.uid), {
                                uid: response.user.uid,
                                displayName: displayName,
                                email: email,
                                photoURL: downloadURL
                            })
                            await setDoc(doc(db, 'userChats', response.user.uid), {})
                            navigate("/")
                        }
                        catch(err) {
                            console.log(`Error From Register.js => ${err}`)
                            setError(true)
                            setLoading(false)
                        }
                    });
                }
            );
        }
        catch(err) {
            setError(true)
            setLoading(false)
        }
    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.formWrapper}>
                <span className={classes.logo}>MAB Chat</span>
                <span className={classes.title}>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input className={classes.hidden} type="file" id="file"/>
                    <label className={classes.avatarImg} htmlFor="file" >
                        <img src={addAvatarImg} alt="add avatar" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {error && <span>Something Went Wrong</span>}
                </form>
                <p>already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register

