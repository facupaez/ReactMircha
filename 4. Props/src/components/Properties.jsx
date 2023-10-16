import React from "react";
import PropTypes from "prop-types";

export default function Properties(props) {
  return (
    <div>
      <h2>{props.default}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "Verdadero" : "Falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.name + ", " + props.object.email}</li>
        <li>{props.reactElement}</li>
        <li>{props.array.map(props.function)}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

Properties.defaultProps = {
  default: "Props",
};

/* Esta prop solo recibirá números y es requerdia obligatoriamente*/
Properties.propTypes = {
  number: PropTypes.number.isRequired,
};
