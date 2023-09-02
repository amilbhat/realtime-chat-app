import React from "react";

import classes from './Message.module.css'

const Message = () => {
    return (
        <div className={`${classes.message} ${classes.owner}`}>
            <div className={classes.messageInfo}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>just now</span>
            </div>
            <div className={classes.messageContent}>
                <p>Hello</p>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
        </div>
    )
}

export default Message