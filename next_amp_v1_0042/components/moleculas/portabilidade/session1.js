import React from 'react';
import Icon from "../../atoms/atIcon/index.js";
import Img from "../../atoms/atImg/index.js";
import * as Util from '../../../controller/util.js';


const session1 = props =>{

    var modo = Util.validaProps(props.modo,"html");
    return(
        <>
            <div className="sessionContent">
                <div className="textoContent">
                    <p id="p">PORTABILIDADE</p>
                    <h1>Ficou mais fácil trazer o seu número pra Oi</h1>
                    <p id="text"> Mude de operadora via SMS e mantenha seu número atual sem pagar nada a mais por isso. Você pode escolher entre os planos pré-pago e controle.</p>
                    <div className='button'>
                      <a href="#carousel">Saiba mais</a>
                      <Icon type="arrowdown" color="#fff" width="15px" />
                    </div>
                </div>
                <div className="image1Portabilidade">
                    <Img
                            src="/static/assetsv5/img/portabilidade/smartphone.svg"
                            width="338px"
                            height="326px"
                            alt="Compdonente Img exemplo next"
                            title="Componente Img exemplo next"
                            class="ClassImgNext"
                            modo={modo} />
                    </div>
                <div className="image2Portabilidade">
                    <Img
                                src="/static/assetsv5/img/portabilidade/foto1.svg"
                                width="161px"
                                height="310px"
                                alt="Compdonente Img exemplo next"
                                title="Componente Img exemplo next"
                                class="ClassImgNext"
                                modo={modo} />
                </div>
            </div>
            <style jsx>{`
                
                .sessionContent{
                    position: relative;
                    color: rgb(255, 255, 255);
                    background: rgb(199, 33, 119);
                    overflow: hidden;
                    display:grid;
                    grid-template-columns:2.6fr 1fr 0.5fr;
                    
                }
                .textoContent{
                  
                    margin: 0px auto;
                    padding: 0px 1.25rem;
                }
                 #p{
                    font-size: 1rem;
                    margin-top: 2.4375rem;
                    color: rgb(255, 216, 2);
                    font-family: Simplon-medium, sans-serif;
                }
                .textoContent h1{
                    max-width: 30.625rem;                                                   
                    font-size: 2rem;
                    line-height: 1.23;
                    text-transform: uppercase;
                    font-family: Simplon-bold,sans-serif;
                }
                #text{
                    max-width: 25rem;
                    font-size: 1.25rem;
                    line-height: 1.3;
                    margin-top: 0.6875rem;
                    margin-bottom: 2.0625rem;
                }
                .button{
                    font-size: 1.25rem;
                    margin-bottom: 2.8125rem;
                    display:flex;
                }
                .button a {
                    color: rgb(255, 255, 255); 
                }
                .image1Portabilidade{
                    margin-top: 1.8125rem;
                   
                }
                .image2Portabilidade{
                    position: absolute;
                    top: 0px;
                    right: 0px;
                }

                @media(max-width:600px){
                    .sessionContent{
                        display:block
                    }
                    .image1Portabilidade{
                        display:none;
                    }
                    .textoContent.jsx-3321882886 {
                        margin: 0px auto;
                        padding: 0px 1rem;
                    }

                }
                

            }
            
            `}</style>
        </>
    )
}

export default session1;