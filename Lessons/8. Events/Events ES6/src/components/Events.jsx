import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log("Sumando");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  restar() {
    console.log("Restando");
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clases</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}
