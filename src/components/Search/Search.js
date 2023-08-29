import React from "react";

import classes from './Search.module.css'

const Search = () => {
    return (
        <div className={classes.search}>
            <div className={classes.searchForm}>
                <input type="text" placeholder="find a user" />
            </div>
            <div className={classes.userChat}>
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="chat image" />
                <div className={classes.userChatInfo}>
                    <span>SomeOne</span>
                </div>

            </div>
        </div>
    )
}

export default Search