import React, { Component } from "react";

{
  /* Estado hijo */
}
function ChildState(props) {
  return (
    <div>
      <h3>{props.childCounter}</h3>
    </div>
  );
}

{
  /* Estado padre */
}
export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>State</h2>
        <p>{this.state.counter}</p>
        {/* Pasar estado padre a hijo */}
        <ChildState childCounter={this.state.counter}></ChildState>
      </div>
    );
  }
}
