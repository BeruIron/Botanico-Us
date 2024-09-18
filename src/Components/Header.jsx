import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import BackgroundSection from './Background-img';

function Header() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <BackgroundSection 
            backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
            className="h-[80vh]"
        >
            <Navbar />
         
        </BackgroundSection>
    );
}

export default Header;
