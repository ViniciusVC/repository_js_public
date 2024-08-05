import React from "react";
import * as Util from '../../../../controller/util.js';
import Img from "../../../atoms/atImg/index.js";

const moSegundaViaSession3 = function(props){
    var modo = Util.validaProps(props.modo,"html");
    return(
       <>
            <div className="segundaviaDivlinha3">
                <div className="tituloSpan">
                       <span >AS 4 VANTAGENS DE SER 
                           
                       </span>
                       <b>CONTA DIGITAL</b>  
                </div>
                <div className="session3ladoDireito">
                  
                        <div>
                            <Img
                                src="/static/assetsv5/img/minhavvc/segunda-via/seguranca@2x.png"
                                width="30px"
                                height="32.2px"
                                alt="Compdonente Img exemplo next"
                                title="Componente Img exemplo next"
                                class="ClassImgNext"
                                modo={modo} />

                            <p>Mais segurança pra receber a conta, sem risco de atrasos.</p>
                        </div>

                        <div>
                            <Img
                                src="/static/assetsv5/img/minhavvc/segunda-via/codBar@2x.png"
                                width="30px"
                                height="32.2px"
                                alt="Compdonente Img exemplo next"
                                title="Componente Img exemplo next"
                                class="ClassImgNext"
                            modo={modo} />
                                
                            <p>Facilidade pra organizar tudo, sem acúmulo de papel.</p>    
                        </div>  
                                
                    
                        <div>
                            <Img
                                src="/static/assetsv5/img/minhavvc/segunda-via/mask@2x.png"
                                width="30px"
                                height="32.2px"
                                alt="Compdonente Img exemplo next"
                                title="Componente Img exemplo next"
                                class="ClassImgNext"
                                modo={modo} />
                            
                                <p>Acesse suas contas de onde estiver e quando quiser.</p>
                        </div> 

                        <div>
                            <Img
                                    src="/static/assetsv5/img/minhavvc/segunda-via/star@2x.png"
                                    width="30px"
                                    height="32.2px"
                                    alt="Compdonente Img exemplo next"
                                    title="Componente Img exemplo next"
                                    class="ClassImgNext"
                                    modo={modo} />
                        
                                <p>Oi Pontos pra trocar por serviços, descontos em aparelhos e mais.</p>    
                        </div> 
             
                 </div>
                
            </div>

            <style jsx>{`
            
                .segundaviaDivlinha3{
                    display:flex; 
                    margin-top:70px;
                }
                .tituloSpan{
                    display:flex;
                    flex-direction:column ;
                    font-size: 32px;
                    color:rgb(34, 34, 34);
                    font-family: "SimplonBP-Regular";
                    text-transform: uppercase;
                }
               .session3ladoDireito{
                
                  display:grid;
                  grid-template-columns: 1fr 1fr ;

               }
               .session3ladoDireito div{    
                   display:flex;
                   margin-left:50px;
                   padding:30px;
                   padding-top:0;
                   padding-bottom:70px;
               }

               .session3ladoDireito div p{
                    font-size: 1rem;
                    font-family: Arial;
                    font-stretch: normal;
                    margin-left: 10px;
                    margin-top:  0;
                    width: 18.1875rem;
                    color: rgb(107, 107, 107);
                    line-height: 1.2;
               }

               @media (max-width: 1169px) {

                   .segundaviaDivlinha3{
                        display:block;
                        margin-top:70px;
                        margin-left:70px;
                    }
                    .session3ladoDireito{
                        display:block;
                       
                    }
                    .session3ladoDireito div{    
                        padding-bottom:30px;
                    }
                    .session3ladoDireito div p{
                         width: 100%; 
                    }
                    
                    .tituloSpan{
                       margin-bottom:50px;
                       margin-left:80px;
                  }

                    @media(max-width:600px){
                        .segundaviaDivlinha3{
                            display:block;
                            margin-top:10px;
                            margin:auto;
                        }
                        .session3ladoDireito div{    
                        
                            margin-left:0;
                            padding:20px;
                            padding-bottom:10px;
                        
                        }
                        .session3ladoDireito div p{
                            font-size: 1rem;
                        }
                        .tituloSpan{
                            margin-top:40px;
                            margin-left:10px;
                            margin-bottom:10px;
                        }
                    }

               }
            `}</style>
       </>
    )

}

export default moSegundaViaSession3;