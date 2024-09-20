import React from 'react';

function Button({ name, color, onClick,className }) {
  return (
    <button
      className={`w-[100px] h-[50px] py-3 text-white bg-slate-400 my-1  hover:bg-gray-600 max-sm:w-[70px] max-sm:h-[25px] max-sm:text-[12px] ${color} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
