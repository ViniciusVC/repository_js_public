import React from 'react';
import './divresponsivo.css';

const DivResponsivo = ({ children }) => {
//function Janela(children) {

    return (
      <div className="DivResponsivo">
        {children}
      </div>
    )
  }
  
export default DivResponsivo;