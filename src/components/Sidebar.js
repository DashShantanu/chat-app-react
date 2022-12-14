import React from 'react';
import { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import 'firebase/compat/firestore';

import SidebarChat from './SidebarChat';

import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        // Get all rooms from db using current snapshot and put into rooms state
        db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

        // Cleanup function to detach listener when component unmounts
        // return () => {
        //     unsubscribe();
        // };
    });

    return (
        <div className='flex flex-col basis-1/3'>
            {/* sidebar header */}
            <div
                className='flex justify-between p-5 border-r border-solid border-[lightgray]'
            >
                <Avatar src={user?.photoURL} />

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
            <div className=' basis-full bg-white overflow-y-scroll'>
                <SidebarChat addNewChat />

                {
                    // Loop through all rooms and render SidebarChat component
                    rooms.map((room) => (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
