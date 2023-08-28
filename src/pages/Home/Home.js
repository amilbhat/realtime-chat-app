import React from "react";
import classes from './Home.module.css'

import Sidebar from './../../components/Sidebar/Sidebar'
import Chat from './../../components/Chat/Chat'

const Home = () => {
    return (
        <div className="home">
            <div className="Container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home

