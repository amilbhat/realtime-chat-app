import React from "react";

import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <span className={classes.logo}>MAB Chat</span>
            <div className={classes.user}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user avatar" />
                <span>Amil</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar