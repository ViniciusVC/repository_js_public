import React from 'react'
import Img from '../../../components/atoms/atImg/index'
import * as Util from '../../../controller/util.js'

const CardCapitaMarvel = props => {
    var modo = Util.validaProps(props.modo, "html")
    return (
        <>
            <div className="container-capita-marvel-descricao">
                <div className="titulo">CAPITÃ MARVEL</div>
                <div className="texto-explicativo">
                    Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.
                </div>
                <div className="texto-explicativo">Gênero: Ação, Aventura, Fantasia, Ficção Científica</div>
                <div className="vvc-pra-alugar">
                    <Img
                        src="/static/assetsv5/img/vvc-play/vvc-logo-branco.png"
                        width="25px"
                        height="24.2px"
                        alt="Oi"
                        title="Oi"
                        modo={modo} />
                    <div className="vvc-pra-alugar-texto">
                        Oi pra alugar
                    </div>
                </div>
            </div>
            <style jsx>{`
            .container-capita-marvel-descricao {
                width: 324px;
                height: 156.2px;
                position: relative;
                float: right;
                top: -570px;
            }
            @media(max-width:520px) {
                .container-capita-marvel-descricao{
                    display: none;
                }
            }                
            .titulo {
                height: 16px;
                font-family: SimplonBP-Regular, sans-serif;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.38px;
                color: #f5f5f5;
                
            }
            .texto-explicativo {
                width: 324px;
                height: 48px;
                font-family: SimplonBP-Regular;
                font-size: 13px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.23;
                letter-spacing: normal;
                color: #797979;
                margin-top: 16px;
            }
            .vvc-pra-alugar {
                display: flex;
                align-items: center;
            }
            .vvc-pra-alugar-texto {
                font-family: SimplonBP-Regular;
                font-size: 12px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.29px;
                color: #dbdbdb;
                margin-left: 10px;
            }
            `}</style>
        </>
    )
}

export default CardCapitaMarvel