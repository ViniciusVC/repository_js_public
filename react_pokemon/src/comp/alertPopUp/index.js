import React from 'react';
import './alertPopUp.css'; // Estilos personalizados para a pop-up

const aletPopUp = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p><b>{message}</b></p>
        <div className="center-buton">
          <button onClick={onClose} className="button">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default aletPopUp;