import React from "react";
import BtLink from '../../atoms/atBtLink/index.js';
import Img from "../../atoms/atImg/index.js"
import * as Util from '../../../controller/util.js';
//import Div from "../../atoms/atDiv/index.js"

const moHomeSession3 = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <div className="moHomeSession3">
            <div>
                <div>
                    <h2>RECEBA A SUA CONTA
                        <strong>POR E-MAIL TODO MÊS</strong>
                    </h2>
                </div>
                <div>
                    Tenha mais praticidade na hora de pagar as contas.
                    Você é avisado sempre que a conta está disponível pra consulta e
                    pagamento e ainda ganha pontos pra trocar por passagens e descontos.
                </div>
                <BtLink href="https://www.vvcestudio.com.br/meuvvc/conta-online" value="Eu quero!" estilo="rosa-invetido"/>
            </div>
            <div>
                <Img
                        src="https://www.vvcestudio.com.br/meuvvc/assets/images/contaonline.png"
                        width="600px"
                        height="400px"
                        alt="Compdonente Img exemplo next"
                        title="Componente Img exemplo next"
                        class="ClassImgNext"
                        modo={modo} />
            </div>
            <style jsx>{`
            .moHomeSession3{
                padding:40px;
            }

             @media only screen and (min-width : 1000px) {
                .moHomeSession3{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
            }
            @media only screen and (max-width : 1000px) {
                .moHomeSession3{
                    width:100%;
                    display:block;                    
                }
            }

        `}</style>
        </div>
    )
}

export default moHomeSession3