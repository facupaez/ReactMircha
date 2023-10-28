import React, { useState } from "react";

export default function HookCounter(props) {
  // definimos destructuración de useState
  const [counter, setCounter] = useState(0);

  // definimos métodos
  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);
  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </nav>
      <p>Contador de {props.title}</p>
      <h3>{counter}</h3>
    </>
  );
}

HookCounter.defaultProps = {
  title: "Clicks",
};
