import React, { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [language, setLanguage] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente!");
  };
  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Elige tu saber js favorito: </p>
        <input
          type="radio"
          id="vanilla"
          name="flavor"
          value="vanilla"
          defaultChecked
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="react"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="flavor"
          value="angular"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="flavor"
          value="vue"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="flavor"
          value="svelte"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito:</p>
        <select
          name="lenguaje"
          onChange={(e) => setLanguage(e.target.value)}
          defaultValue=""
        >
          <option value="">Language</option>
          <option value="java">Java</option>
          <option value="go">Go!</option>
          <option value="c++">C++</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="csharp">C#</option>
        </select>
        <br />
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={(e) => setTerms(e.target.checked)}
        />
        <label htmlFor="terms"> Acepto términos y condiciones</label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
