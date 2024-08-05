import React, { Fragment } from "react"
import Img from '../../../atoms/atImg/index.js'

const headerTitulo = props => {
    return (
        <Fragment>
            Este componente não esta sendo usado.<br/>
            Confirmar para apagar o arquivo.<br/>
            <section className="grid sc-kgoBCf gxeMNU">
                <section className="cvvc-header sc-kgoBCf fZMEGE">
                    <div className="header sc-hEsumM esFDck sc-jTzLTM jESKTj">
                        <div className="no-wrap sc-hMqMXs eTUJsy">
                            <div className="col sc-jTzLTM ljVTrK" data-context="header_logo">
                                <div className="no-wrap sc-hMqMXs fVnwlh"><a className="sc-bwzfXH iaXBsB"
                                    href="https://www.vvcestudio.com.br/meuvvc/" font-size="0.875rem"
                                    width="100%"><span className="logo-menu"><svg width="220px" height="44px"
                                        viewBox="0 0 211 44" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <linearGradient x1="50%" y1="-0.0857926843%" x2="50%"
                                                y2="117.097942%" id="linearGradient-1">
                                                <stop stop-color="#EA288C" offset="0%"></stop>
                                                <stop stop-color="#FF6D00" offset="69.782019%"></stop>
                                                <stop stop-color="#FFFF00" offset="100%"></stop>
                                            </linearGradient>
                                            <path
                                                d="M18.5993219,7.01901167 L18.9460395,6.74482538 C39.4859069,-9.93809451 43.417212,21.496557 41.6071884,37.4019084 C39.1336733,59.131384 -18.9423172,36.2287646 18.5993219,7.01901167 Z M19.1646616,30.313952 C17.8293362,30.313952 17.0902423,28.9452093 17.0902423,27.5563368 C17.0902423,26.1698896 17.8293362,24.8392237 19.1646616,24.8392237 C20.4953708,24.8392237 21.2329259,26.1698896 21.2329259,27.5563368 C21.2329259,28.9452093 20.4953708,30.313952 19.1646616,30.313952 Z M19.1646616,22.3888905 C16.2527483,22.3888905 14.3164131,24.6888568 14.3164131,27.5733137 C14.3164131,30.4601959 16.2527483,32.757737 19.1646616,32.757737 C22.0688811,32.757737 24.0031106,30.4601959 24.0031106,27.5733137 C24.0031106,24.6888568 22.0688811,22.3888905 19.1646616,22.3888905 Z M27.0616117,22.3945494 C26.0844949,22.3945494 25.2886286,24.7155348 25.2886286,27.5781643 C25.2886286,30.4416022 26.0844949,32.7610515 27.0616117,32.7610515 C28.0393763,32.7610515 28.8318411,30.4416022 28.8318411,27.5781643 C28.8318411,24.7155348 28.0393763,22.3945494 27.0616117,22.3945494 Z M27.0392591,21.1083468 C28.001879,21.1083468 28.7777413,20.3298345 28.7777413,19.3710436 C28.7777413,18.4138696 28.001879,17.6361656 27.0392591,17.6361656 C26.0804455,17.6361656 25.3030444,18.4138696 25.3030444,19.3710436 C25.3030444,20.3298345 26.0804455,21.1083468 27.0392591,21.1083468 Z"
                                                id="path-2"></path>
                                        </defs>
                                        <g id="Home---MVP-1" stroke="none" stroke-width="1" fill="none"
                                            fill-rule="evenodd">
                                            <g id="Home---novos-ajustess"
                                                transform="translate(-104.000000, -26.000000)">
                                                <g id="Header/Deslogado"
                                                    transform="translate(0.000000, -2.000000)">
                                                    <g id="Header">
                                                        <g id="Logo-Header"
                                                            transform="translate(98.000000, 26.000000)">
                                                            <path
                                                                d="M66.832,16.488 L62.344,7.2 L59.776,7.2 L59.776,24 L62.32,24 L62.32,12.336 L65.776,19.488 L67.888,19.488 L71.344,12.336 L71.344,24 L73.888,24 L73.888,7.2 L71.32,7.2 L66.832,16.488 Z M86.032,9.744 L86.032,7.2 L77.08,7.2 L77.08,9.744 L80.272,9.744 L80.272,21.456 L77.08,21.456 L77.08,24 L86.032,24 L86.032,21.456 L82.84,21.456 L82.84,9.744 L86.032,9.744 Z M101.272,7.2 L98.704,7.2 L98.704,19.248 L91.792,7.2 L89.224,7.2 L89.224,24 L91.792,24 L91.792,11.952 L98.704,24 L101.272,24 L101.272,7.2 Z M114.304,14.256 L107.392,14.256 L107.392,7.2 L104.824,7.2 L104.824,24 L107.392,24 L107.392,16.8 L114.304,16.8 L114.304,24 L116.872,24 L116.872,7.2 L114.304,7.2 L114.304,14.256 Z M123.712,17.568 L128.368,17.568 L126.04,10.896 L123.712,17.568 Z M130.6,24 L129.184,19.944 L122.896,19.944 L121.48,24 L118.84,24 L124.72,7.2 L127.36,7.2 L133.24,24 L130.6,24 Z M139.96,18.312 L139.96,12.888 C139.96,9.264 142.384,6.96 145.984,6.96 C149.584,6.96 152.008,9.264 152.008,12.888 L152.008,18.312 C152.008,21.936 149.584,24.24 145.984,24.24 C142.384,24.24 139.96,21.936 139.96,18.312 Z M149.44,18.312 L149.44,12.888 C149.44,10.536 147.664,9.504 145.984,9.504 C144.304,9.504 142.528,10.536 142.528,12.888 L142.528,18.312 C142.528,20.664 144.304,21.696 145.984,21.696 C147.664,21.696 149.44,20.664 149.44,18.312 Z M163.648,9.744 L163.648,7.2 L154.696,7.2 L154.696,9.744 L157.888,9.744 L157.888,21.456 L154.696,21.456 L154.696,24 L163.648,24 L163.648,21.456 L160.456,21.456 L160.456,9.744 L163.648,9.744 Z"
                                                                id="meuvvc" fill="#222222"></path><text
                                                                    id="Autoatendimento-fáci"
                                                                    font-family="OiTextLight, Simplon, simplon_bplight, Simplon, Simplon"
                                                                    font-size="12" font-weight="300"
                                                                    fill="#222222">
                                                                <tspan x="60.34" y="43">Autoatendimento
                                                                                fácil e rápido</tspan>
                                                            </text>
                                                            <g id="📍-Logo">
                                                                <mask id="mask-3" fill="white">
                                                                    <use href="# "></use>
                                                                </mask>
                                                                <use id="Logo-Oi"
                                                                    fill="url(#linearGradient-1)"
                                                                    href="#path-2"></use>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></span></a><span className="open-menu"><button
                                        className="sc-bdVaJa lbySAP" font-size="0.875rem" width="100%"><svg
                                            fill="#d82482" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                        </svg></button></span><span className="logo">Minha VVC</span></div>
                            </div>
                            <div className="col sc-jTzLTM jCoJqy">
                                <div className="Row sc-hMqMXs jXczpZ" data-context="header_login-area">
                                    <div className="cadastre-se sc-jTzLTM ovFZA"><a className="sc-bwzfXH iaXBsB"
                                        href="https://minha.vvcestudio.com.br/minhavvc/cadastro/#/cadastro/cpf/"
                                        font-size="0.875rem" width="100%">Cadastre-se agora</a></div>
                                    <div className="mobile sc-jTzLTM imJzZn"><a className="cadastrar sc-bwzfXH iaXBsB"
                                        href="https://minha.vvcestudio.com.br/minhavvc/cadastro/#/cadastro/cpf/"
                                        font-size="0.875rem" width="100%">Cadastrar</a><button
                                            className="btn-entrar sc-cIShpX bcLPTo sc-bdVaJa iDEmSK"
                                            font-size="0.875rem" width="100%">Entrar</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <style jsx>{`
            /* sc-component-id: sc-jTzLTM */

            

            

            

            .jESKTj {
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex: 1 1 0;
                -ms-flex: 1 1 0;
                flex: 1 1 0;
                padding: 0 1rem;
                position: relative;
                max-width: none;
            }

            @media only screen and (max-width:1023px) {
                .jESKTj {
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                }
            }

            .ljVTrK {
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex: 1 1 0;
                -ms-flex: 1 1 0;
                flex: 1 1 0;
                -webkit-box-flex: 0.75;
                -webkit-flex-grow: 0.75;
                -ms-flex-positive: 0.75;
                flex-grow: 0.75;
                position: relative;
                max-width: none;
            }

            @media only screen and (max-width:1023px) {
                .ljVTrK {
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                }
            }

            .jCoJqy {
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex: 1 1 0;
                -ms-flex: 1 1 0;
                flex: 1 1 0;
                -webkit-box-flex: 0.25;
                -webkit-flex-grow: 0.25;
                -ms-flex-positive: 0.25;
                flex-grow: 0.25;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                position: relative;
                max-width: none;
            }

            @media only screen and (max-width:1023px) {
                .jCoJqy {
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                }
            }

            .ovFZA {
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex: 1 1 0;
                -ms-flex: 1 1 0;
                flex: 1 1 0;
                margin: 0 30px 0 0;
                position: relative;
                max-width: none;
            }

            @media only screen and (max-width:1023px) {
                .ovFZA {
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                }
            }

            .imJzZn {
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex: 1 1 0;
                -ms-flex: 1 1 0;
                flex: 1 1 0;
                position: relative;
                max-width: none;
            }

            @media only screen and (max-width:1023px) {
                .imJzZn {
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                }
            }

            /* sc-component-id: sc-hMqMXs */

            .eTUJsy {
                padding: 1.55rem 0;
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
            }

            .fVnwlh {
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
            }

            .jXczpZ {
                -webkit-box-pack: end;
                -webkit-justify-content: flex-end;
                -ms-flex-pack: end;
                justify-content: flex-end;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
            }

            @media only screen and (max-width:1023px) {
                .jXczpZ {
                    -webkit-box-pack: initial;
                    -webkit-justify-content: initial;
                    -ms-flex-pack: initial;
                    justify-content: initial;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-align-items: initial;
                    -webkit-box-align: initial;
                    -ms-flex-align: initial;
                    align-items: initial;
                    -webkit-box-flex: 1;
                    -webkit-flex-grow: 1;
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                }
                .jXczpZ>.col, .jXczpZ .row {
                    -webkit-box-pack: initial !important;
                    -webkit-justify-content: initial !important;
                    -ms-flex-pack: initial !important;
                    justify-content: initial !important;
                    -webkit-align-items: initial !important;
                    -webkit-box-align: initial !important;
                    -ms-flex-align: initial !important;
                    align-items: initial !important;
                    -webkit-flex-basis: auto !important;
                    -ms-flex-preferred-size: auto !important;
                    flex-basis: auto !important;
                    -webkit-box-flex: 1 !important;
                    -webkit-flex-grow: 1 !important;
                    -ms-flex-positive: 1 !important;
                    flex-grow: 1 !important;
                }
            }

            /* sc-component-id: sc-bwzfXH */

            .iaXBsB {
                color: #d82482;
                background: transparent;
                -webkit-text-decoration: none;
                text-decoration: none;
                display: inline-block;
                border-radius: 0;
                text-align: left;
                padding: 0;
                border: 0;
                font: inherit;
                font-size: 0.875rem;
                font-weight: inherit;
                line-height: 1em;
                -webkit-transition: 0.3s ease;
                transition: 0.3s ease;
                white-space: nowrap;
            }

            .iaXBsB:hover {
                -webkit-text-decoration: underline;
                text-decoration: underline;
            }

            .iaXBsB:disabled, .iaXBsB.disabled {
                color: #909090;
            }

            .iaXBsB:hover {
                cursor: pointer;
            }

            .iaXBsB:focus {
                outline: none;
            }

            .iaXBsB:disabled, .iaXBsB.disabled {
                cursor: not-allowed;
                pointer-events: none;
            }
            /* sc-component-id: sc-kgoBCf */

            .gxeMNU {
                background: white;
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100%;
                -webkit-align-self: center;
                -ms-flex-item-align: center;
                align-self: center;
                -webkit-flex-basis: auto;
                -ms-flex-preferred-size: auto;
                flex-basis: auto;
            }

            .fZMEGE {
                background: white;
                position: relative;
                display: -webkit-box !important;
                display: -webkit-flex !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100%;
                -webkit-align-self: center;
                -ms-flex-item-align: center;
                align-self: center;
                -webkit-flex-basis: auto;
                -ms-flex-preferred-size: auto;
                flex-basis: auto;
                max-width: 1280px;
            }
            /* sc-component-id: sc-bdVaJa */
            .lbySAP {
                color: #d82482;
                background: transparent;
                -webkit-text-decoration: none;
                text-decoration: none;
                display: inline-block;
                border-radius: 0;
                text-align: left;
                padding: 0;
                border: 0;
                font: inherit;
                font-size: 0.875rem;
                font-weight: inherit;
                line-height: 1em;
                -webkit-transition: 0.3s ease;
                transition: 0.3s ease;
                white-space: nowrap;
            }

            .lbySAP:hover {
                -webkit-text-decoration: underline;
                text-decoration: underline;
            }

            .lbySAP:disabled,
            .lbySAP.disabled {
                color: #909090;
            }

            .lbySAP:hover {
                cursor: pointer;
            }

            .lbySAP:focus {
                outline: none;
            }

            .lbySAP:disabled,
            .lbySAP.disabled {
                cursor: not-allowed;
                pointer-events: none;
            }

            .iDEmSK {
                border-color: transparent;
                background: #d82482;
                color: white;
                border-width: 1px;
                text-transform: uppercase;
                -webkit-text-decoration: none;
                text-decoration: none;
                padding: 1rem 0;
                border-style: solid;
                text-align: center;
                display: block;
                width: 100%;
                border-radius: 2px;
                font: inherit;
                font-size: 0.875rem;
                font-weight: inherit;
                line-height: 1em;
                -webkit-transition: 0.3s ease;
                transition: 0.3s ease;
                white-space: nowrap;
            }

            .iDEmSK:hover {
                border-color: #d82482;
                background: white;
                color: #d82482;
            }

            .iDEmSK:disabled,
            .iDEmSK.disabled {
                opacity: 0.5;
            }

            .iDEmSK svg {
                -webkit-animation-name: spin;
                animation-name: spin;
                -webkit-animation-duration: 400ms;
                animation-duration: 400ms;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
            }

            @-webkit-keyframes spin {
                from {
                    -webkit-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                }

                to {
                    -webkit-transform: rotate(360deg);
                    -ms-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }

            @keyframes spin {
                from {
                    -webkit-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                }

                to {
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }

            .iDEmSK:hover {
                cursor: pointer;
            }

            .iDEmSK:focus {
                outline: none;
            }

            .iDEmSK:disabled,
            .iDEmSK.disabled {
                cursor: not-allowed;
                pointer-events: none;
            }

            /* sc-component-id: sc-hEsumM */

            .esFDck {
                -webkit-flex-basis: auto;
                -ms-flex-preferred-size: auto;
                flex-basis: auto;
            }

            .esFDck a:hover, .esFDck h3:hover, .esFDck button:hover {
                -webkit-text-decoration: none;
                text-decoration: none;
            }

            .esFDck span.logo {
                text-transform: uppercase;
                font-size: 1.25rem;
                color: #222;
                margin-left: 1rem;
            }

            .esFDck .open-menu {
                display: none;
            }

            .esFDck .logo {
                display: none;
            }

            .esFDck .cadastrar {
                display: none !important;
            }

            .esFDck .cadastre-se a {
                text-align: right;
            }

            @media (max-width:1023px) {
                .esFDck .logo {
                    font-family: SimplonHeadline;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                }
                .esFDck .cvvc-header-menu {
                    display: none;
                }
                .esFDck .logo-menu {
                    display: none;
                }
                .esFDck .open-menu {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                }
                .esFDck .no-wrap>.col:first-child {
                    -webkit-flex-basis: 0 !important;
                    -ms-flex-preferred-size: 0 !important;
                    flex-basis: 0 !important;
                }
                .esFDck .mobile {
                    position: absolute;
                    right: 0;
                    -webkit-flex-direction: row;
                    -ms-flex-direction: row;
                    flex-direction: row;
                }
                .esFDck .mobile .cadastrar {
                    -webkit-align-self: center;
                    -ms-flex-item-align: center;
                    align-self: center;
                }
                .esFDck .cadastrar {
                    margin-right: 20px;
                    display: block !important;
                }
                .esFDck .cadastre-se {
                    display: none !important;
                }
                .esFDck .btn-entrar {
                    -webkit-align-self: flex-end;
                    -ms-flex-item-align: end;
                    align-self: flex-end;
                }
            }
            /* sc-component-id: sc-cIShpX */

            @media (max-width:1023px) {
                .bcLPTo {
                    font-size: 0.75rem !important;
                    padding: 7px 12px 7px 12px !important;
                    margin-bottom: -2px;
                }
            }
            `}</style>
        </Fragment>
    )
}

export default headerTitulo