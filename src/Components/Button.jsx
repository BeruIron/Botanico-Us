import React from 'react';

function Button({ name, color, onClick }) {
  return (
    <button
      className={`w-[150px] h-[50px] text-white bg-slate-400 my-1  hover:bg-gray-600 max-sm:w-[90px] max-sm:h-[30px] max-sm:text-[10px] ${color}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
