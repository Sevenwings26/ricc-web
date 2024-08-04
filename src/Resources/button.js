import React from "react";

const Button = ({ outline, handleClick, btnName }) => {
  if (outline) {
  }
  return (
    <button
      className={
        outline
          ? "border-2 border-accent text-accent bg-transparent text-bold px-10 py-2 rounded-lg"
          : "bg-white text-accent text-bold px-10 py-2 rounded-lg"
      }
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
