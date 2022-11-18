import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
    return (
        <div className=' basis-[35%]'>
            {/* sidebar header */}
            <div
                className='flex justify-between p-5 border-r border-solid border-[lightgray]'
            >
                <AccountCircleIcon />

                {/* Sidebar header right */}
                <div className='flex items-center justify-between min-w-[10vw]'>
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
            </div>

            {/* sidebar search */}
            <div className=''>

            </div>

            {/* sidebar chats */}
            <div className=''>

            </div>
        </div>
    );
};

export default Sidebar;
