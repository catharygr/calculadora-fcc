import { useState } from "react";
import "../style.css";

export default function App() {
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    const operatorPattern = /[+\-*/]/;
    if (calc === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const parts = calc.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operatorPattern.test(value)) {
      const lastChar = calc[calc.length - 1] || "";
      const secondLastChar = calc[calc.length - 2] || "";
      if (operatorPattern.test(lastChar)) {
        if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
          setCalc(calc.slice(0, -2) + value);
          return;
        }
        setCalc(calc.slice(0, -1) + value);
        return;
      }
    }

    setCalc(calc + value);
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display" id="display">
          {calc || "0"}
        </div>
        <div className="operators">
          <button
            id="add"
            onClick={() => {
              updateCalc("+");
            }}
          >
            +
          </button>
          <button
            id="subtract"
            onClick={() => {
              updateCalc("-");
            }}
          >
            -
          </button>
          <button
            id="multiply"
            onClick={() => {
              updateCalc("*");
            }}
          >
            *
          </button>
          <button
            id="divide"
            onClick={() => {
              updateCalc("/");
            }}
          >
            /
          </button>
          <button id="del" onClick={deleteLast}>
            DEL
          </button>
          <button id="clear" onClick={clearAll}>
            AC
          </button>
        </div>
        <div className="digits">
          <button
            id="one"
            onClick={() => {
              updateCalc("1");
            }}
          >
            1
          </button>
          <button
            id="two"
            onClick={() => {
              updateCalc("2");
            }}
          >
            2
          </button>
          <button
            id="three"
            onClick={() => {
              updateCalc("3");
            }}
          >
            3
          </button>
          <button
            id="four"
            onClick={() => {
              updateCalc("4");
            }}
          >
            4
          </button>
          <button
            id="five"
            onClick={() => {
              updateCalc("5");
            }}
          >
            5
          </button>
          <button
            id="six"
            onClick={() => {
              updateCalc("6");
            }}
          >
            6
          </button>
          <button
            id="seven"
            onClick={() => {
              updateCalc("7");
            }}
          >
            7
          </button>
          <button
            id="eight"
            onClick={() => {
              updateCalc("8");
            }}
          >
            8
          </button>
          <button
            id="nine"
            onClick={() => {
              updateCalc("9");
            }}
          >
            9
          </button>
          <button
            id="zero"
            onClick={() => {
              updateCalc("0");
            }}
          >
            0
          </button>
          <button id="equals" onClick={calculate}>
            =
          </button>
          <button
            id="decimal"
            onClick={() => {
              updateCalc(".");
            }}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import "../style.css";
// // import Boton from "./Boton";

// function App() {
//   const [calc, setCalc] = useState("");

//   const ops = ["/", "*", "+", "-", "."];

//   const updateCalc = (value) => {
//     const operatorPattern = /[+\-*/]/;
//     if (calc === "" && value === "0") {
//       return;
//     }
//     if (value === ".") {
//       const parts = calc.split(operatorPattern);
//       if (parts[parts.length - 1].includes(".")) {
//         return;
//       }
//     }
//     if (value !== "-" && operatorPattern.test(value)) {
//       const lastChar = calc[calc.length - 1] || "";
//       const secondLastChar = calc[calc.length + 2] || "";
//       if (operatorPattern.test(lastChar)) {
//         if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
//           setCalc(calc.slice(0, -2) + value);
//           return;
//         }
//         setCalc(calc.slice(0, -1) + value);
//         return;
//       }
//     }

//     setCalc(calc + value);
//   };
//   const calculate = () => {
//     setCalc(eval(calc).toString());
//   };

//   const clearAll = () => {
//     setCalc("");
//   };

//   return (
//     <main className="container">
//       <div id="display">{calc || "0"}</div>

