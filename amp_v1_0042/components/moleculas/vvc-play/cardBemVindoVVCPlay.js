import React from 'react'
import BtLink from '../../atoms/atBtLink/index'

const cardBemVindo = props => {
    return (
        <>
            <div className="container-bem-vindo">
                <div className="bem-vindo">Bem-vindo ao</div>
                <div className="titulo">VVC PLAY</div>
                <div className="texto-explicativo">
                    Veja online mais de 30 mil títulos de filmes, séries, esportes,
                    shows, desenhos e muito mais. Você vai ter acesso onde você quiser
                    a conteúdos como Fox+, HBO GO e ESPN.
                    </div>
                {/* TODO: link botao experimente por 30 dias grátis, ALT imagem */}
                {/* <BtLink href="https://www.vvcestudio.com.br" value="Experimente 30 dias grátis" estilo="amarelo3" /> */}
                <a className="amarelo3" href="https://www.vvcestudio.com.br">Experimente 30 dias grátis</a>
                <div className="texto-explicativo">Já é assinante? <a className="link" href="" >Comece a assistir!</a></div>
            </div>
            <style jsx>{`
            .container-bem-vindo {
                position: absolute;
                top: 231px;
                padding: 0;
            }
            .bem-vindo {
                width: 153px;
                font-family: SimplonBP-Regular;
                font-size: 24px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.57px;
                color: #fff;
            }
            .titulo {
                height: 60px;
                font-family: SimplonBP-Regular;
                font-size: 60px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 1.43px;
                color: #fff;
            }
            .texto-explicativo {
                width: 326px;
                font-family: SimplonBP-Regular;
                font-size: 15px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.47;
                letter-spacing: normal;
                color: #a2a2a2;
                margin-top : 19px;
                margin-bottom: 50px;
            }
            .botao {
                width: 237px;
                height: 56px;
                border-radius: 3px;
                box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
                background-color: var(--primary);
                margin-top: 50px;
            }
            .link {
                color: #fff;
                text-decoration: none;
                font-family: SimplonBP-Regular;
                font-weight: bold;
            }
            .amarelo3 {
                width: 237px;
                align-text: center;
                border-radius: 3px;
                box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
                transition-duration: 1s;
                background-color: #ffd700;
                border: solid 2px #ffd700;
                border-radius: .28571429rem;
                color: #222;
                display: block;
                text-align: center;
                width: fit-content;
                text-decoration: none;
                cursor: pointer;
                outline: 0;
                margin: 0;
                padding: 20px 20px;
                box-sizing: border-box;
                font-family: Simplon-Medium;
                font-size: 1.14285714rem;
                font-style: normal;
                font-weight: 600;
            }
            @media(max-width: 520px) {
                .container-bem-vindo {
                    width: 260px;
                    margin: 0;
                    left: 12%;
                }
                .bem-vindo {
                    width: 260px;
                }
                .texto-explicativo {
                    width: 260px;
                    heigth: 120px;
                    word-wrap:  normal;
                    margin-bottom: 25px;
                }
                .link {
                    font-family: SimplonBP-Regular;
                }
                .titulo{
                    font-family: SimplonBP-Regular;
                }
                .amarelo3 {
                    padding: 15px 10px;
                }
            }
            `}
            </style>
        </>
    )
}

export default cardBemVindo
