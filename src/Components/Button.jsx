import React from 'react';


function Button({ name, color, onClick }) {
  return (
    <button
      className={`px-16 py-6 text-white my-1 rounded-lg hover:bg-gray-600 ${color}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;

