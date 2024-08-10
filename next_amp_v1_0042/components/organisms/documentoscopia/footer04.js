// layout de Documentoscopia(/meusdocumentos/) - Projeto Piloto
import React from 'react';
import Img from '../../atoms/atImg/index.js';

//console.log('Instanciando /componentes/organisms/documentoscopia/footer04.js');

const footer04 = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  return(
  <footer>
    <div className="rodape">
            <div className="iconesfooter">
            <div>
              Atendimento ao cliente
            </div>
            <a className="iconSocialLink" href="https://www.facebook.com/OiOficial/">
              <Img src="/static/assetsv5/img/documentoscopia/ico-face.png" modo={modo} alt="Facebook da Oi" title="facebook da Oi"></Img>
            </a>
            <a className="iconSocialLink" href="https://twitter.com/vvc_oficial">
              <Img src="/static/assetsv5/img/documentoscopia/ico-twit.png" modo={modo} alt="Twitter da Oi" title="Twitter da Oi"></Img>
            </a>
            <a className="iconSocialLink" href="https://www.youtube.com/user/oi/">
              <Img src="/static/assetsv5/img/documentoscopia/ico-yout.png" modo={modo} alt="Youtube da Oi" title="Youtube da oi"></Img>
            </a>
            </div>
    </div>
    <style jsx>{`
      .iconSocialLink{
        transition: all 0.8s;
        padin-top: 0px;
      }
      .iconSocialLink:hover{
        transition: all 0.8s;
        padding-top: 10px;
      }
      .rodape{
        text-align: right;
        font-family: SimplonBP-Regular;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 2.49;
        letter-spacing: normal;
        font-size: 15px;
        color: #909090;
        height:50px;
      }
      .iconesfooter{
        display: inline-flex;
        flex-wrap: wrap;
      }
      footer{
        text-align: right;
      }
    `}</style>
  </footer>
)
    }
export default footer04
