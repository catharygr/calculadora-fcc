import { useState } from "react";
import "../style.css";
import Boton from "./Boton";

function App() {
  const [displayNum, setDisplayNum] = useState("0");
  const [operandi, setOperandi] = useState(null);
  const [firsNum, setFirtNum] = useState(null);

  function handleNum(num) {
    // No permitir multiples cero consecutivos al inicio
    if (displayNum === "0" && num === "0") {
      return;
    }
    //Si el displayNum es 0 y operandi no es null asignar el valor del num sin concatenar
    if (displayNum === "0" || operandi !== null) {
      setDisplayNum(num);
      setOperandi(null);
    } else {
      setDisplayNum(displayNum + num);
    }
  }

  function handleOperandy(operandi) {
    // Si el primer numero es null asinar el de display como el primero
    if (firsNum === null) {
      setFirtNum(parseFloat(displayNum));
      // realizar el calculo si ya hay un operator y no es igual
    } else if (operandi !== "=") {
      const resultado = calcularResultado();
      // Asignar ambos al resultado del calculo
      setDisplayNum(resultado);
      setFirtNum(resultado);
    }
    setOperandi(operandi);
  }

  function calcularResultado() {
    // Convertir displayNum string  en numero y guardarlo
    const segundoNum = parseFloat(displayNum);
    switch (operandi) {
      case "+":
        return firsNum + segundoNum;
      case "-":
        return firsNum - segundoNum;
      case "*":
        return firsNum * segundoNum;
      case "/":
        return firsNum / segundoNum;
      default:
        return segundoNum;
    }
  }
  // Resetear los tres seters
  function handleAc() {
    setDisplayNum("0");
    setOperandi(null);
    setFirtNum(null);
  }

  function handleEquals() {
    // Si el primer numero no es null y si operandi es null
    if (firsNum !== null && operandi !== null) {
      const resultado = calcularResultado();
      setDisplayNum(String(resultado));
      setFirtNum(null);
      setOperandi(null);
    }
  }

  return (
    <main className="container">
      <div id="display">{displayNum}</div>
      <Boton
        type="AC"
        handleClick={handleAc}
        value="AC"
        id="clear"
        color="orange"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandy}
        value="/"
        id="divide"
        color="gray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandy}
        value="x"
        id="multiply"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="7"
        id="seven"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="8"
        id="eight"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="9"
        id="nine"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandy}
        value="-"
        id="subtract"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="4"
        id="four"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="5"
        id="five"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="6"
        id="six"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandy}
        value="+"
        id="add"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="1"
        id="one"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="2"
        id="two"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="3"
        id="three"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleEquals}
        value="="
        id="equals"
        color="blue"
      />
      <Boton
        type="number"
        handleClick={handleNum}
        value="0"
        id="zero"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleNum}
        value="."
        id="decimal"
        color="darkgray"
      />
    </main>
  );
}
export default App;
