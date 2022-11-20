import React from 'react';

import SidebarChat from './SidebarChat';

import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    return (
        <div className='flex flex-col basis-1/3'>
            {/* sidebar header */}
            <div
                className='flex justify-between p-5 border-r border-solid border-[lightgray]'
            >
                <Avatar />

                {/* Sidebar header right */}
                <div className='flex items-center justify-between min-w-[10px]'>
                    <IconButton className=' mr-[2vw] '>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton className=' mr-[2vw] '>
                        <ChatIcon />
                    </IconButton >
                    <IconButton className=' mr-[2vw] '>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* sidebar search */}
            <div className=' flex items-center bg-[#f6f6f6] h-[45px] p-[10px]'>
                {/* Search container */}
                <div className='flex items-center bg-white w-full h-[35px] rounded-[20px]'>
                    <SearchIcon className=' text-[gray] ml-[10px]' />
                    <input
                        placeholder='Search or start new chat'
                        type='text'
                        className=' border-none ml-[10px]'
                    />
                </div>
            </div>

            {/* sidebar chats */}
            <div className=' basis-full bg-white overflow-scroll'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;
