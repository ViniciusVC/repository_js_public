import React from 'react'
import Img from '../../atoms/atImg/index.js'
import Price from '../../atoms/atPrice/index'
import Modal from '../../moleculas/vvc-play/modalAssineJavvcplay'
import LinhaDivisao from './linhaDivisaoCards.js'
import Slider from 'react-slick'
import * as Util from '../../../controller/util.js'

function enviar() {
    document.getElementById("divAlertaErro").style.display = "block";
}

const dadosPlanos = [
    {
        tipo: 'BÁSICO',
        quantidadePlays: '5',
        preco: '9',
        canais1: [{
            imagem: 'colecao-vvc.png',
            texto: 'Coleção VVC',
            width: 46,
            height: 46
        }],
        canais2: [],
        canais3: []
    },
    {
        tipo: 'AVANÇADO',
        quantidadePlays: '35',
        preco: '29',
        canais1: [{
            imagem: 'colecao-vvc.png',
            texto: 'Coleção VVC',
            width: 46,
            height: 46
        }],
        canais2: [
            {
                imagem: 'watch-espn.png',
                texto: 'WatchESPN',
                width: 103,
                height: 46
            },
            {
                imagem: 'paramount+.png',
                texto: 'Paramount +',
                width: 103,
                height: 46
            },
        ],
        canais3: []
    },
    {
        tipo: 'TOP',
        quantidadePlays: '85',
        preco: '59',
        canais1: [
            {
                imagem: 'esporte-interativo-plus.png',
                texto: 'Esporte Interativo Plus',
                width: 72,
                height: 46
            }, {
                imagem: 'noggin.png',
                texto: 'Noggin',
                width: 63,
                height: 46
            },
            {
                imagem: 'cartoon-network-ja.png',
                texto: 'Cartoon Network Já',
                width: 72,
                height: 46
            },
            {
                imagem: 'discovery-kids-on.png',
                texto: 'Discovery Kids On',
                width: 46,
                height: 46
            }
        ],
        canais2: [{
            imagem: 'watch-espn.png',
            texto: 'WatchESPN',
            width: 103,
            height: 46
        },
        {
            imagem: 'colecao-vvc.png',
            texto: 'Coleção VVC',
            width: 46,
            height: 46
        },
        {
            imagem: 'paramount+.png',
            texto: 'Paramount +',
            width: 103,
            height: 46
        },],
        canais3: []
    }
]

var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    variableWidth: true,
    arrows: false,

    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
};

