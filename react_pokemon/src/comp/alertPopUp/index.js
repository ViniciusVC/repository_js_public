import React from 'react';
import './alertPopUp.modules.css'; // Estilos personalizados para a pop-up

const aletPopUp = ({ message, onClose }) => {
  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <p><b>{message}</b></p>
        <div className="popupcenterButton">
          <button onClick={onClose} className="button">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default aletPopUp;