import React from 'react';
import Img from "../../../atoms/atImg/index.js";
import * as Util from '../../../../controller/util.js';
import BtLink from '../../../atoms/atBtLink/index';
// import { Container } from './styles';

const segundaViaSession4 = function(props) {
    var modo = Util.validaProps(props.modo,"html");
    return (
            <>
                <div className="segundaviaDivlinha4">
                        <div className="ladoEsquerdo">
                            <h3 className="segundaviaTitulo1" >débito automático</h3>
                            <div className="session4TituloSpan">
                                <span >Ative o </span>
                                <b className=".b">DÉBITO AUTOMÁTICO</b>  
                            </div>
                            <p>Evite atrasos no pagamento, filas de banco e tenha mais comodidade.</p>
                            <div className ="sessionButton">
                              <BtLink href="https://www.vvc.com.br/minha-oi/codigo-de-barras/" value="Ativar agora" estilo="laraja-degrade"/>
                            </div>
                        </div>
                        <div className="imagem">
                            <Img
                                src="/static/assetsv5/img/minhavvc/segunda-via/ilustraCellphone.png"
                                width="324px"
                                height="290px"
                                alt="Compdonente Img exemplo next"
                                title="Componente Img exemplo next"
                                class="ClassImgNext"
                                modo={modo} />
                        </div>
                       

                </div>
                <style jsx>{`
                    
                    .segundaviaDivlinha4{
                        display:flex;
                        justify-content: space-between;
                        margin:0 20px; 
                        margin-top: -60px;
                        color: rgb(107, 107, 107);
                    }
                    .segundaviaTitulo1{
                       color: rgb(155, 155, 155);
                       font-size: 1rem;
                       line-height: 1.2;
                       font-weight: 400;
                       font-family: "Simplon-Headline";
                       letter-spacing: 1.1px;
                       
                    }
                    .session4TituloSpan{
                        width: 24.375rem;
                        font-size: 2rem;
                        color:rgb(34, 34, 34);
                        font-family: "SimplonBP-Regular";
                        text-transform: uppercase;
                    }
                    .b{
                        font-weight: 800;                    
                    }
                    .ladoEsquerdo{
                        max-width: 23.4375rem;
                    }
                    .segundaviaDivlinha4 p{
                      
                        font-size: 1rem;
                        font-weight: 300;
                        margin: 1rem 0px 2.5rem; 
                        font-family: "SimplonBP-Regular";
                        line-height: 1.4;
                        
                    }
                    .imagem{
                        margin-right: 250px;
                    }

                    @media (max-width: 1169px) {
                        .imagem{
                                display: none;
                            }
                        .segundaviaDivlinha4{
                            display:block;
                            margin-left:140px;
                            padding-bottom: 20px;
                            margin-top: 0px;
                        }
                        
                        .ladoEsquerdo{
                             max-width:none;
                             padding-right: 150px;   
                       }

                            @media(max-width:600px){
                                .segundaviaDivlinha4{
                                    display:block;
                                    margin-top:10px;
                                    margin:auto;
                                    padding-right: 40px;
                                }
                                 .ladoEsquerdo{    
                                    margin-left:0;
                                    padding:20px;
                                    padding-bottom:10px;
                                }
                                
                                .session4TituloSpan{
                                    margin-bottom:10px;
                                    width:100%;
                            }
                    }
                
                `}</style>
            </>
    );
}


export default segundaViaSession4;