import React, { useContext } from "react";

import classes from './Chat.module.css'

import CamImg from './../../assets/images/cam.png'
import AddImg from './../../assets/images/add.png'
import MoreImg from './../../assets/images/more.png'
import Messages from "./Messages";
import Input from './Input'
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {

    const { data } = useContext(ChatContext)

 
    return (
        <div className={classes.chat}>
            <div className={classes.chatInfo}>
                <span>{data.user?.displayName}</span>
                <div className={classes.chatIcons}>
                    {/* <img src={CamImg} alt="" />
                    <img src={AddImg} alt="" />
                    <img src={MoreImg} alt="" /> */}
                </div>
            </div>
            <Messages />
            <Input /> 
        </div>
    )
}

export default Chat