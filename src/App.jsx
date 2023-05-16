import { useState } from "react";
import "../style.css";
import Boton from "./Boton";

function App() {
  const [display, setDisplay] = useState("0");
  const [resultado, setResultado] = useState(0);

  function handleClick(value, type) {
    if (type === "AC") {
      setDisplay("0");
      setResultado(0);
    }
    if (type === "number") {
      setDisplay((oldNum) => {
        let firstZero = oldNum === "0" ? "" : oldNum;
        return (firstZero += value);
      });
      setResultado((oldNum) => {
        let firstZero = oldNum === 0 ? 0 : oldNum;
        return (firstZero += Number(value));
      });
    }
    if (type === "operandi") {
      console.log(value);
    }
  }

  console.log(resultado);
  return (
    <main className="container">
      <div id="display">{display}</div>
      <Boton
        type="AC"
        handleClick={handleClick}
        value="AC"
        id="clear"
        color="orange"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="/"
        id="divide"
        color="gray"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="x"
        id="multiply"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="7"
        id="seven"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="8"
        id="eight"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="9"
        id="nine"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="-"
        id="subtract"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="4"
        id="four"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="5"
        id="five"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="6"
        id="six"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="+"
        id="add"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="1"
        id="one"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="2"
        id="two"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="3"
        id="three"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="="
        id="equals"
        color="blue"
      />
      <Boton
        type="number"
        handleClick={handleClick}
        value="0"
        id="zero"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleClick}
        value="."
        id="decimal"
        color="darkgray"
      />
    </main>
  );
}
export default App;
