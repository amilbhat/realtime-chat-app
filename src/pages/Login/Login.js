import React, { useState } from "react";

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
                </form>
                <p>Don't have an account? Sign Up</p>
            </div>
        </div>
    )
}

export default Login

