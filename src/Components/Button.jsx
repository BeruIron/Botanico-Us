import React from 'react';

function Button({ name, color, onClick }) {
  return (
    <button
      className={`px-8 py-3 text-white bg-slate-400 my-1 rounded-lg hover:bg-gray-600 ${color}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
