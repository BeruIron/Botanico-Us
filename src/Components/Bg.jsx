import React from "react";
import video from "../Components/Botanico.mp4"
function Hb() {
    return (
            <div className="BgContainer">
                <div className="overlay">
                    <video src={video} autoPlay loop muted />
                </div>
                <div className="container">

                </div>
               
            </div>    
    );
}

export default Hb;
