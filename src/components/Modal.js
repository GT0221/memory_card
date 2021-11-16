import React, { useState, useEffect } from "react";
import "../styles/Modal.css";

function Modal(props) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    function hideModal() {
      setShowModal(false);
    }

    document
      .querySelector(".modal-button")
      .addEventListener("click", hideModal);
    return () => {
      document
        .querySelector(".modal-button")
        .removeEventListener("click", hideModal);
    };
  });

  return (
    <div className={`modal ${!showModal ? "hide" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Instuctions</h4>
        </div>
        <div className="modal-body">
          Objective is to click on a character once. Otherwise, your score will
          reset to 0.
        </div>
        <div className="modal-footer">
          <button className="modal-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;