
import React from 'react';
import Link from './index.js';

export const atLink = (modo) => {
  return(
    <div>
      <h2>BtLink</h2>
      <div>
        (Portal Oi Home):
        <div><Link href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="LinkHeaderminhavvc"/></div>
        <p className="p">Codigo:{'<Link href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="LinkHeaderminhavvc"/>'}</p>
      </div>
      <div>
        <div><Link href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="LinkFooterNavminhavvc"/></div>
        <p className="p">Codigo:{'<Link href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="LinkFooterNavminhavvc"/>'}</p>
      </div>
      <div>
        <div><Link href="https://www.vvcestudio.com.br" value="Acessar"/></div>
        <p className="p">Codigo:{'<Link href="https://www.vvcestudio.com.br" value="Acessar"/>'}</p>
      </div>
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
)};

export default atLink;
