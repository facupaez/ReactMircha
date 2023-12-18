import React from "react";
import Modal from "./Modal";
import { useModal } from "./hooks/useModal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenPortal, openPortal, closePortal] = useModal(false);
  return (
    <div>
      <h2>Ventanas Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido del modal 1</p>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola, este es el contenido del modal 2</p>
      </Modal>
      <button onClick={openPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closePortal}>
        <h3>Modal Portal</h3>
        <p>
          Hola, este es el contenido de un modal Portal, que carga en otro nodo
          diferente del DOM diferente a donde carga nuestra app de React.
        </p>
      </ModalPortal>
    </div>
  );
};

export default Modals;
