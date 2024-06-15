import React from "react";
import BtLink from '../../atoms/atBtLink/index.js';
import Img from "../../atoms/atImg/index.js"
import * as Util from '../../../controller/util.js';
//import Div from "../../atoms/atDiv/index.js"


const moHomeSession2 = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <div className="moHomeSession2">
            <div>
                <Img
                        src="https://www.vvc.com.br/minha-oi/assets/images/notebook-internet.jpg"
                        width="600px"
                        height="400px"
                        alt="Compdonente Img exemplo next"
                        title="Componente Img exemplo next"
                        class="ClassImgNext"
                        modo={modo} />
            </div>
            <div>
                <h2>INTERNET DA OI</h2>
                <div>
                    <strong>PEÇA SUA INTERNET</strong> OU AUMENTE A VELOCIDADE*
                </div>
                <BtLink href="http://vvc.com.br/lp/clientebl-aumente-bandalarga?origem=minhavvc30_prelogin&pagina=clientebl-aumente-bandalarga" value="Veja a disponibilidade" estilo="amarelo1"/>
                <div>*Sujeito a viabilidade de internet na sua região.</div>
            </div>
            <style jsx>{`
            .moHomeSession2{
                padding:40px;
            }

             @media only screen and (min-width : 1000px) {
                .moHomeSession2{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
            }
            @media only screen and (max-width : 1000px) {
                .moHomeSession2{
                    width:100%;
                    display:block;                    
                }
            }

        `}</style>
        </div>
    )
}

export default moHomeSession2