import React from 'react'

const dadosBotoes = [
    {
        nome: '+ FIBRA',
        link: 'https://www.vvcestudio.com.br/internet/'
    },
    {
        nome: '+ PÓS',
        link: 'https://www.vvcestudio.com.br/celular/'
    },
    {
        nome: '+ TV',
        link: 'https://www.vvcestudio.com.br/tv-hd/'
    },
]

const ListaBotoesUpgrade = props => {
    return (
        <>
            <div className="container">
                <button className="botao-vvc-play">
                    <span className="botao-texto-vvc-play">VVC Play</span>
                </button>
                {dadosBotoes.map((botao, index) => (
                    <button className="botao" key={index}>
                        <span className="botao-texto">{botao.nome}</span>
                    </button>
                ))}
            </div>
            <style jsx>{`
                .container {
                    position: absolute;
                    top: 647px;
                }            
                .botao {
                    width: 70px;
                    height: 26px;
                    border-radius: 13px;
                    color: #fff;
                    border: solid 0.5px #404040;
                    background-color: #242326;
                    margin: 0 5px;
                }
                .botao-vvc-play{
                    width: 70px;
                    height: 26px;
                    border-radius: 13px;
                    background-color: #fff;
                    margin-right: 5px;
                }
                .botao-texto {
                    width: 44px;
                    height: 12px;
                    opacity: 0.6;
                    font-family: SimplonBP-Regular;
                    font-size: 12px;
                    font-weight: bold;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: 0.29px;
                    color: #fff;
                    border-color: #fff;
                }
                .botao-texto-vvc-play {
                    width: 43px;
                    height: 12px;
                    font-family: SimplonBP-Regular;
                    font-size: 12px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: 0.29px;
                    color: #333237;
                }
                @media(max-width: 520px) {
                    .container {
                        left: 10%; 
                    }           
                    .botao {
                        margin: 0;
                    } 
                    .botao-vvc-play {
                        margin-right: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default ListaBotoesUpgrade