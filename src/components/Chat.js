import React, { useState, useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MoreVert from '@mui/icons-material/MoreVert';
import { InsertEmoticon, Mic } from '@mui/icons-material';

const Chat = () => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className=' basis-2/3 flex flex-col'>

            {/* Chat header */}
            <div className=' flex items-center p-4 border-b-[1px] border-solid border-[lightgray]'>
                <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />

                {/* Chat header info */}
                <div className=' flex-1 pl-5'>
                    <h3 className=' mb-[3px] font-medium'>Room name</h3>
                    <p className=' text-[gray]'>Last seen at...</p>
                </div>

                {/* Chat header Right*/}
                <div className=' flex justify-between min-w-[100px]'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* Chat body */}
            <div className=' flex-1 bg-[url("http://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] bg-repeat bg-center p-7 overflow-y-scroll'>
                <p className={` relative text-base p-[10px] bg-white rounded-[10px] w-fit mb-7 ${true && 'chat_receiver'}`}>
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
                <InsertEmoticon />
                <form className=' flex flex-1'>
                    <input
                        type='text'
                        placeholder='Type a message'
                        className=' flex-1 rounded-[30px] p-[10px] border-none'
                    />
                    <button
                        type='submit'
                        className=' hidden'
                    >
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    );
};

export default Chat;
