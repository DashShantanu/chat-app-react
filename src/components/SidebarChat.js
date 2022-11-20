import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

const SidebarChat = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div
            className='flex p-5 cursor-pointer border-b-[1px] border-solid border-[#e6e6e6] hover:bg-[#ebebeb]'
        >
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            {/* Chat info */}
            <div className=''>
                {/* Name/Room */}
                <h2 className=''>
                    Room name
                </h2>
                {/* Last message */}
                <p className=''>
                    Last message
                </p>
            </div>
        </div>
    );
};

export default SidebarChat;
