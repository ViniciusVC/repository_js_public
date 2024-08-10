import React from 'react'
import Img from '../../atoms/atImg/index'
import LinhaDivisao from '../../../components/moleculas/vvc-play/linhaDivisaoLinks'
import * as Util from '../../../controller/util.js'

const Linksvvcplay = props => {
    var modo = Util.validaProps(props.modo,"html")
    return (
        <>
            <div className="container-links">
                <LinhaDivisao />
                <div className="container-link">
                    <span className="imagem-link">
                        <Img
                            src="/static/assetsv5/img/icone-download.png"
                            width="25px"
                            height="24.2px"
                            alt="Download"
                            class="Download"
                            modo={modo}
                        />
                    </span>
                    <span className="texto-link">Aqui você pode acessar as <a className="link" href="">informações legais</a> das ofertas do VVC Play.</span>
                </div>
                <LinhaDivisao />
                <div className="container-link">
                    <span className="imagem-link">
                        <Img
                            src="/static/assetsv5/img/icone-faq.png"
                            width="25px"
                            height="24.2px"
                            alt="Faq"
                            className="Faq"
                            modo={modo}
                        />
                    </span>
                    <span className="texto-link">Dúvidas? Para mais informações, <a className="link" href="">clique aqui</a>.</span>
                </div>
                <LinhaDivisao />
            </div>
            <style jsx>{`
            .container-links {
                width: 1170px;
                align-items: center;
                justify-items: center;
                margin: 5px auto;
            }
            .container-link {
                display: flex;
                margin: 5px auto;
            }
            .imagem-link {
                margin: 19px 0 18px;
            }
            .texto-link {
                width: 693px;
                height: 22px;
                font-family: SimplonBP-Regular;
                font-size: 15px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.47;
                letter-spacing: normal;
                color: #a2a2a2;
                margin: 16px 0 21px 18px;
            }
            .link {
                font-weight: 500;
                color: #00baf7;
                text-decoration: none;
            }
            @media (max-width: 520px) {
                .container-links {
                    margin: 0;
                }
                .container-link {
                    heigth: 22px;
                    margin: 15px auto;
                }
                .texto-link {
                    width: 280px;
                    margin: 5px 0;
                }
                .imagem-link {
                    margin: 16px 12px 10px 18px;
                }
            }
            `}</style>
        </>
    )
}

export default Linksvvcplay