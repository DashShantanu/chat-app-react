import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import 'firebase/compat/firestore';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MoreVert from '@mui/icons-material/MoreVert';
import { AttachFile, InsertEmoticon, Mic } from '@mui/icons-material';

const Chat = () => {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        // Whenever roomId changes, get room name from db
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    };

    return (
        <div className=' basis-2/3 flex flex-col'>

            {/* Chat header */}
            <div className=' flex items-center p-4 border-b-[1px] border-solid border-[lightgray]'>
                <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />

                {/* Chat header info */}
                <div className=' flex-1 pl-5'>
                    <h3
                        className=' mb-[3px] font-medium'
                    >
                        {roomName}
                    </h3>
                    <p
                        className=' text-[gray]'
                    >
                        Last seen at...
                    </p>
                </div>

                {/* Chat header Right*/}
                <div className=' flex justify-between min-w-[100px]'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* Chat body */}
            <div className=' flex-1 bg-[url("http://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] bg-repeat bg-center p-7 overflow-y-scroll'>
                <p
                    className={` relative text-base p-[10px] bg-white rounded-[10px] w-fit mb-7 ${true && ' ml-auto bg-[#dcf8c6]'}`}
                >
                    <span className=' absolute top-[-18px] font-extrabold text-xs'>
                        Dheeraj Soni
                    </span>
                    Hey Guys
                    <span className=" ml-[10px] text-xxs">
                        3:52pm
                    </span>
                </p>
            </div>

            {/* Chat footer */}
            <div className=' flex justify-between items-center border-t-[1px_solid_lightgray] min-h-[62px]'>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form className=' flex flex-1'>
                    <input
                        type='text'
                        placeholder='Type a message'
                        className=' flex-1 rounded-[30px] p-[10px] border-none'
                    />
                    <button
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onClick={sendMessage}
                        type='submit'
                        className=' hidden'
                    >
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;
