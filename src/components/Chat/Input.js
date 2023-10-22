import React, { useContext, useState } from "react";

import classes from './Input.module.css'
import Img from './../../assets/images/img.png'
import Attach from './../../assets/images/attach.png'
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "./../../firebase";

const Input = () => {

    const [ text, setText ] = useState("")
    const [ img, setImg ] = useState(null)

    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on( 
                (error) => {
                    // setError(true)
                }, 
                () => {
                    // getDownloadURL method runs before actually uploading file
                    // Firebase Storage: Object {displayName} does not exist.
                    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    });
                }
            );

        }   
        else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId+".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId+".date"]: serverTimestamp()
        })

        setText("")
        setImg(null)
    }

    const handleSubmit = () => {
        if (text || img) {
            handleSend()
        }
        else {
            console.log("Message is empty")
        }
    }

    return (
        <div className={classes.input}>
            <input type="text"  placeholder="Type Here ..." onChange={e => setText(e.target.value)} value={text} />
            <div className={classes.send}>
                {/* <img src={Attach} alt="" /> */}
                <input type="file" className={classes.hidden} id="file" onChange={(e) => setImg(e.target.files[0])} />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
}

export default Input;