//       <Boton handleClick={clearAll} value="AC" id="clear" color="orange" />
//       <Boton handleClick={updateCalc} value="/" id="divide" color="gray" />
//       <Boton handleClick={updateCalc} value="*" id="multiply" color="gray" />
//       <Boton
//         handleClick={() => {
//           updateCalc("7");
//         }}
//         value="7"
//         id="seven"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("8");
//         }}
//         value="8"
//         id="eight"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("9");
//         }}
//         value="9"
//         id="nine"
//         color="darkgray"
//       />
//       <Boton handleClick={updateCalc} value="-" id="subtract" color="gray" />
//       <Boton
//         handleClick={() => {
//           updateCalc("4");
//         }}
//         value="4"
//         id="four"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("5");
//         }}
//         value="5"
//         id="five"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("6");
//         }}
//         value="6"
//         id="six"
//         color="darkgray"
//       />
//       <Boton handleClick={updateCalc} value="+" id="add" color="gray" />
//       <Boton
//         handleClick={() => {
//           updateCalc("1");
//         }}
//         value="1"
//         id="one"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("2");
//         }}
//         value="2"
//         id="two"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc("3");
//         }}
//         value="3"
//         id="three"
//         color="darkgray"
//       />
//       <Boton handleClick={calculate} value="=" id="equals" color="blue" />
//       <Boton
//         handleClick={() => {
//           updateCalc("0");
//         }}
//         value="0"
//         id="zero"
//         color="darkgray"
//       />
//       <Boton
//         handleClick={() => {
//           updateCalc(".");
//         }}
//         value="."
//         id="decimal"
//         color="darkgray"
//       />
//     </main>
//   );
// }

// function App() {
//   const [displayNum, setDisplayNum] = useState("0");
//   const [operandi, setOperandi] = useState(null);
//   const [firsNum, setFirtNum] = useState(null);

//   function handleNum(num) {
//     // No permitir multiples cero consecutivos al inicio
//     if (displayNum === "0" && num === "0") {
//       return;
//     }
//     //Si el displayNum es 0 y operandi no es null asignar el valor del num sin concatenar
//     if (displayNum === "0" || operandi !== null) {
//       setDisplayNum(num);
//       setOperandi(null);
//     } else {
//       setDisplayNum(displayNum + num);
//     }
//   }

//   function handleOperandy() {
//     // Si el primer numero es null asinar el de display como el primero
//     if (firsNum === null) {
//       setFirtNum(parseFloat(displayNum));
//       // realizar el calculo si ya hay un operator y no es igual
//     } else if (operandi !== "=") {
//       const resultado = calcularResultado();
//       // Asignar ambos al resultado del calculo
//       setDisplayNum(resultado);
//       setFirtNum(resultado);
//     }
//     setOperandi(operandi);
//   }

//   function calcularResultado(operandi) {
//     // Convertir displayNum string  en numero y guardarlo
//     const segundoNum = parseFloat(displayNum);
//     switch (operandi) {
//       case "+":
//         return firsNum + segundoNum;
//       case "-":
//         return firsNum - segundoNum;
//       case "*":
//         return firsNum * segundoNum;
//       case "/":
//         return firsNum / segundoNum;
//       default:
//         return segundoNum;
//     }
//   }
//   // Resetear los tres seters
//   function handleAc() {
//     setDisplayNum("0");
//     setOperandi(null);
//     setFirtNum(null);
//   }

//   function handleEquals() {
//     // Si el primer numero no es null y si operandi es null
//     if (firsNum !== null && operandi !== null) {
//       const resultado = calcularResultado();
//       setDisplayNum(String(resultado));
//       setFirtNum(null);
//       setOperandi(null);
//     }
//   }

//   return (
//     <main className="container">
//       <div id="display">{displayNum}</div>
//       <Boton
//         type="AC"
//         handleClick={handleAc}
//         value="AC"
//         id="clear"
//         color="orange"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleOperandy}
//         value="/"
//         id="divide"
//         color="gray"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleOperandy}
//         value="x"
//         id="multiply"
//         color="gray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="7"
//         id="seven"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="8"
//         id="eight"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="9"
//         id="nine"
//         color="darkgray"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleOperandy}
//         value="-"
//         id="subtract"
//         color="gray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="4"
//         id="four"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="5"
//         id="five"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="6"
//         id="six"
//         color="darkgray"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleOperandy}
//         value="+"
//         id="add"
//         color="gray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="1"
//         id="one"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="2"
//         id="two"
//         color="darkgray"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="3"
//         id="three"
//         color="darkgray"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleEquals}
//         value="="
//         id="equals"
//         color="blue"
//       />
//       <Boton
//         type="number"
//         handleClick={handleNum}
//         value="0"
//         id="zero"
//         color="darkgray"
//       />
//       <Boton
//         type="operandi"
//         handleClick={handleNum}
//         value="."
//         id="decimal"
//         color="darkgray"
//       />
//     </main>
//   );
// }
// export default App;
