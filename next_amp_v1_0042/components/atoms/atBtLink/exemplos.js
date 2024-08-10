
import React from 'react';
import BtLink from './index.js';

export const atBtLink = (modo) => {
  return(
    <div>
      <h2>BtLink</h2>
      <div>
        Componente atBtLink Purple (Portal Oi Home):
        <BtLink href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="Purple1"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Minha VVC" estilo="Purple1"/>'}</p>
      </div>
      <div>
        Componente atBtLink Purple (Portal Oi Home):
        <BtLink href="https://www.vvcestudio.com.br" value="Oi de A a Z" estilo="Purple2"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Oi de A a Z" estilo="Purple2"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Documentoscopia):
        <BtLink href="https://www.vvcestudio.com.br" value="Acessar" estilo="laranja"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Acessar" estilo="laranja"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Minha VVC):
        <BtLink href="https://www.vvcestudio.com.br" value="Eu quero!" estilo="amarelo1"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Eu quero!" estilo="amarelo1"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Minha VVC):
        <BtLink href="https://www.vvcestudio.com.br" value="Veja a disponibilidade" estilo="amarelo2"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Veja a disponibilidade" estilo="amarelo2"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (OCC):
        <BtLink href="https://www.vvcestudio.com.br" value="Eu quero" estilo="amarelo3"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Eu quero" estilo="amarelo3"/>'}</p>
      </div>
      <div>
        Componente atBtLink laranja-degrade (OCC):
        <BtLink href="https://www.vvcestudio.com.br" value="Eu quero" estilo="laraja-degrade"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Eu quero" estilo="laraja-degrade"/>'}</p>
      </div>
      <div>
        Componente atBtLink rosa (Minha VVC):
        <BtLink href="https://www.vvcestudio.com.br" value="Entrar" estilo="rosa"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Entrar" estilo="rosa"/>'}</p>
      </div>
      <div>
        Componente atBtLink rosa (Minha VVC):
        <BtLink href="https://www.vvcestudio.com.br" value="Entrar" estilo="rosa-invetido"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Entrar" estilo="rosa-invetido"/>'}</p>
      </div>
      <div>
        Componente atBtLink:
        <BtLink href="https://www.vvcestudio.com.br" value="Carteira de identidade e CPF" estilo="branco"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Carteira de identidade e CPF" estilo="branco"/>'}</p>
      </div>
      <div>
        Componente atBtLink:
        <BtLink href="https://www.vvcestudio.com.br" value="Acessar"/>
        <p className="p">Codigo:{'<BtLink href="https://www.vvcestudio.com.br" value="Acessar"/>'}</p>
      </div>
      
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
)};

export default atBtLink;
