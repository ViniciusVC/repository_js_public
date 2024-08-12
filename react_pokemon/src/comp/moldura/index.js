import React from 'react';
import './moldura.css'; // Estilos personalizados para a pop-up

const moldura= ({ children }) => {
  return (
    <div className="moldura-center">
      <div className="moldura-body">
        {children}
      </div>
    </div>
  );
};


export default moldura;