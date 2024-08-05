import React from "react";
import HomeCard1 from "./moHomeCard1.js"
import * as Util from '../../../controller/util.js';
//import Div from "../../atoms/atDiv/index.js"

const moHomeSession1 = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <div className="moHomeSession1">
            <div>
                ATENDIMENTO<br/>
                OI! COMO PODEMOS<br/>
                TE AJUDAR?<br/>
            </div>
            <div className="moHomeSession1Cards">
            <HomeCard1
                icone='card1'
                titulo='Pagar minha conta'
                texto='Peça o Código de Barras e faça o pagamento rapidamente.'
                link='https://www.vvcestudio.com.br/meuvvc/codigo-de-barras/'
                Resumo='Resumo1'/>
            <HomeCard1
                icone='card2'
                titulo='Avisar Pagamento'
                texto='Religue o serviço bloqueado após pagar a conta atrasada.'
                link='https://www.vvcestudio.com.br/meuvvc/religar-servico/'
                Resumo='Resumo2'/>
            <HomeCard1    
                icone='card3'
                titulo='Estou sem sinal'
                texto='Resolva problemas técnicos de banda larga, fixo e TV pelo app'
                link='#'
                Resumo='Resumo3'/>
            </div>
            <style jsx>{`
            .moHomeSession1Cards{
                display: flex;
                justify-content: space-between;
                width: 700px;
            }
            .moHomeSession1{
                padding:40px;
            }

             @media only screen and (min-width : 1000px) {
                .moHomeSession1{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
            }
            @media only screen and (max-width : 1000px) {
                .moHomeSession1{
                    width:100%;
                    display:block;                    
                }
            }

        `}</style>
        </div>
    )
}

export default moHomeSession1