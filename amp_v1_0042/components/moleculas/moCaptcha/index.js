// Codigo Captcha Mocado
import React from 'react';
import Img from '../../atoms/atImg/index.js';
//import svgCaptcha from 'svg-captcha';

//console.log('Instanciou /componentes/organisms/documentoscopia/MocCaptcha.js');
const moCaptcha = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  var sessao ="";
  if( props.sessao!=undefined){sessao="?sessao="+props.sessao};
  function novoCaptcha(sessao){
    document.getElementById("svgCaptcha").src = "/api1/captcha/"+sessao+"&a="+Math.random();;
  }
  return(
    <div className="divCaptcha">
      <div className="molduraCaptcha">
      <Img
        id="svgCaptcha"
        class="svgCaptcha"
        src={"/api1/captcha/"+sessao}
        width="150px"
        height="50px"
        modo={modo}>
      </Img>
      </div>
        <div className="cssNovoCaptcha">
          <label for="svgCaptcha"> Não conseguiu ler? <a className="linkCaptcha" onClick={() => {novoCaptcha(sessao)}}>Trocar o código.</a></label>
        </div>
      
      <style jsx>{`
        .divCaptcha{
          width: 280px;
          text-align: center;
        }
        .molduraCaptcha{
          border: solid 1px #fb851c;
          width: 150px;
          border-radius:6px;
          margin-left:65px;
        }
        .cssNovoCaptcha{
          padding: 10px;
          font-family: SimplonBP-Regular;
          font-size: 12px;
          color: #909090;
        }
        .linkCaptcha{
          color:#fb851c;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
export default moCaptcha
