// content do LP-ASSINE-POS - Layout OCC
import React from 'react';
import Img from '../../atoms/atImg/index.js';
import Price from '../../atoms/atPrice/index.js';
import BtLink from '../../atoms/atBtLink/index.js';


const content03 = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      content03                         ║');
  console.log('╚════════════════════════════════════════╝');
 
  var cidade = "RJ - Rio de Janeiro";
  if( props.cod!=undefined){varClass=cod.cod};
  var VarModo = "html";
  if( props.JsonContent.modo!=undefined){VarModo=props.JsonContent.modo};
  console.log('Modo='+VarModo);
  return(
    <div className="content">
    <div className="colunas">

      <div className="coluna1">
        <h1><strong>{props.JsonContent.Titulo}</strong>{props.JsonContent.SubTitulo}</h1>

        <div className="divoferta divofertaresp">

          <div className="description" >
            <span className="nomeplanooi">{props.JsonContent.Nomeplano}</span> 
            <div>
                <span className="plan">{props.JsonContent.Plan}</span>
                <small>{props.JsonContent.PlanSmall}</small>
            </div>
          </div>

          <div >
            <div className="divicons">
                <ul className="sprite-social-icons-collection">
                <li className="li-icon"><span className="spaniconresp span-icon span-netflix" title={props.JsonContent.Icon[0]}>&nbsp;</span></li>
                <li className="li-icon"><span className="spaniconresp span-icon span-youtube" title={props.JsonContent.Icon[1]}>&nbsp;</span></li>
                <li className="li-icon no-border"><span className="spaniconresp span-icon span-facebook" title={props.JsonContent.Icon[2]}>&nbsp;</span></li>
                <li className="li-icon"><span className="spaniconresp span-icon span-messenger" title={props.JsonContent.Icon[3]}>&nbsp;</span></li>
                <li className="li-icon no-border"><span className="spaniconresp span-icon span-instagram" title={props.JsonContent.Icon[4]}>&nbsp;</span></li>
                <li className="li-icon no-border"><span className="spaniconresp span-icon span-whatsapp" title={props.JsonContent.Icon[5]}>&nbsp;</span></li>
                <li className="li-icon no-border"><span className="spaniconresp span-icon span-vvc-play" title={props.JsonContent.Icon[6]}>&nbsp;</span></li>
                </ul>
            </div>
            <span className="obs">{props.JsonContent.Obs}</span>
          </div>
        </div>

        <div className="divpreco divprecoresp">
          <div className="line">
            <div className="triangle"></div>
          </div>
        </div>

        <div className="divdetailsesp">
            <Price 
            divreal={props.JsonContent.Price.divreal}
            divvalor={props.JsonContent.Price.divvalor}
            divcents={props.JsonContent.Price.divcents}
            mes={props.JsonContent.Price.mes}
            modo={props.JsonContent.Modo}>
            </Price>
            <BtLink href={props.JsonContent.BtComprar.linlk} value={props.JsonContent.BtComprar.texto} estilo="amarelo3"/>
        </div>
      
      </div>
      <div className="coluna2">
        <Img 
          src={props.JsonContent.ImgColuna2.src}
          width={props.JsonContent.ImgColuna2.width}
          height={props.JsonContent.ImgColuna2.height}
          alt={props.JsonContent.ImgColuna2.alt}
          title={props.JsonContent.ImgColuna2.title}
          class={props.JsonContent.ImgColuna2.class}
          modo={VarModo}>
        </Img>
      </div>
    </div>
    <style jsx>{`
    /* body ------------------------------------------------------------ */
    .content{
          width: 92%;
          margin-bottom: 5rem;
          padding: 0;
          padding-bottom: 3rem;
          margin: 0;
          cursor: default;
          box-sizing: border-box;
          display: block;
    }

    .colunas{
          width: 100%;
          margin-right: 0;
          margin-left: 0;
          padding: 0;
          margin: 0;
          cursor: default;
          box-sizing: border-box;
          display: block;
          display: table;
          content: " ";
          clear: both;
    }

    /* body Pequeno */
    @media only screen and (max-width : 780px) {
          .coluna1{
              width: 90%;
              float: left;
              position: relative;
        
              }
          .coluna1 h1 {
              font-size: 1.42857143rem;
              line-height: 1.71428571rem;
              }
          .coluna1 strong {
              font-size: 2.28571429rem;
              line-height: 2.85714286rem;
              }
          .coluna2{
              width: 1%;
              float: left;
              position: relative;
          }
          .imgresponsive{
              display: none;
              max-width: 1%;
              height: auto;
              vertical-align: middle;
              border: 0;
              padding: 0;
              margin: 0;
              cursor: default;
              box-sizing: border-box;
          }
          
          .divofertaresp{
              width: 100%;
              display: flex;
              flex-wrap: wrap;
          }
          /*vvc Pequeno*/
          .plan{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 2.71428571rem;
              line-height: 1;
              padding: 0;
              margin: 0;
          }
          .description small{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 1.57142857rem;
              margin-left: -1rem;
          }


          .divprecoresp{
              margin-top:1.78571429rem;
              transform:rotate(180deg);
              width: 100%;
          }
          .benefits{
              /*
              margin-top: 1rem;
              margin-bottom: 0rem;
              */
              margin-left: 0rem;
          }
          .triangle{
              /* Pequeno */
              position: absolute;
              left: 15rem;
              top: 1.7rem;
              transform: rotate(-45deg);
              padding: 0;
              margin: 0;
          }
          .divdetailsesp{
              margin-top: 0;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              float: left;
          }
          .divprice{
              margin-top: 1rem;
              font-family: "SimplonBP-Headline",sans-serif;
              display: flex;
              flex-wrap: wrap;
              }
          .divreal{
              padding-top: 0.5rem;
              font-size: 1.6rem;
          }
          .divvalor{
              font-size: 3.5rem;
          }
          .divcents{
              margin-top: -0.8rem;
              margin-right: 2rem;
              display: block;    
              font-size: 1rem;
          }

          .spaniconresp{
              zoom: .7;
              font-size: 2.85714286rem;
          }

          .line{
              height: 2.14285714rem;
              width: 100%;
              border-bottom: .07142857rem solid #f8562c;
              position: relative;
              padding: 0;
              margin: 0;
              cursor: default;
              box-sizing: border-box;
          }
      }

      /* body Medio */
      @media only screen and (min-width : 780px) {
          .coluna1{
              width: 99%;
              float: left;
              position: relative;
              }
          .coluna1 strong {
              font-size: 3.42857143rem;
              line-height: 4.28571429rem;
              }
          .coluna1 h1 {
              font-size: 2.28571429rem;
              line-height: 2.85714286rem;
              }
          .coluna2{
              width: 1%;
              float: left;
              position: relative;
          }
          .imgresponsive{
              display: none;
              max-width: 1%;
              height: auto;
              vertical-align: middle;
              border: 0;
              padding: 0;
              margin: 0;
              cursor: default;
              box-sizing: border-box;
          }

          .divofertaresp{
              width: 33.33333333%;
              display:block;
          }
          /*vvc* medio*/
          .plan{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 4.71428571rem;
              line-height: 1;
              padding: 0;
              margin: 0;
          }
          .description small{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 2.57142857rem;
              margin-left: -1rem;
          }
          .divprecoresp{
              margin: 0px;
              margin-top: 3rem;
              transform: rotate(90deg);
              width: 16.66666667%;
          }
          .benefits{
              margin-left: -2rem;
          }
          .triangle{
              /* Medio */
              position: absolute;
              left: 3.92857143rem;
              top: 2.42857143rem;
              transform: rotate(-45deg);
              padding: 0;
              margin: 0;
          }
          .divdetailsesp{
              margin-top: 2rem;
              width: 10rem;

              display: flex;
              flex-wrap: wrap;
              float: left;
              
          }
          .divprice{
      font-family: "SimplonBP-Headline",sans-serif;
      display: flex;
      flex-wrap: wrap;
      }
    .divreal{
      padding-top: 0.5rem;
      font-size: 1.8rem;
    }
    .divvalor{
      font-size: 4.2rem;
    }
    .divcents{
      margin-top: -0.5rem;
      display: block;    
      font-size: 1.5rem;
    }

          /*icones Grandes*/
          .spaniconresp{
              zoom: .9;
              font-size: 4.71428571rem;
          }

          .line{
              border-bottom: .07142857rem solid #f8562c;
              height: 2.85714286rem;
              position: relative;
              width: 8.92857143rem;
              padding: 0;
              margin: 0;
              cursor: default;
              box-sizing: border-box;
          }

      }

      /* body grande */
      @media only screen and (min-width : 992px) {
          .coluna1{
              width: 55%;
              float: left;
              position: relative;

              }
          .coluna1 strong {
              font-size: 3.42857143rem;
              line-height: 4.28571429rem;
              }
          .coluna1 h1 {
              font-size: 2.28571429rem;
              line-height: 2.85714286rem;
              }    
          .coluna2{
              /*margin-top: -27px;*/
              padding-top: -27px;
              width: 44%;
              float: right;
              text-align: right;
              /*float: left;
              position: relative;*/
    
          }

          .imgresponsive{
              display: block;
              max-width: 100%;
              height: auto;
              vertical-align: middle;
              border: 0;
              padding: 0;
              margin: 0;
              /*cursor: default;
              box-sizing: border-box;*/
          }

          .divofertaresp{
              width: 50%;
              display:block;
          }
          /*vvc*/
          .plan{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 4.71428571rem;
              line-height: 1;
              padding: 0;
              margin: 0;
          }
          .description small{
              font-family: "SimplonBP-Headline",sans-serif;
              font-size: 2.57142857rem;
              margin-left: -1rem;
          }
          .divprecoresp{
              margin: 0px;
              margin-top: 2rem;
              /*margin-top: 6.78571429rem;*/
              transform: rotate(90deg);
              width: 16.66666667%;
          }
          .benefits{
              /*margin-top: -5rem;
              margin-bottom: -4rem;*/
              margin-left: -2rem;
          }
          .triangle{
              /* grande */
              position: absolute;
              left: 3.92857143rem;
              top: 2.42857143rem;
              transform: rotate(-45deg);
              padding: 0;
              margin: 0;
          }
          .divdetailsesp{
              margin-top: 2rem;
              width: 9.7rem;
              display: flex;
              flex-wrap: wrap;
              float: left;
          }
          .divprice{
              font-family: "SimplonBP-Headline",sans-serif;
              display: flex;
              flex-wrap: wrap;
              }
          .divreal{
              padding-top: 0.5rem;
              font-size: 1.8rem;
          }
          .divvalor{
              font-size: 4.2rem;
          }
          .divcents{
              margin-top: -0.5rem;
              display: block;    
              font-size: 1.5rem;
          }

          .spaniconresp{
              zoom: .9;
              font-size: 4.71428571rem;
          }
      }
      .content h1 {
          color: #222;
          letter-spacing: 0;
          /*margin-bottom: -1.42857143rem;*/
          text-transform: uppercase;
          font-family: "SimplonBP-Headline",Arial;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          margin-top: 20px;
          margin: .67em 0;
          padding: 0;
          padding-bottom: 1rem;
          cursor: default;
          box-sizing: border-box;
          display: block;
          margin-block-start: 0.67em;
          margin-block-end: 0.67em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
      }

      .content strong{
          background: linear-gradient(279deg, #ff0, #fff300 9%, #ffc300 14%, #ff9d00 25%, #ff8200 35%, #ff7200 43%, #ff6c00 50%, #e9278b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: block;
          font-weight: normal;
      }

      .nomeplanooi{
          color: #909090;
          display: block;
          font-size: 1.14285714rem;
          line-height: 1;
          font-family: "SimplonBP-Regular",Arial;
          padding: 0;
          margin: 0;
          cursor: default;
      }

      .description{
          font-family: "SimplonBP-Headline",sans-serif;
          font-size: 4.71428571rem;
          padding: 0;
          margin: 0;
          cursor: default;
          box-sizing: border-box;
      }




      .sprite-social-icons-collection{
          display: flex;
          list-style-type: none;
      }
      .divicons{
          margin-left: -2.5rem;
      }

      .span-icon {
          width: 31px;
          height: 30px;    
          display: block;
          margin-right: 6px;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          line-height: 1;
          list-style-type: none;
          list-style: none;
      }
      .span-netflix{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          /*justify-content: flex-start;*/
          background-position: 0 0;
      }
      .span-youtube{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -40px 0;
      }
      .span-facebook{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -81px 0;
      }
      .span-messenger{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -120px 0;
      }
      .span-instagram{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -162px 0;
      }
      .span-whatsapp{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -203px 0;
      }
      .span-vvc-play{
          background: url(https://www.vvcestudio.com.br/file/general/sprite-social-icons.png) no-repeat 0 0 transparent;
          background-position: -243px 0;
      }

      .obs{
          font-family: "SimplonBP-Regular",Arial;
          color: #222;
          font-size: 1.14285714rem;
      }

      .divoferta {  
          float: left;
      }

      .divpreco{
          /*cursor: default;*/
          box-sizing: border-box;
          float: left;
          /*position: relative;
          padding: 0;
          margin: 0;
          margin-top: 3rem;
          padding-right: 0;
          padding-left: 0;
          min-height: 0;
          background: transparent;*/
      }

      div {
          display: block;
      }

      .triangle{
          background: #fff;
          border: .07142857rem solid #f8562c;
          border-width: .07142857rem .07142857rem 0 0;
          height: .71428571rem;
          width: .71428571rem;
      }
    `}</style>
 </div>
)}

export default content03

/*


//var React = require('react');
//var Img = require('../../atoms/Imagem.jsx');
//var PropTypes = require('prop-types');
import React, { Component } from 'react';
import Img from '../../atoms/Imagem.js';
var Price = require('../../atoms/Price.js');

var VarModo = "AMP";

class content03 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/content03.jsx - layout OCC');
    return (

    );
  }
}


// if (props.modo=="css" || props.modo=="CSS") {
//   var css = ' ' + Price.modo("css") + Img.modo("css");
//   return css;
// }else{



// content03.propTypes = {
//   title: PropTypes.string,
// };


module.exports = content03;
*/