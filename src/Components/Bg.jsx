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

      <div className="absolute inset-0 flex items-center justify-between pl-96">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-5 px-14 rounded-md shadow-lg">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Hb;

