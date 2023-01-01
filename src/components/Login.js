import React from 'react';
import { useStateValue } from '../StateProvider';

import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';

const Login = () => {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        // Sign in with Google
        auth.signInWithPopup(provider)
            .then((result) => {
                // Set user in the data layer
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className=' bg-[#f8f8f8] h-screen w-screen grid items-center justify-center'>
            {/* Login Container */}
            <div className=' m-[0_auto] p-[100px] text-center bg-white rounded-[10px] shadow-[3px_3px_3px_rgba(0,0,0,0.12)]'>
                <img
                    src="https://i.postimg.cc/257Dy2QH/easychatlogo-1.png"
                    alt="easychat logo"
                    className=' object-contain h-[100px] m-[0_auto] mb-10'
                />
                {/* Login text */}
                <div className=' block text-xl m-[4px_0] font-bold'>
                    <h1>Sign in to EasyChat</h1>
                </div>

                {/* Button */}
                <Button
                    onClick={signIn}
                    className=' !mt-12 !normal-case !bg-[#54842a] !text-white'
                >
                    Sign in with Google
                </Button>
            </div>
        </div >
    );
};

export default Login;
