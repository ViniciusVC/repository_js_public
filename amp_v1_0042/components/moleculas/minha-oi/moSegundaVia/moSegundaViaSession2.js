import React from 'react';
import Img from "../../../atoms/atImg/index.js";
import BtLink from "../../../atoms/atBtLink/index";
import * as Util from '../../../../controller/util.js';


// import { Container } from './styles';

const moSegundaViaSession2= function (props) {
    var modo = Util.validaProps(props.modo,"html");
  return (
      <>
         <div className="segundaviaDivlinha2">
                <div className="imagem2">
                    <Img
                        src="/static/assetsv5/img/minhavvc/segunda-via/ilustraPeople.png"
                        width="300px"
                        height="280px"
                        alt="Compdonente Img exemplo next"
                        title="Componente Img exemplo next"
                        class="ClassImgNext"
                        modo={modo} />
                </div>
                
                       
                <div className="divLadoDireito">
                    <h3 className="tituloH3">CONTA DIGITAL</h3>
                   
                   <div className="tituloSpam">
                        <span>
                             Receba a sua conta 
                            <b> por e-mail todo mês</b>

                        </span>
                   </div>
                
                    
                    <p className="textoP">Tenha mais praticidade e segurança, receba suas contas sem risco de atrasos, acesse de onde estiver e ainda ganhe pontos pra trocar por descontos, serviços, ingressos e mais.</p>
                    <div className='button'>
                        <BtLink href="https://www.vvc.com.br" value="Eu quero" estilo="rosa-invetido" maxwidth="none"/>
                    </div>
                </div>
                <div className="imagem1">
                    <Img
                            src="/static/assetsv5/img/minhavvc/segunda-via/clip2.svg"
                            width="152px"
                            height="186px"
                            alt="Compdonente Img exemplo next"
                            title="Componente Img exemplo next"
                            class="ClassImgNext"
                            modo={modo} />
                </div>
                
            </div>
                
            
       
         <style jsx>{`

                .segundaviaDivlinha2{
                   display:flex;
                   justify-content: space-between;
                   margin:0 20px; 
                }
               
                .tituloH3{
                    font-weight: 400;
                    font-style: normal;
                    font-size: 1rem;
                    line-height: 1.2;
                    color: rgb(155, 155, 155);
                    margin: 1rem 0px;
                    text-transform: uppercase;
                    font-family: "Simplon-Headline";
                    
                }
                .imagem{
                    
                    padding-left: 50px;
                }
                
                .tituloSpam{
                    display:flex;
                    flex-direction:column;
                    font-size: 32px;
                    color:rgb(34, 34, 34);
                    font-family: "SimplonBP-Regular";
                    text-transform: uppercase;
                    width: 21.875rem;
                }
                .b{
                    font-weight: 800;
                   
                }
                .textoP{
                    margin-top:30px;
                    width: 26rem;
                    font-size: 1rem;
                    color:rgb(107, 107, 107);
                    line-height: 1.6;
                }              
                .divLadoDireito{
                    padding-left:150px; 
                }

                @media (max-width: 1169px) {

                            .segundaviaDivlinha2 {
                                display:flex;
                                flex-direction:column ;
                                position: relative;
                                margin-right: auto;
                                margin-left: auto;
                                max-width: 768px;

                            }
                            .divLadoDireito{
                                padding-left:15px; 
                            }
                            .textoP{
                                width: 100%; 
                                margin-top:370px
                            }
                            .tituloSpam{
                                flex-direction:row; 
                                justify-content: space-around;
                                width: 100%;
                                justify-content: stretch;

                            }
                            
                            .imagem1{
                                 display:none;
                            }
                            .imagem2{
                                 position: absolute;
                                 top:150px;
                                 left:200px;
                            }
                            
                                @media(max-width:600px){
                                    .segundaviaDivlinha2 {
                                      width:100%;

                                    }
                                    .divLadoDireito{
                                        padding-left: 20px;
                                    }
                                    .imagem2{
                                        left: 0px;
                                        right: 0px;
                                        padding: 0 10px;
                                    }
                                    .button{
                                        width: 95%;
                                    }
                                
                                }
                    }
         `} </style>
      </>
  );
}

export default moSegundaViaSession2;