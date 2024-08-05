
// content do Documentoscopia - Projeto Piloto
import React from 'react';

const moEscolhaDoc = props => {
  var varValue = "";
  if(props.value!=undefined){varValue=props.value};
  var varNota = "";
  if(props.nota!=undefined){varNota=props.nota};
  var varHref = "www.vvcestudio.com.br";
  if(props.href!=undefined){varHref=props.href};
  // var varEstilo = "";
  // if(props.estilo!=undefined){varEstilo=props.estilo};
  return(
      // Botão do formulário Meus Documentos.
      <div>
        <a className="moEscolhaDoc" href={varHref}>
          {varValue}<br/>
          {varNota}
        </a>
        <style jsx>{`
            .moEscolhaDoc {
              font-family: oiTextRegular, sans-serif;
              background-color: #ffffff;
              border-radius:8px;
              color: #222222;
              display: block;
              font-size: 16px;
              height: 3.42857143rem;
              text-align: center;
              width: 300px;
              text-decoration: none;
              border: solid 1px #dbdbdb;
              cursor: pointer;
              outline: 0;
              margin: 0;
              padding: 1.2rem ;
              box-sizing: border-box;
              font-style: normal;
              transition: 0.5s;
              -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
              -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.17);
              box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.17);
          }
          .moEscolhaDoc:hover {
            -webkit-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            -moz-box-shadow:    1px 1px 10px rgba(1, 1, 1, 0.47);
            box-shadow:         1px 1px 10px rgba(1, 1, 1, 0.47);
          }
        `}</style>
    </div>
    )
}
export default moEscolhaDoc