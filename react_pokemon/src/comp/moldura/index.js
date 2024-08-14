import React from 'react';
import './moldura.modules.css'; // Estilos personalizados para a pop-up

const moldura= ({ children }) => {
  return (
    <div className="molduraCenter">
      <div className="molduraBody">
        {children}
      </div>
    </div>
  );
};


export default moldura;