import React, { Component } from "react";

export class Events extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Más eventos</h2>
        {/* Native and synthetic event */}
        {/* <button onClick={this.handleClick}>Saludar</button> */}
        <Button
          myOnClick={(e) =>
            this.handleClick(e, "Hola, pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}

// evento personalizado
function Button(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
}
