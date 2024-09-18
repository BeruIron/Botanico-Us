
import React from 'react';

function BackgroundSection({ backgroundImage, children, className }) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
               
               
            }}
        >
            {children}
        </div>
    );
}

export default BackgroundSection;
