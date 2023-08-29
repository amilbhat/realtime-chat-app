import React from "react";

import classes from './Chats.module.css'

const Chats = () => {
    return (
        <div className={classes.chats}>
            <div className={classes.userChat}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user profile" />
                <div className={classes.userChatInfo}>
                    <span>SomeOne</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={classes.userChat}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user profile" />
                <div className={classes.userChatInfo}>
                    <span>SomeOne</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={classes.userChat}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user profile" />
                <div className={classes.userChatInfo}>
                    <span>SomeOne</span>
                    <p>Hello</p>
                </div>
            </div>

        </div>
    )
}

export default Chats