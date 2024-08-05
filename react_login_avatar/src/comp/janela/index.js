import React from 'react';
import './janela.css';

const Janela = ({ children }) => {
//function Janela(children) {

    return (
      <div className="janelaBody">
        <div className="Janela">
          {children}
        </div>
      </div>
    )
  }
  
export default Janela;