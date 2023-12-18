import React, { Component } from "react";

class Watch extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún no está en el DOM");

    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  start = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  stop = () => {
    clearInterval(this.timer);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja o redibuja por algún cambio en el DOM"
    );
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible && <Watch hour={this.state.hour} />}
        <button onClick={this.start}>Iniciar</button>
        <button onClick={this.stop}>Detener</button>
      </>
    );
  }
}
