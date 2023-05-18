import { useState } from "react";
import Boton from "./Boton";
import "../style.css";

function App() {
  const [displayNum, setDisplayNum] = useState("0");
  const [operandi, setOperandi] = useState(null);
  const [firstNum, setFirstNum] = useState(null);
  const [newDisplay, setNewdisplay] = useState(false);
  const [whatType, setWhatType] = useState("number");
  const [lastOperandi, setLastOperandi] = useState(null);
  const [panic, setPanic] = useState(false);

  function handleNumero(numero, type) {
    // Primero debo averiguar si el display numeber es 0 y si mandamos 0 en tal caso no tenemos que hacer nada
    // Si empezamos con 0 el numero que ponemos (4) debe ser puesto en display en lugar de 0 a no ser que se trata de decimal .
    // Si es decimal debe concatenarse
    // Si hay un decimal no debe poner  otro
    // Si es cualquer otro numero debe concatenarse
    // Si hay numero guardado sustituir el de display igual como si esta 0

    // Si se ingresan 2 o más operadores consecutivamente, la operación realizada debe ser el último operador ingresado (excluyendo el signo negativo (-)). Por ejemplo, si se ingresa 5 + * 7 =, el resultado debe ser 35 (es decir, 5 * 7); si se ingresa 5 * - 5 =, el resultado debe ser -25 (es decir, 5 * (-5)).
    // "5 * - + 5" = debe dar una salida de "10"
    // 3 + 5 * 6 - 2/4 debería dar 32,5 o 11,5

    if (panic && operandi === "-") {
      console.log("PANIC actual operandi es -");
      setDisplayNum(operandi + numero);
      setOperandi(lastOperandi);
      setPanic(false);
      return;
    }

    if (displayNum === "0" && numero === "0") {
      console.log("Zero consecutivo");
      return;
    }
    const isThereDecimal = displayNum.includes(".");

    if (displayNum === "0" && numero === "." && !isThereDecimal) {
      console.log("Punto concatenado");
      setDisplayNum(displayNum + numero);
    } else if (displayNum === "0" || !newDisplay) {
      console.log("Numero 0 sustituido");
      setDisplayNum(numero);
      setNewdisplay(true);
    } else if (numero === ".") {
      if (!isThereDecimal) {
        console.log("Added . en un numero normal");
        setDisplayNum(displayNum + numero);
      }
    } else {
      console.log("numero concatenado");
      setDisplayNum(displayNum + numero);
    }
    setWhatType(type);
  }
  function calcularResultado(operator) {
    // Convertir display numero string en numero numero y guardarlo
    const secondNum = parseFloat(displayNum);

    switch (operator) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "x":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        return secondNum;
    }
  }
  function handleOperandi(operator, type) {
    // Function handleOperandi
    // Si el numero guardado es null
    // Añadir display número a número guardado
    // Guardar operandi
    // Resetear handleNúmeros para que empiece por un nuevo número. Hace falta un state para eso?
    // Si número guardado existe
    // Usar operandi para hacer cálculo entre número guardado y el número en display.
    // Número retornado del calculo guardar como número guardado
    // Asignar este número retornado a display número
    // Guardar operandi
    // Resetear newDisplay para que empiece por un nuevo número. Hace falta un state para eso?

    // Si se ingresan 2 o más operadores consecutivamente, la operación realizada debe ser el último operador ingresado (excluyendo el signo negativo (-)). Por ejemplo, si se ingresa 5 + * 7 =, el resultado debe ser 35 (es decir, 5 * 7); si se ingresa 5 * - 5 =, el resultado debe ser -25 (es decir, 5 * (-5)).
    // "5 * - + 5" = debe dar una salida de "10"

    if (whatType === "number") {
      if (firstNum === null) {
        console.log("Promer numero guardado");
        setFirstNum(parseFloat(displayNum));
        setOperandi(operator);
        setNewdisplay(false);
      } else {
        const resultado = calcularResultado(operandi);
        console.log("operacion calculadora terminada");
        setDisplayNum(String(resultado));
        setFirstNum(resultado);
        setOperandi(operator);
        setNewdisplay(false);
      }
    }

    // Si la ultima tecla era operandi, cambiar operandi nada mas
    // "5 * - + 5" = debe dar una salida de "10"

    if (whatType === "operandi") {
      console.log("cambio de operandi");
      setLastOperandi(operandi);
      setOperandi(operator);
      setPanic(true);
    }
    setWhatType(type);
  }
  function handleAC() {
    // Resetear los tres estado
    setDisplayNum("0");
    setFirstNum(null);
    setOperandi(null);
  }
  function handleEqual() {
    //Function =
    // Hacer calculus
    // Presentar el resultado en display
    // setOperator a =
    // Presionar un operador inmediatamente después de = debe iniciar un nuevo cálculo que opere sobre el resultado de la evaluación anterior
    // console.log("Operacion = hecha");

    const resultado = calcularResultado(operandi);
    setDisplayNum(String(resultado));
    setFirstNum(null);
    setOperandi("=");
    setNewdisplay(false);
    setWhatType("number");
  }
  return (
    <main className="container">
      <div id="display">{displayNum}</div>
      <Boton
        type="AC"
        handleClick={handleAC}
        value="AC"
        id="clear"
        color="orange"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandi}
        value="/"
        id="divide"
        color="gray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandi}
        value="x"
        id="multiply"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="7"
        id="seven"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="8"
        id="eight"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="9"
        id="nine"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandi}
        value="-"
        id="subtract"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="4"
        id="four"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="5"
        id="five"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="6"
        id="six"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleOperandi}
        value="+"
        id="add"
        color="gray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="1"
        id="one"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="2"
        id="two"
        color="darkgray"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="3"
        id="three"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleEqual}
        value="="
        id="equals"
        color="blue"
      />
      <Boton
        type="number"
        handleClick={handleNumero}
        value="0"
        id="zero"
        color="darkgray"
      />
      <Boton
        type="operandi"
        handleClick={handleNumero}
        value="."
        id="decimal"
        color="darkgray"
      />
    </main>
  );
}

export default App;
