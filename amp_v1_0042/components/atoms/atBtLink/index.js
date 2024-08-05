import React from "react";
import * as Util from "../../../controller/util.js";

const btSubmit = props => {
  var varValue = Util.validaProps(props.value, "");
  var varHref = Util.validaProps(props.href, "www.vvcestudio.com.br");
  var varEstilo = Util.validaProps(props.estilo, "");
  var varWidth = Util.validaProps(props.width, "");
  var varWidthMobile = Util.validaProps(props.mobilewidth, "");
  var varMaxWidthe = Util.validaProps(props.maxwidth, "500px");

  if (varEstilo == "laranja") {
    return (
      // Botão do formulário Meus Documentos.
      <div>
        <a className="btLinklaranja" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinklaranja {
            font-family: oiTextRegular, sans-serif;
            background-color: #f8562c;
            background-image: linear-gradient(260deg, #fb851c, #f8562c);
            border-radius: 6px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.42857143rem;
            text-align: center;
            width: 280px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinklaranja:hover {
            transition-duration: 1s;
            color: #f8562c;
            border: solid 1px #fb851c;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
    //transition: background-image: 2s, transform 2s;
    //-webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    //transition-delay: 0.5s //espera pra
    //transition: all 0.8s;
    //-webkit-transition: all 0.8s;
    //-moz-transition: all 0.8s;
    //-o-transition: all 0.8s;
  } else if (varEstilo == "rosa") {
    return (
      // Botão de ENTRAR no minha vvc.
      <div>
        <a className="btLinkRosa" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosa {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #d82482;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            border: solid 2px #d82482;
            cursor: pointer;
            outline: 0;
            margin: 0;
            box-sizing: border-box;
            font-style: normal;
            width: 100%;
            max-width: 500px;
          }
          .btLinkRosa:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #d82482;
            background-color: #ffffff;
            border: solid 1px #d82482;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "rosa-invetido") {
    return (
      // Botão usado no minha vvc.
      <div>
        <a className="btLinkRosaInvetido" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosaInvetido {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #d82482;
            border-radius: 3px;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            outline: 0;
            margin: 0;
            font-style: normal;
            width: ${varWidth};
            max-width: ${varMaxWidthe};
            color: #d82482;
            background-color: #ffffff;
            border: solid 1px #d82482;
          }
          .btLinkRosaInvetido:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #ffffff;
            border: solid 1px #d82482;
            background-color: #d82482;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "rosa-invetido-curto") {
    return (
      // Botão usado no minha vvc.
      <div>
        <a className="btLinkRosaInvetidoCurto" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosaInvetidoCurto {
		  box-sizing: border-box;
            display: inline-block;
            position: relative;
            width: ${varWidth};
            font-weight: 400;
            font-style: normal;
            font-size: 1rem;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            background-color: transparent;
            color: rgb(216, 36, 130);
            padding: 20px;
            margin-top: 25px;
            margin-bottom: 60px;
            border-width: 1px;
            border-style: solid;
            border-image: initial;
            border-radius: 4px;
            text-decoration: none;
            transition: all 0.3s ease 0s;
            outline: none;
            border-color: rgb(216, 36, 130);
          }
          .btLinkRosaInvetidoCurto:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #ffffff;
            border: solid 1px #d82482;
            background-color: #d82482;
          }
          @media (max-width: 520px) {
            .btLinkRosaInvetidoCurto {
              width: ${varWidthMobile};
            }
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "laraja-degrade") {
    return (
      <div>
        <a className="btLinkLaranjaDegrade" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkLaranjaDegrade {
            display: inline-block;
            position: relative;
            width: 100%;
            border-radius: 4px;
            background-color: rgb(255, 215, 0);
            font-family: "SimplonBP-Regular";
            font-weight: 400;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            text-decoration: none;
            transition: all 0.3s ease 0s;
            outline: currentcolor none medium;
            background-image: linear-gradient(
              281deg,
              rgb(254, 107, 3) -100%,
              rgb(227, 52, 101)
            );
            color: rgb(255, 255, 255);
            font-size: 1.125rem;
            box-shadow: rgba(0, 0, 0, 0.2) 10px 13px 20px -3px;
            border: medium none;
            padding: 16.5px;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "amarelo1") {
    return (
      // Botão de eu quero no minha vvc.
      <div>
        <a className="btLinkAmarelo1" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo1 {
            transition-duration: 1s;
            font-family: oiTextRegular, sans-serif;
            font-size: 1rem; /*16px*/

            background-color: #ffd700;
            border-radius: 0.28571429rem;
            color: #222;
            display: block;

            height: 2.2rem;
            text-align: center;
            width: 196px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 0.6rem 2.5rem;
            box-sizing: border-box;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo1:hover {
            transition-duration: 1s;
            color: #222;
            border: solid 2px #ffd700;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "amarelo2") {
    return (
      // Botão de eu quero no minha vvc.
      <div>
        <a className="btLinkAmarelo2" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo2 {
            transition-duration: 1s;
            font-family: oiTextRegular, sans-serif;
            font-size: 1rem; /*16px*/
            padding-top: 18px;
            background-color: #ffd700;
            border-radius: 3px;
            color: #222;
            display: block;
            height: 3.8rem;
            text-align: center;
            width: 100%;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            box-sizing: border-box;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo2:hover {
            transition-duration: 1s;
            color: #222;
            border: solid 2px #ffd700;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "amarelo3") {
    return (
      // Botão de "eu quero" OCC.
      <div>
        <a className="btLinkAmarelo3" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo3 {
            transition-duration: 1s;
            background-color: #ffd700;
            border-radius: 0.28571429rem;
            color: #222;
            display: block;
            font-size: 1.14285714rem;
            font-weight: 37.5rem; /*600*/

            height: 3.42857143rem;
            text-align: center;
            width: fit-content;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            font-family: "SimplonBP-Regular", Arial;
            outline: 0;
            margin: 0;
            /*margin-top: 1.28571429rem;*/
            padding: 0.85714286rem 20px;
            box-sizing: border-box;
            font-style: normal;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo3:hover {
            transition-duration: 1s;
            color: #222;
            border: solid 2px #ffd700;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "Purple1") {
    return (
      // Botão do Minha VVC na home do site SEO.
      <div>
        <a className="btLinkPurple1" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkPurple1 {
            font-family: oiTextRegular, sans-serif;
            font-size: 1rem; /*16px*/
            background-color: #8f25e5;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            height: 3.8rem;
            text-align: center;
            width: 143px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinkPurple1:hover {
            transition-duration: 1s;
            color: #8f25e5;
            border: solid 1px #8f25e5;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "Purple2") {
    return (
      // Botão do Minha VVC na home do site SEO.
      <div>
        <a className="btLinkPurple1" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkPurple1 {
            font-family: oiTextRegular, sans-serif;
            background-color: #8f25e5;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.2rem;
            text-align: center;
            width: 169px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinkPurple1:hover {
            transition-duration: 1s;
            color: #8f25e5;
            border: solid 1px #8f25e5;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  } else if (varEstilo == "branco") {
    return (
      // Botão do formulário Meus Documentos.
      <div>
        <a className="btLinkBranco" href={varHref}>
          {varValue}
        </a>
        {/* margin-top: 20px;
              padding: 0;
              margin: 0px;
              margin-top : 20px;
              padding: 10px;
              cursor: pointer;
              border-radius: 8px; */}
        <style jsx>{`
          .btLinkBranco {
            font-family: oiTextRegular, sans-serif;
            background-color: #ffffff;
            border-radius: 8px;
            color: #222222;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.42857143rem;
            text-align: center;
            width: 300px;
            text-decoration: none;
            border: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition: 0.5s;
            -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
          }
          .btLinkBranco:hover {
            -webkit-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            -moz-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
          }
        `}</style>
      </div>
    );
  } else {
    return (
      //Sem padrão
      <a href={varHref}>
        <div className="btLink">{varValue}</div>
        <style jsx>{`
          .btLink {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #000000;
            cursor: pointer;
            border-radius: 6px;
            text-align: center;
            border: solid 1px #dbdbdb;
            background-color: #ffffff;
          }
        `}</style>
      </a>
    );
  }
};
export default btSubmit;
