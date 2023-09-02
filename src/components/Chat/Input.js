import React from "react";

import classes from './Input.module.css'
import Img from './../../assets/images/img.png'
import Attach from './../../assets/images/attach.png'


const Input = () => {
    return (
        <div className={classes.input}>
            <input type="text" placeholder="Type Here ..." />
            <div className={classes.send}>
                <img src={Attach} alt="" />
                <input type="file" className={classes.hidden} id="file" />
                <label>
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input;