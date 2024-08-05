import React from 'react';
import BtLink from '../../../atoms/atBtLink/index';
import Link from '../../../atoms/atLink/index';
import Img from "../../../atoms/atImg/index.js";
import * as Util from '../../../../controller/util.js';

// import { Container } from './styles';

const segundaViaSession1 = function (props) {
  var modo = Util.validaProps(props.modo,"html");
  return (
      <>
          <div className="segundaviaDivlinha">
              <div>
                  <h1 className="segundaviaTitulo1">2ª Via</h1>
                  

                  <h2 className="segundavia-titulo2">2ª VIA DE CONTA</h2>
                  <p className="segundaViaP" >
                    <span>Acesse sua conta resumida com Código de Barras de forma fácil e rápida.</span>
                  </p>
                  <BtLink href="https://www.vvcestudio.com.br/meuvvc/codigo-de-barras/" value="Acessar conta" estilo="laraja-degrade"/>
                  <p className="segundaViaP" >
                    <span>Pra acessar sua conta detalhada e os serviços Oi TV e Fibra, </span>
                  </p>
                  <Link href="https://login.vvcestudio.com.br/nidp/app/login?id=loginsegurancasso&sid=10&option=credential&sid=10" value="entre na Minha VVC" estilo="Link2"/>
              </div>
                   {/* <amp-script layout="container" src="http://localhost:8081/static/assetsv5/js/codigo-de-barras.js">
                       <button>Hello amp-script!</button>
                    </amp-script> */}
              <div>
                  <div className="imagem">
                    <Img
                            src="/static/assetsv5/img/minhavvc/segunda-via/notebook.png"
                            width="352px"
                            height="330px"
                            alt="Compdonente Img exemplo next"
                            title="Componente Img exemplo next"
                            class="ClassImgNext"
                            modo={modo} />
                  </div>
              </div>
              
          </div>
                   
          <style jsx>{`

                    .segundaviaDivlinha{
                        display:flex;
                        justify-content: space-between;
                        margin:0 20px;
                        margin-top:60px
                        
                    }

                    .segundaviaTitulo1{
                       color: rgb(155, 155, 155);
                       font-size: 1rem;
                       margin-bottom: -15px;
                       line-height: 1.2;
                       font-weight: 400;
                       font-family: "Simplon-Headline";
                              
                    }
                    
                    .segundavia-titulo2{
                      font-family: "SimplonBP-Regular";
                      margin-bottom: 5px;
                      font-size:2rem;
                      font-weight: 600;
                    }
                 
                    .segundaViaP {
                      width: 26rem;
                      font-family: 'SimplonBP-Regular';
                      color: rgb(107, 107, 107);
                      line-height: 1.6;
                      font-weight: 300;
                      text-align: justify;
                   }
                   .imagem{
                     padding-right:120px;
                   }

                   @media (max-width: 1169px) {

                    .segundaviaDivlinha {
                        display:flex;
                        flex-direction:column ;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: auto;
                        margin-left: auto;
                        max-width: 768px;
                    }
                    .segundaViaP{
                      width: 100%;
                    }
                    .imagem{
                      display:none;
                    }
                   
                    @media(max-width:600px){
                      .segundaviaDivlinha {
                         margin-right: 20px;
                      }
                     
                    }
                  }

                   
          `} </style>

         
      </>
   
  );
}

export default segundaViaSession1