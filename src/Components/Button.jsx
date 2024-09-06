import React from 'react';

function Button({ name, color, onClick }) {
  return (
    <button
      className={`w-[150px] h-[50px] text-white bg-slate-400 my-1 rounded-lg hover:bg-gray-600 ${color}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
