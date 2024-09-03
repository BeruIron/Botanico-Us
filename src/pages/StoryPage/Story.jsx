import React from "react";
import Navbar from "../../Components/Navbar";
import video from "../PlayVideo/Botanico.mp4"
function Story() {
    return (<>
            <Navbar />
            <div className="BgContainer">
                <div className="overlay">
                    <video src={video} autoPlay loop muted />
                </div>
                <div className="container">

                </div>
            </div>
            </>
    );
}

export default Story;
