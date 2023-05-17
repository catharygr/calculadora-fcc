/* eslint-disable react/prop-types */
export default function Button({ color, id, value, handleClick }) {
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
