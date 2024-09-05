import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import BackgroundSection from './Background-img';

function Header() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <BackgroundSection className="h-svh">
            <Navbar />
            <Button onClick={handleButtonClick}>View</Button>
            <p className="text-white mt-4">Company</p>
        </BackgroundSection>
    );
}

export default Header;
