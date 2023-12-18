import React, { Component } from "react";
import data from "../helpers/data.json";

function ListElement(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

export default class ElementRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Front-end Javascript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ListElement key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
