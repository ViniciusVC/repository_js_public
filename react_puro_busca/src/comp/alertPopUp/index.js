import React from 'react';
import './alertPopUp.css'; // Estilos personalizados para a pop-up

const aletPopUp = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p><b>{message}</b></p>
        <div className="popup-center-buton">
          <button onClick={onClose} className="popup-buton">
            Voltar
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default aletPopUp;