const CardPlanosvvcplay = props => {
    var modo = Util.validaProps(props.modo, "html")
    return (
        <>
            {modo === 'html' ?
                <>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </>
                : ''}
            <div className="container-planos">
                <Slider {...settings}>
                    {dadosPlanos.map(plano => (
                        <div className="planos-container" key={plano.tipo}>
                            <div className="plano-container">
                                <div className="plano">
                                    <div>PLANO</div>
                                    <div className="plano-tipo">{plano.tipo}</div>
                                    <LinhaDivisao />
                                    <div className="plano-texto-explicativo">Você tem direito a <span className="texto-destaque-plays">{plano.quantidadePlays} plays</span> e aos seguintes canais</div>
                                </div>
                                <div className="cards-planos">
                                    <div className="canais-imagens2">
                                        {plano.canais1.map(canal => (
                                            <span className="canal-imagem">
                                                <Img
                                                    src={`/static/assetsv5/img/vvc-play/${canal.imagem}`}
                                                    title={canal.texto}
                                                    alt={canal.texto}
                                                    width={canal.width}
                                                    height={canal.height}
                                                    modo={modo}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                    <div className="canais-imagens2">
                                        {plano.canais2.map(canal => (
                                            <span className="canal-imagem">
                                                <Img
                                                    src={`/static/assetsv5/img/vvc-play/${canal.imagem}`}
                                                    title={canal.texto}
                                                    alt={canal.texto}
                                                    width={canal.width}
                                                    height={canal.height}
                                                    modo={modo}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                    <div className="canais-imagens2">
                                        {plano.canais3.map(canal => (
                                            <span className="canal-imagem">
                                                <Img
                                                    src={`/static/assetsv5/img/vvc-play/${canal.imagem}`}
                                                    title={canal.texto}
                                                    alt={canal.texto}
                                                    width={canal.width}
                                                    height={canal.height}
                                                    modo={modo}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button className="botao-experimente">
                                    <span className="botao-experimente-texto">EXPERIMENTE 30 DIAS GRÁTIS</span>
                                </button>
                                <span className="preco">
                                    <Price divreal="R$" divvalor={plano.preco} divcents=",99" mes="/MÊS" formaPagamento="no cartão de crédito" modo="mtml" />
                                </span>
                                <span>
                                    <button className="botao-assine-ja" onClick={() => { enviar() }} >Assine já</button>
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {modo === 'html' ? <Modal modo={modo} /> : ''}
            <style jsx>{`
            .container-planos {
                display: block;
                position: relative;
                overflow: hidden;
                left: 50%;
                top: -200px;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
            @media(max-width: 520px) {
                .container-planos {
                    display: inline-block;
                    position: relative;
                    margin-top: 380px;
                    margin-left: 0px;
                    width: 320px;
                    padding: 20px 0px 0px 0px;
                }
                .planos-container {
                    display: inline-block;
                    margin: 0 5px;
                }
                .container {
                    position: inherit;
                }
            }
            .planos-container {
                display: inline-block;
                margin: 0 auto;
                padding: 0 auto;
                justify-content: center;
                justify-items: center;
                aling-items: center;
            }
            .plano-container {
                width: 252px;
                height: 418px;
                border-radius: 6px;
                background-image: linear-gradient(to bottom, #413f45, rgba(36, 35, 38, 0));
                margin: 0 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 24px;
            }
            .plano {
                font-family: SimplonBP-Regular;
                font-size: 10px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 1.4px;
                text-align: center;
                align-items: center;
                color: #909090;
            }
            .cards-planos {
                margin: auto;
            }
            .plano-tipo {
                font-family: SimplonBP-Regular;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 2.25px;
                text-align: center;
                color: #f5f5f5;
                margin-bottom: 16px;

            }
            .plano-texto-explicativo {
                height: 26px;
                width: 150px;
                margin: 13.5px auto 5px;
                font-family: SimplonBP-Regular;
                font-size: 13px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #909090;
            }
            .canais-imagens2 {
                heigth: 56px;
                display: flex;
                justify-content: center;
                margin: 0;
            }
            .canal-imagem {
                margin: 0px;
            }
            .botao-experimente {
                border-radius: 3px;
                border-color: transparent;
                background-color: #dbdbdb;
                padding: 5px 10px;
		    position: relative;
            }
		.botao-experimente::after {
			content: '';
			width: 0;
			height: 0;
			display: block;
			position: absolute;
			left: calc(50% - 10px);
			border-top: 8px solid #dbdbdb;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: 5px solid transparent;
			bottom: -13px;
		}
            .botao-experimente-texto {
                font-family: SimplonBP-Bold, SimplonBP-Regular;
                font-size: 10px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.21px;
                text-align: center;
                color: #333237;
            }
            .texto-destaque-plays {
                font-weight: 500;
                color: #00baf7;
            }
            .preco {
                color: #fff;
            }
            .botao-assine-ja {
                transition-duration: 1s;
                background-color: #ffd700;
                border-radius: .28571429rem;
                color: #222;
                display: block;
                font-size: 1.14285714rem;
                font-weight: 600;
                height: 3.7rem;
                text-align: center;
                width: fit-content;
                text-decoration: none;
                border-bottom: solid 1px #dbdbdb;
                cursor: pointer;
                font-family: "SimplonBP-Regular",Arial;
                outline: 0;
                margin: 0;
                margin-top: 1.28571429rem;
                padding: .85714286rem 2.5rem;
                box-sizing: border-box;
                font-style: normal;
                border: solid 2px #ffd700;
            }
            `}</style>
        </>
    )
}

export default CardPlanosvvcplay
