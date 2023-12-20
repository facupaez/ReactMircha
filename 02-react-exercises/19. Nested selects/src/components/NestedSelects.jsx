import React, { useState } from "react";
import SelectList from "./SelectList";

const NestedSelects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const TOKEN = "token=3a916b39-a183-4429-9f3f-743cc470639b";
  return (
    <div>
      <h2>Selects Anidados - COPOMEX API</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default NestedSelects;
