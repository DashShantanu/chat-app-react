import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');

        if (roomName) {
            // do some clever database stuff...
        };
    };

    return !addNewChat ? (
        <div
            className='flex p-5 cursor-pointer border-b-[1px] border-solid border-[#e6e6e6] hover:bg-[#ebebeb]'
        >
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            {/* Chat info */}
            <div className=' ml-[15px]'>
                {/* Name/Room */}
                <h2 className=' text-base leading-none mb-2'>
                    Room name
                </h2>
                {/* Last message */}
                <p className=''>
                    Last message
                </p>
            </div>
        </div>
    ) : (
        <div
            onClick={createChat}
            className='flex p-5 cursor-pointer border-b-[1px] border-solid border-[#e6e6e6] hover:bg-[#ebebeb]'
        >
            <h2>Add new chat</h2>
        </div>
    );
};

export default SidebarChat;
