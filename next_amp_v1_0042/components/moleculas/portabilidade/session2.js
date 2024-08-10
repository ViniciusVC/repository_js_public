import React from 'react'
import Img from "../../atoms/atImg/index.js";
import * as Util from '../../../controller/util.js';

const session2 = props =>{
    var modo = Util.validaProps(props.modo,"html");
    console.log(modo);
    return(
        <>
        <div className="contentSession2">
             <h2>Portabilidade fácil</h2>
             <p className='contentSession2P'>Mude agora o seu número para o Pré ou Controle da Oi via SMS. Escolha uma opção abaixo:</p>
             <div className="selectPortabilidade">
                <div id="Pre-Pago">Pré-Pago</div>
                <div id="Controle">Pré-Pago</div>
             </div>
             <div className="carouselPortabilidade">
             <amp-carousel width="450" height="300" layout="responsive" type="slides">
                    
                            <div className='card'>
                                <h5>1º Passo</h5>
                                    <p className='cardP'>Compre e 
                                        <a href="#PortabilidadeAtivarChip">ative um Chip da Oi</a>.
                                        Depois, envie um SMS pra
                                        <strong> 27531 </strong> 
                                        do seu Oi com a palavra PORTAR junto com o DDD e o seu número atual.
                                    </p>
                                    <Img
                                        src="/static/assetsv5/img/portabilidade/passo1.png"
                                        width="162px"
                                        height="266px"
                                        alt="Compdonente Img exemplo next"
                                        title="Componente Img exemplo next"
                                        class="ClassImgNext"
                                        modo={modo} />
                            </div>
                            <div className='card'>
                                <h5>2º Passo</h5>
                                    <p className='cardP'>
                                    No seu chip da outra operadora, você vai receber um SMS com um código de verificação.
                                    </p>
                                    <Img
                                        src="/static/assetsv5/img/portabilidade/passo2.png"
                                        width="162px"
                                        height="266px"
                                        alt="Compdonente Img exemplo next"
                                        title="Componente Img exemplo next"
                                        class="ClassImgNext"
                                        modo={modo} />
                            </div>
                            <div className='card'>
                                <h5>3º Passo</h5>
                                    <p className='cardP'>Compre e 
                                        <a href="#PortabilidadeAtivarChip">ative um Chip da Oi</a>.
                                        Depois, envie um SMS pra
                                        <strong> 27531 </strong> 
                                        do seu Oi com a palavra PORTAR junto com o DDD e o seu número atual.
                                    </p>
                                    <Img
                                        src="/static/assetsv5/img/portabilidade/passo3.png"
                                        width="162px"
                                        height="266px"
                                        alt="Compdonente Img exemplo next"
                                        title="Componente Img exemplo next"
                                        class="ClassImgNext"
                                        modo={modo} />
                            </div>
                   
                    
             </amp-carousel>

             </div>
        </div>
          <style jsx>{`

                .carouselPortabilidade  {
                    background-color:red;
                    max-width: 68rem;
                    margin: 0px auto;
                    padding: 0px 1.25rem;
                }
                .contentCard{
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                    grid-gap: 20px;
                }
                .card{
                    border: 0.0625rem solid rgb(234, 234, 234);
                    height: 28.4375rem;
                }
                .card h5{
                    text-align: start;
                    margin-left: 10px;
                    
                }
                .cardP{
                    font-size: 0.9375rem;
                    color: rgb(144, 144, 144);
                    line-height: 1.6;
                    margin-left: 10px;
                    text-align: justify;
                    margin-right: 10px;
                }
                .cardP a{
                    color:rgb(144, 144, 144);
                    text-decoration: underline;
                }
                
                .contentSession2{
                    text-align:center;
                    margin-left: auto;
                    margin-right: auto;
                }
                .contentSession2 h2{
                    font-size: 2.5rem;
                    margin-top: 4.6875rem;
                    font-weight: 600;
                    line-height: 1;
                }
                .contentSession2P{
                    line-height: 1.5;
                    color:rgb(144, 144, 144);
                    font-size: 1.5rem;
                    margin-top: 1.5625rem;
                    margin-bottom: 2.5rem;
                }
                .selectPortabilidade{
                    display:flex;
                    justify-content: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                }
                .selectPortabilidade #Pre-Pago{
                    margin:0px 2.5rem 0px 0px;
                    background:
                    rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                    border-bottom: 2px solid rgb(216, 36, 130);
                    color:rgb(216, 36, 130);
                }
                .carouselPortabilidade{
                    background:
                    rgba(255, 255, 255, 0.2) none repeat scroll 0% 0%;
                    color:rgb(34, 34, 34);
                    display: block;
                    margin-bottom: 0.3125rem;
                    padding-top: 1.875rem;
                    position: relative;
                    width: 100%;
                }

          `}</style>
        </>
    )
}

export default session2