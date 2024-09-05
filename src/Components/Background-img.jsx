import React from 'react';
import videos from "../Components/Botanico.mp4"

function BackgroundSection({  children, className }) {
    return (
        <div className={`relative ${className}`}>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videos}
                autoPlay
                loop
                muted
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default BackgroundSection;
