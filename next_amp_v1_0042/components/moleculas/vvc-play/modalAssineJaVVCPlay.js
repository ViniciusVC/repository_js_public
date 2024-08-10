import React, { useState } from 'react'
import BtLink from '../../atoms/atBtLink/index'
import Img from '../../atoms/atImg'

const modalAssineJavvcplay = props => {
    var modo = "html";
    if (props.modo != undefined) { modo = props.modo };

    function fechaAlertaErro() {
        document.getElementById("divAlertaErro").style.display = "none";
    }

    function chamaBackend(params) {
        let isClienteObject = document.getElementsByName('isCliente')
        let isCliente
        for (let item of isClienteObject) {
            if (item.checked) {
                isCliente = item.value
            }
        }
        if (isCliente === 'true') {
            window.location.href = 'https://apimhml.vvc.net.br/oic?state=statevvcplayalone&plano=1&client_id=8d707166-93f3-4c9f-a24e-c981aecbca58&response_type=code&scope=openid customer_info oob&redirect_uri=http://www.vvcestudio.com.br/vvc-play'
        } else {
            // https://carrinho.servicos.vvcestudio.com.br/cadastroAlone
            // https://projeto-6.homolog.infra:20000/cadastroAlone
            window.location.href = "https://187.31.162.66:20000/cadastroAlone?plano=2"
        }
    }

    return (
        <>
            <div className="modal" id="divAlertaErro">
                <div className="modal-content">

                    <img className="logo-oi" src="/static/assetsv5/img/logotipo-vvc-preto.png" />
                    <img className="close" onClick={fechaAlertaErro} src="/static/assetsv5/img/icone-fechar.png" title="Fechar" />

                    <div className="tudo-bem">Tudo bem?</div>
                    <div className="eh-cliente">Você já é cliente Oi?</div>
                    <ul className="container-radiobutton">
                        <li className="contorno-radiobutton">
                            <input
                                className="radio"
                                type="radio"
                                name="isCliente"
                                value={true}
                                id="cliente"
                            />
                            <label htmlFor="cliente">Sim, sou cliente Oi</label>
                        </li>
                        <li className="contorno-radiobutton">
                            <input
                                className="radio"
                                type="radio"
                                name="isCliente"
                                value={false}
                                id="notcliente"
                            />
                            <label htmlFor="notcliente">Ainda não sou cliente</label>
                        </li>
                    </ul>
                    <span >
                        {/* https://carrinho.servicos.vvcestudio.com.br/cadastroAlone */}
                        {/* https://projeto-6.homolog.infra:20000/cadastroAlone */}
                        {/* <BtLink onClick={chamaBackend} value="Continuar" estilo="amarelo3" /> */}
                        <button className="botao-continuar" onClick={chamaBackend}>
                            Continuar
                        </button>
                    </span>
                </div>
            </div>
            <style jsx>{`
                .divAlertaErro{
                    padding: 1.2rem;
                    padding-top: 5rem;
                    margin: 1.2rem;
                    background-color: #ffffff;
                    position : absolute;
                    top: 180px;
                    -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.60);
                    -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.60);
                    box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.60);
                    display : none;
                    animation: abreJanela 1s ease 0s 1 normal none running;
                }
                @keyframes abreJanela{
                    0% {
                        top: 100px;
                        opacity: 0;
                    }
                    100% {
                        top: 180px;
                        opacity: 1;
                    }
                }
                .textAlertaErro{
                    font-family: SimplonBP-Regular,Arial;
                    font-size: 20px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;fechaAlertaErro
                    line-height: 1;
                    letter-spacing: normal;
                    color: #303030;
                }
                .modal {
                    display: none;                          /* Hidden by default */
                    position: fixed;                        /* Stay in place */
                    z-index: 1;                             /* Sit on top */
                    padding-top: 100px;                     /* Location of the box */
                    left: 0;
                    top: 0;
                    width: 100%;                            /* Full width */
                    height: 100%;                           /* Full height */
                    overflow: auto;                         /* Enable scroll if needed */
                    background-color: rgb(0,0,0);           /* Fallback color */
                    background-color: rgba(0,0,0,0.4);      /* Black w/ opacity */
                  }
                  
                /* Modal Content */
                .modal-content {
                    background-color: #fefefe;
                    margin: 280px auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: min-content;
                    heigth: 329px;
                }
                .tudo-bem {
                    font-family: SimplonBP-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: -0.5px;
                    color: #333237;
                }
                .eh-cliente {
                    font-family: SimplonBP-Regular;
                    font-size: 26px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.08;
                    letter-spacing: -1px;
                    color: #333237;
                    margin-bottom: 25px;
                }
                .logo-oi {
                     margin-bottom: 10px;
                }
                .botao-continuar {
                    transition-duration: 1s;
                    background-color: #ffd700;
                    border-radius: .28571429rem;
                    color: #222;
                    display: block;
                    font-size: 1.14285714rem;
                    font-weight: 600;
                    height: 3.42857143rem;
                    text-align: center;
                    width: 100%;
                    text-decoration: none;
                    cursor: pointer;
                    font-family: SimplonBP-Regular,Arial;
                    outline: 0;
                    margin: 0;
                    padding: .85714286rem 20px;
                    box-sizing: border-box;
                    font-style: normal;
                    border: solid 2px #ffd700;
                }
                .container-radiobutton {
                    list-style: none;
                    padding: 0;
                }
                .container-radiobutton input:checked + label {
                    outline: 1px solid #a3a3a3;
                }
                .contorno-radiobutton {
                    border: 1px solid #f1f1f1;
                    border-radius: 4px;
                    box-sizing: border-box;
                    position: relative;
                    width: 240px;
                    height: 49px;
                    display: flex;
                    align-items: center;
                    margin: 10px;
                    padding-left: 20px;
                }
                .contorno-radiobutton label {
                    bottom: 1px;
                    cursor: pointer;
                    font-size: 14px;
                    align-items: center;
                    display: flex;
                    left: 1px;
                    position: absolute;
                    right: 1px;
                    top: 1px;
                    padding-left: 50px;
                    color: #000;
                }
                .contorno-radiobutton:active label {
                }
                input {
                    height: 18px;
                    width: 18px;
                }
                .hidden {
                    display: none;
                }
                /* The Close Button */
                .close {
                    color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }
                
                .close:hover,
                .close:focus {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default modalAssineJavvcplay
