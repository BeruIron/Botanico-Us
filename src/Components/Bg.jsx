import React from "react";
import video from "../Components/Botanico.mp4";

function Hb() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

export default Hb;

