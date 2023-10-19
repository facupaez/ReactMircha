import React, { Component } from "react";

export class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.sum = this.sum.bind(this);
    this.substraction = this.substraction.bind(this);
  }
  sum(e) {
    console.log("Sumando ES6");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  substraction(e) {
    console.log("Restando ES6");
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sum}>+</button>
          <button onClick={this.substraction}>-</button>
        </nav>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

// properties initializer
export class EventsES7 extends Component {
  state = {
    counter: 0,
  };

  //arrow functions
  sum = (e) => {
    console.log("Sumando ES7");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  substraction = (e) => {
    console.log("Restando ES7");
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <nav>
          <button onClick={this.sum}>+</button>
          <button onClick={this.substraction}>-</button>
        </nav>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}
