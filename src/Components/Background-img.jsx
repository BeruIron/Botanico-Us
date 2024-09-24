import React from 'react';
import videos from "../Components/Botanico.mp4"

function BackgroundSection({  children, className }) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'80vh',
               
               
            }}
        >
            {children}
        </div>
    );
}

export default BackgroundSection;
