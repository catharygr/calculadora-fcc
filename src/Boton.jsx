/* eslint-disable react/prop-types */
export default function Boton({ color, id, value, handleClick }) {
  return (
    <button
      onClick={() => handleClick(value)}
      value={value}
      id={id}
      className={`btn btn-${color}`}
    >
      {value}
    </button>
  );
}
