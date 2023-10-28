import React, { useState, useEffect } from "react";

export default function HookScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Moviendo scroll");

    const detectScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll", detectScroll);
      //console.log("Fase de desmontaje");
    };
    // solo se actualiza cuando la variable de estado cambia
  }, [scrollY]);

  // simulaciones de fases de componentes con useEffect
  useEffect(() => {
    //console.log("Fase de montaje");
  }, []);
  useEffect(() => {
    //console.log("Fase de actualización");
  });
  useEffect(() => {
    return () => {
      //console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
