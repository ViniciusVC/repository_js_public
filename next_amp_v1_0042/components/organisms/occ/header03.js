// header do LP-ASSINE-POS - Layout OCC

import React from 'react';
import Img from '../../atoms/atImg/index.js';


const header03 = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      header03                         ║');
  console.log('╚════════════════════════════════════════╝');
 
  // var cidade = "RJ - Rio de Janeiro";
  // if( props.cod!=undefined){varClass=cod.cod};
  // var VarModo = "html";
  // if( props.modo!=undefined){VarModo=props.modo};
 
  return(
    <header>
      <div className="headerrow">
        <div className="divheadimglogo divops">
          <Img
            src="/static/fontesoi/logo-vvc.svg"
            width="50px"
            height="47px"
            alt={props.JsonHeader.Img01.alt}
            title={props.JsonHeader.Img01.title}
            class="logoOisvg"
            modo={props.JsonHeader.modo} />              
          <h4>
            {props.JsonHeader.h4}
          </h4>
        </div>
        <div className="divheadameba">
          <Img
            src="/static/assetsv5/img/lp-assine-pos/ameba-vvc-mobile.png"
            width="27px"
            height="122px"
            alt={props.JsonHeader.Img02.alt}
            title={props.JsonHeader.Img02.title}
            class="amebalaranja"
            modo={props.JsonHeader.modo} />
        </div>
      </div>
      <style jsx>{`

/* header ------------------------------------------------------------ */
@font-face {
  font-family: 'SimplonBP-Regular';
  src: url('/fontesoi/simplonbp-regular-webfont.woff');
} 
@font-face {
  font-family: 'SimplonBP-Headline';
  src: url('/fontesoi/simplonvvc-headline-webfont.woff');
}

.headerrow {
  margin: 3.5rem auto 1.28571429rem auto;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
}

.divops{
  padding-left: 0;
  padding-right: 0;
  min-height: 0;
  float: left;
  position: relative;
  padding: 0;
  margin: 0;
  cursor: default;
  font-weight: normal;
  letter-spacing: 0;
}

.divheadameba{
  float: right;
  width: 28px;
  display: flex;
  justify-content: flex-end;
  padding-right: 8;
  min-height: 0;
}

/* header Pequeno */
@media only screen and (max-width : 780px) {
  .content {
      width: 750px;
  }
  .divheadameba img{
      display: block;
      vertical-align: middle;
      border: 0;
  }
  .divheadameba amp-img{
      display: block;
      vertical-align: middle;
      border: 0;
  }

  .divheadimglogo{
      width: 91.66666667%;
      /*margin-right: 8%;*/
      font-size: 1.28571429rem;
      line-height: 1.71428571rem;
  }

}

/* header Medio */
@media only screen and (min-width : 780px) {
  .divheadameba img{
      display: none;
  }
  .divheadameba amp-img{
      display: none;
  }
  .divheadimglogo{
      width: 91.66666667%;
      font-size: 1.71428571rem;
      line-height: 2.28571429rem;
  }
}

/* header grande */
@media only screen and (min-width : 992px) {
  .content {
      width: 970px;
  }
  .divheadameba img{
      display: none;
  }
  .divheadameba amp-img{
      display: none;
  }
  .divheadimglogo{
      width: 41.66666667%;
      font-size: 1.71428571rem;
      line-height: 2.28571429rem;
  }
}
      `}</style>
    </header>
  )
}

export default header03



/*

var React = require('react');
//var PropTypes = require('prop-types');
//var Img = require('../atoms/Imagem.jsx');
import Img from '../../atoms/Imagem.js';



class header03 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/header03.jsx - Layout OCC ');
    return (
      <header>
        <div className="headerrow">
          <div className="divheadimglogo divops">
            <Img src={props.JsonHeader.Img01.src} width={props.JsonHeader.Img01.width} height={props.JsonHeader.Img01.heigth} alt={props.JsonHeader.Img01.alt} title={props.JsonHeader.Img01.title} className={props.JsonHeader.Img01.class} modo={props.JsonHeader.modo}></Img>
            <h4>
              {props.JsonHeader.h4}
            </h4>
          </div>
          <div className="divheadameba">
            <Img src={props.JsonHeader.Img02.src} width={props.JsonHeader.Img02.width} height={props.JsonHeader.Img02.heigth} alt={props.JsonHeader.Img02.alt} title={props.JsonHeader.Img02.title} className={props.JsonHeader.Img02.class} modo={props.JsonHeader.modo}></Img>
          </div>
        </div>
      </header>
    );
  }
}


// Index.propTypes = {
//   title: PropTypes.string,
// };


module.exports = header03;
*/