import React from "react";

import classes from './Login.module.css'
import addAvatarImg from "./../../assets/images/addAvatar.png"

const Login = () => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.formWrapper}>
                <span className={classes.logo}>MAB Chat</span>
                <span className={classes.title}>Register</span>
                <form>
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

