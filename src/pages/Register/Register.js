import React from "react";

import classes from './Register.module.css'
import addAvatarImg from "./../../assets/images/addAvatar.png"

const Register = () => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.formWrapper}>
                <span className={classes.logo}>MAB Chat</span>
                <span className={classes.title}>Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input className={classes.hidden} type="file" id="file"/>
                    <label className={classes.avatarImg} htmlFor="file" >
                        <img src={addAvatarImg} alt="add avatar" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register

