import React, { useEffect, useState, useContext } from 'react'

import classes from  './Messages.module.css'
import Message  from './Message'
import { ChatContext } from '../../context/ChatContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from "./../../firebase"


const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  return (
    <div className={classes.messages}>
      {messages.map((mess)=>{
        <Message message={mess} key={mess.id} />
      })} 
    </div>
  )
}

export default Messages