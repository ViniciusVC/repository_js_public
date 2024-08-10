// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import Img from '../../atoms/atImg/index.js';

const moAlerta = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};

  function fechaAlertaErro(){
    document.getElementById("AlertaErroInf").innerHTML = "";  
    document.getElementById("divAlertaErro").style.display = "none";
  }

  return(
    <div>
      <a onClick={() => {fechaAlertaErro()}}>
        <div className="divAlertaErro" id="divAlertaErro">
        <center>
          <Img
            class="AlertaErro"
            src="/static/assetsv5/img/documentoscopia/erro_ico.png"
            width="50px"
            height="50px"
            modo={modo} />
          <div className="textAlertaErro">
            <span id="AlertaErroInf">Ops! Algo errado.<br/>Imagens muito grandes ou faltando algum campo.</span>
          </div>
          <a onClick={() => {fechaAlertaErro()}} className="btLinklaranja" >Voltar</a>
        </center>
        </div>
      </a>
      <style jsx>{`
        .textAlertaErro{
          font-family: "SimplonBP-Regular",Arial;
          font-size: 1.25rem; /*20px*/
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #303030;
        }
        .divAlertaErro{
          padding: 1.2rem;
          padding-top: 5rem;
          margin: 1.2rem;
          background-color: #ffffff;
          position : absolute;
          top: 180px;
          -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.60);
          -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.60);
          box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.60);
          display : none;
          animation: abreJanela 1s ease 0s 1 normal none running;
        }
        @keyframes abreJanela{
          0% {
            top: 100px;
            opacity: 0;
          }
          100% {
            top: 180px;
            opacity: 1;
          }
        }
        .btLinklaranja {
          font-family: oiTextRegular, sans-serif;
          background-color: #f8562c;
          background-image: linear-gradient(260deg, #fb851c, #f8562c); 
          border-radius:6px;
          color: #ffffff;
          display: block;
          font-size: 1rem; /*16px*/
          height: 3.42857143rem;
          text-align: center;
          width: 199px;
          text-decoration: none;
          border-bottom: solid 1px #dbdbdb;
          cursor: pointer;
          outline: 0;
          margin: 0;
          margin-top: 100px;
          padding: 1.2rem ;
          box-sizing: border-box;
          font-style: normal;
          transition-duration: 1s;
        }
        .btLinklaranja:hover{
          transition-duration: 1s;
          color: #f8562c;
          border: solid 1px #fb851c;
          background-color: #ffffff;
          background-image: none;
        }
      `}</style>
    </div>
    )
};
//background-color: white;

export default moAlerta


// .divAlertaErro{
//   padding: 1.2rem;
//   padding-top: 5rem;
//   margin: 1.2rem;
//   background-color: #ffffff;
//   position : absolute;
//   top: 180px;
//   -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.60);
//   -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.60);
//   box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.60);
//   display : none;
//   animation: abreJanela 1s ease 0s 1 normal none running;
// }
// .divAlertaErro:active{
//   transition-duration: 1s;
//   top: 100px;
//   opacity: 0;
//   display : none;
// }
// @keyframes abreJanela{
//   0% {
//     top: 100px;
//     opacity: 0;
//   }
//   100% {
//     top: 180px;
//     opacity: 1;
//   }
// }
// @keyframes fechaJanela{
//   0% {
//     top: 180px;
//     opacity: 1;
//   }
//   100% {
//     top: 100px;
//     opacity: 0;
//   }
// }