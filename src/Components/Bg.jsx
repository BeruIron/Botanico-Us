import React from "react";
import video from "../Components/Botanico.mp4"
import { useTransition } from "react";
function Hb() {
    // const t = useTransition()
    return (
            <div className="BgContainer">
                <div className="overlay">
                    <video src={video} autoPlay loop muted />
                </div>
                <div className="container">
                    {/* {t("feature")} */}
                </div>
               
            </div>    
    );
}

export default Hb;