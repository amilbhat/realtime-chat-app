import React, { useContext } from "react";
import {signOut} from "firebase/auth";
import { auth } from "./../../firebase"

import classes from './Navbar.module.css'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className={classes.navbar}>
            <span className={classes.logo}>MAB Chat</span>
            <div className={classes.user}>
                <img src={currentUser.photoURL} alt="user avatar" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>{signOut(auth)}}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar