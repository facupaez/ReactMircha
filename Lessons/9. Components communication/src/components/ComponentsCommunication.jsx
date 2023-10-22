import React, { Component } from "react";

export default class Father extends Component {
  state = {
    counter: 0,
  };

  counterIncrement = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Comunicación entre componentes</h2>
        <p>
          Contador <b>{this.state.counter}</b>
        </p>
        <Son
          counterIncrement={this.counterIncrement}
          msg="Messaje para el hijo 1"
        />
        <Son
          counterIncrement={this.counterIncrement}
          msg="Messaje para el hijo 2"
        />
      </div>
    );
  }
}

function Son(props) {
  return (
    <div>
      <h3>{props.msg}</h3>
      <button onClick={props.counterIncrement}>+</button>
    </div>
  );
}
