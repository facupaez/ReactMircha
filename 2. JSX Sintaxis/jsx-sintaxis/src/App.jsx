import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let nombre = "Arthur";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
      <h1>JSX Sintaxis in React</h1>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" />
      <h2>{nombre}</h2>
      <p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </p>
    </>
  );
}

export default App;
