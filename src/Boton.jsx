/* eslint-disable react/prop-types */
export default function Button({ color, id, value, handleClick, type }) {
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
