import React from 'react';

function Button({ name, color, onClick, }) {

  return (
    <button

      className={`w-[150px] h-[50px] text-[15px] max-sm:w-[80px] max-sm:h-[35px] max-sm:text-[7px] font-abc font-bold text-white bg-slate-400 my-1 hover:bg-gray-600 ${color}`}

      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;

