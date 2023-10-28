import React, { useState, useEffect } from "react";

function Watch({ hour }) {
  return <h3>{hour}</h3>;
}

export default function HookWatch() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temp;

    if (visible) {
      temp = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temp);
    }

    return () => {
      console.log("Fase de desmontaje");
      clearInterval(temp);
    };
  }, [visible]);

  return (
    <>
      <h2>Hooks - Reloj</h2>
      {visible && <Watch hour={hour} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}
