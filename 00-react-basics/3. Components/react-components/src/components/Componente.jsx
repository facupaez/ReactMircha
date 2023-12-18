import React, { Component } from "react";

/* Componente funcional expresado*/
const Componente = (props) => <h2>{props.msg}</h2>;

/* Componente funcional */
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

/* Componente de clase */
/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

export default Componente;
