// content do Documentoscopia - Projeto Piloto
import React from 'react';

//console.log('Instanciou /componentes/organisms/documentoscopia/textoDestaque.js');

const textoDestaque = props => (
  <div className="textodestaque">{props.texto}
  <style jsx>{`
      .textodestaque{
        margin: 18px;
        margin-left: 0px;
        font-family: 'Simplon-Headline';
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;     
        font-size: 20px;
        line-height: 1.2;
        letter-spacing: normal;
        color: #000000;
      }
    `}</style>
  </div>
)

export default textoDestaque
