import React from "react";

export default function Boton({ color, id, value, handleClick, type }) {
  return (
    <button
      onClick={() => handleClick(value, type)}
      value={value}
      id={id}
      className={`btn btn-${color}`}
    >
      {value}
    </button>
  );
}
