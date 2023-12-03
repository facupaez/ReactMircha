import React from "react";
import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Ventanas Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido del modal 1</p>
      </Modal>
      <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>Hola, este es el contenido del modal 2</p>
      </Modal>
    </div>
  );
};

export default Modals;
