import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";

import classes from './Login.module.css'
import addAvatarImg from "./../../assets/images/addAvatar.png"

const Login = () => {

    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        // Pending From Here
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        try{
            await signInWithEmailAndPassword(auth, email, password)
                navigate("/")

        }
        catch(err) {
            setError(true)
            console.log(err)
        }
    }


    return (
        <div className={classes.formContainer}>
            <div className={classes.formWrapper}>
                <span className={classes.logo}>MAB Chat</span>
                <span className={classes.title}>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign In</button>
                    {error && <span>Something Went Wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login

