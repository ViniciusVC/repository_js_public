import React from 'react'
import Icon from '../../../atoms/atIcon'

const HeaderMenu = props => {
    return (
        <section className="fZMEGE">
            <div>
                <nav className="jmPZmE">
                    <div className="ixAXz">
                        <a className="btn-menu sem-submenu iaXBsB" href="https://www.vvcestudio.com.br/meuvvc/">
                            INÍCIO
                        </a>
                    </div>
                    <div className="cMkdVA">
                        <a className="btn-menu sem-submenu iaXBsB" href="https://minha.vvcestudio.com.br/codigo-de-barras/">
                            CONTAS E PAGAMENTOS
                        </a>
                    </div>
                    <div className="ehRVxW">
                        <button className="btn-menu sem-submenu lbySAP">
                            MEUS PRODUTOS
                        </button>
                    </div>
                    <div className="bhQqYh">
                        <a className="btn-menu sem-submenu iaXBsB" href="https://www.vvcestudio.com.br/recarga/">  
                            RECARGA
                        </a>
                    </div>
                    <div className="efGrHD">
                        <a className="btn-menu tem-submenu iaXBsB" href="#">
                            AJUDA E SUPORTE
                            <span className="caret cgiFkg">
                            <Icon type="caret2" color="#D82482" />
                            </span>
                        </a>
                    <div className="submenu ">
                            <div className="Row sc-hMqMXs keDYPe">
                                <div className="col imJzZn">
                                    <h3>AJUDA</h3>
                                    <div>
                                        <a className="button-menu   iaXBsB"
                                        href="http://faq.vvcestudio.com.br/"  
                                         >
                                            Dúvidas frequentes
                                        </a>
                                    </div>
                                </div>
                                <div className="col imJzZn">
                                    <h3>ATENDIMENTO</h3>
                                    <div>
                                        <button className="button-menu lbySAP"  
                                         >Consulta de protocolo
                                        </button>
                                    </div>
                                    <div>
                                        <a className="button-menu iaXBsB"
                                        href="https://www.vvcestudio.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/"
                                           >
                                            Encontre sua loja
                                        </a>
                                    </div>
                                    <div>
                                        <a className="button-menu iaXBsB" target="_blank"
                                        href="https://www.vvcestudio.com.br/meuvvc/fale-com-a-oi/"
                                           >
                                            Telefones e postos
                                        </a>
                                    </div>
                                    <div>
                                        <button className="button-menu lbySAP"  
                                         >
                                            Consultar documentos
                                        </button>
                                    </div>
                                </div>
                                <div className="col imJzZn">
                                    <h3>SUPORTE TÉCNICO</h3>
                                    <div>
                                        <a className="button-menu iaXBsB"
                                        href="https://www.vvcestudio.com.br/app/tecnico-virtual/"
                                           >
                                            Técnico Virtual
                                        </a>
                                    </div>
                                    <div>
                                        <a className="button-menu iaXBsB"
                                        href="https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo/"
                                           >
                                            Acompanhamento de instalação Fixo
                                        </a>
                                    </div>
                                    <div>
                                        <a className="button-menu iaXBsB"
                                        href="https://minha.vvcestudio.com.br/religar-servico/"
                                           >Estou sem serviço
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nHnaK">
                        <a className="btn-menu  tem-submenu vantagens  iaXBsB" href="#">
                            + VANTAGENS
                            <span className="caret cgiFkg">
                                <Icon type="caret2" color="#D82482" />
                            </span>
                        </a>
                    <div className="submenu">
                    <div className="col imJzZn">
                        <div>
                            <a className="button-menu iaXBsB" href="https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-pontos/">
                                Oi Pontos
                            </a>
                        </div>
                        <div>
                            <a className="button-menu iaXBsB" target="_blank" href="https://oiwifi.com.br/">
                                Oi Wifi
                            </a>
                        </div>
                        <div>
                            <a className="button-menu   iaXBsB" href="https://www.vvcplay.tv/">
                                VVC Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <style jsx>{`
            .fZMEGE {
                background: white;
                position: relative;
                margin: 0 auto;
                max-width: 1280px;
                width: 100%;
            }

            .jmPZmE {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                padding: 0;
                margin: 0;
            }
                
            @media (max-width:1023px) {
            .jmPZmE {
                    display: none;
                }
            }
            /* sc-component-id: sc-hMqMXs */
            .keDYPe {
                position: relative;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
            }
            /* sc-component-id:   */
            .ixAXz {
            display: inline-block;
            position: relative;
            }
            
            .ixAXz .btn-menu {
            font-family: Simplon, sans-serif;
            border-top: white solid 2px;
            text-transform: uppercase;
            display: inline-block;
            font-weight: normal;
            margin: 0 28px;
            -webkit-transition: none;
            transition: none;
            padding: 16px 0;
            }
            
            .ixAXz .btn-menu:not(.active) {
            color: #222;
            }
            
            .ixAXz .btn-menu.active {
            border-bottom: #d82482 solid 2px;
            color: #d82482;
            font-weight: bold;
            padding-bottom: 14px;
            }
            
            .ixAXz .sem-submenu,
            .ixAXz .tem-submenu {
            text-align: center;
            }
            
            .ixAXz .sem-submenu:before,
            .ixAXz .tem-submenu:before {
            display: block;
            content: attr(data-item);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
            }
            
            .ixAXz:hover>.sem-submenu {
            color: #d82482;
            font-weight: bold;
            -webkit-text-decoration: none;
            text-decoration: none;
            }
            
            .ixAXz:hover>.tem-submenu {
            padding: 16px 27px 16px 27px;
            border: 1px solid #f5f5f5;
            border-top: #d82482 solid 2px;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
            color: #d82482;
            -webkit-text-decoration: none;
            text-decoration: none;
            background: #f5f5f5;
            position: relative;
            -webkit-transition: none;
            transition: none;
            border-bottom: 0;
            font-weight: bold;
            margin: 0;
            }
            
            .ixAXz:hover>.tem-submenu .caret svg {
            position: relative;
            opacity: 0;
            top: calc(50% - 4px);
            }
            
            .ixAXz:hover>.tem-submenu:after {
            background: #f5f5f5;
            position: absolute;
            z-index: 1000;
            height: 16px;
            bottom: -1px;
            width: 100%;
            content: "";
            left: 0;
            }
            
            .ixAXz .submenu {
            left: 0;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #f5f5f5;
            background: #f5f5f5;
            white-space: normal;
            position: absolute;
            display: none;
            width: 220px;
            }
            
            .ixAXz .submenu.w-auto {
            width: auto;
            }
            
            .ixAXz .submenu .row {
            width: 100%;
            }
            
            .ixAXz .submenu .col {
            margin: 1rem 0 12px 16px;
            padding-right: 16px;
            width: auto;
            }
            
            .ixAXz .submenu .col:not(:last-child) {
            border-right: lightgrey 2px solid;
            }
            
            .ixAXz .submenu .col h3 {
            margin-top: 4px;
            font-size: 15px;
            white-space: nowrap;
            }
            
            .ixAXz .submenu .col .button-menu,
            .ixAXz .submenu .col a {
            color: #222;
            margin: 0;
            font-size: 1rem;
            padding: 0;
            }
            
            .ixAXz .submenu .col .button-menu:last-child,
            .ixAXz .submenu .col a:last-child {
            margin-bottom: 8px;
            }
            
            .ixAXz .submenu .col .button-menu:hover,
            .ixAXz .submenu .col a:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
            color: #d82482;
            }
            
            .ixAXz .icon-subtitle .col {
            margin: 0;
            }
            
            .ixAXz .icon-subtitle img {
            width: 22px;
            }
            
            .ixAXz:hover>.submenu {
            pointer-events: auto;
            z-index: 999;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            }
            
            .ixAXz .vantagens~.submenu {
            width: 165px;
            }
            .cMkdVA .btn-menu {
                font-family: Simplon, sans-serif;
                border-top: white solid 2px;
                text-transform: uppercase;
                display: inline-block;
                font-weight: normal;
                margin: 0 28px;
                -webkit-transition: none;
                transition: none;
                padding: 16px 0;
                }
                
                .cMkdVA .btn-menu:not(.active) {
                color: #222;
                }
                
                .cMkdVA .btn-menu.active {
                border-bottom: #d82482 solid 2px;
                color: #d82482;
                font-weight: bold;
                padding-bottom: 14px;
                }
                .ehRVxW .btn-menu {
                    font-family: Simplon, sans-serif;
                    border-top: white solid 2px;
                    text-transform: uppercase;
                    display: inline-block;
                    font-weight: normal;
                    margin: 0 28px;
                    -webkit-transition: none;
                    transition: none;
                    padding: 16px 0;
                    }
                    
                    .ehRVxW .btn-menu:not(.active) {
                    color: #222;
                    }
                    
                    .ehRVxW .btn-menu.active {
                    border-bottom: #d82482 solid 2px;
                    color: #d82482;
                    font-weight: bold;
                    padding-bottom: 14px;
                    }
                    .bhQqYh .btn-menu {
                        font-family: Simplon, sans-serif;
                        border-top: white solid 2px;
                        text-transform: uppercase;
                        display: inline-block;
                        font-weight: normal;
                        margin: 0 28px;
                        -webkit-transition: none;
                        transition: none;
                        padding: 16px 0;
                        }
                        
                        .bhQqYh .btn-menu:not(.active) {
                        color: #222;
                        }
                        
                        .bhQqYh .btn-menu.active {
                        border-bottom: #d82482 solid 2px;
                        color: #d82482;
                        font-weight: bold;
                        padding-bottom: 14px;
         }
         .efGrHD .btn-menu {
            font-family: Simplon, sans-serif;
            border-top: white solid 2px;
            text-transform: uppercase;
            display: inline-block;
            font-weight: normal;
            margin: 0 28px;
            -webkit-transition: none;
            transition: none;
            padding: 16px 0;
            }
            
            .efGrHD .btn-menu:not(.active) {
            color: #222;
            }
            
            .efGrHD .btn-menu.active {
            border-bottom: #d82482 solid 2px;
            color: #d82482;
            font-weight: bold;
            padding-bottom: 14px;
        }
        .nHnaK .btn-menu {
            font-family: Simplon, sans-serif;
            border-top: white solid 2px;
            text-transform: uppercase;
            display: inline-block;
            font-weight: normal;
            margin: 0 28px;
            -webkit-transition: none;
            transition: none;
            padding: 16px 0;
            }
            
            .nHnaK .btn-menu:not(.active) {
            color: #222;
            }
            
            .nHnaK .btn-menu.active {
            border-bottom: #d82482 solid 2px;
            color: #d82482;
            font-weight: bold;
            padding-bottom: 14px;
        }
        .cMkdVA .sem-submenu,
        .cMkdVA .tem-submenu {
        text-align: center;
        }

        .cMkdVA .sem-submenu:before,
        .cMkdVA .tem-submenu:before {
        display: block;
        content: attr(data-item);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        }

        .cMkdVA:hover>.sem-submenu {
        color: #d82482;
        font-weight: bold;
        -webkit-text-decoration: none;
        text-decoration: none;
        }
 
        .ehRVxW .sem-submenu,
        .ehRVxW .tem-submenu {
        text-align: center;
        }

        .ehRVxW .sem-submenu:before,
        .ehRVxW .tem-submenu:before {
        display: block;
        content: attr(data-item);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        }

        .ehRVxW:hover>.sem-submenu {
        color: #d82482;
        font-weight: bold;
        -webkit-text-decoration: none;
        text-decoration: none;
        }

        .bhQqYh .sem-submenu,
        .bhQqYh .tem-submenu {
        text-align: center;
        }

        .bhQqYh .sem-submenu:before,
        .bhQqYh .tem-submenu:before {
        display: block;
        content: attr(data-item);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        }

        .bhQqYh:hover>.sem-submenu {
        color: #d82482;
        font-weight: bold;
        -webkit-text-decoration: none;
        text-decoration: none;
        }
        .efGrHD .sem-submenu,
        .efGrHD .tem-submenu {
        text-align: center;
        }
        
        .efGrHD .sem-submenu:before,
        .efGrHD .tem-submenu:before {
        display: block;
        content: attr(data-item);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        }
        
        .efGrHD:hover>.sem-submenu {
        color: #d82482;
        font-weight: bold;
        -webkit-text-decoration: none;
        text-decoration: none;
        }
        .nHnaK .sem-submenu,
        .nHnaK .tem-submenu {
        text-align: center;
        }

        .nHnaK .sem-submenu:before,
        .nHnaK .tem-submenu:before {
        display: block;
        content: attr(data-item);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        }

        .nHnaK:hover>.sem-submenu {
        color: #d82482;
        font-weight: bold;
        -webkit-text-decoration: none;
        text-decoration: none;
        }

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
            width:100%;
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
            .cMkdVA:hover>.tem-submenu {
                padding: 16px 27px 16px 27px;
                border: 1px solid #f5f5f5;
                border-top: #d82482 solid 2px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                color: #d82482;
                -webkit-text-decoration: none;
                text-decoration: none;
                background: #f5f5f5;
                position: relative;
                -webkit-transition: none;
                transition: none;
                border-bottom: 0;
                font-weight: bold;
                margin: 0;
            }
                
            .cMkdVA:hover>.tem-submenu .caret svg {
                position: relative;
                opacity: 0;
                top: calc(50% - 4px);
            }
        

            .ehRVxW:hover>.tem-submenu {
                padding: 16px 27px 16px 27px;
                border: 1px solid #f5f5f5;
                border-top: #d82482 solid 2px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                color: #d82482;
                -webkit-text-decoration: none;
                text-decoration: none;
                background: #f5f5f5;
                position: relative;
                -webkit-transition: none;
                transition: none;
                border-bottom: 0;
                font-weight: bold;
                margin: 0;
            }
                
            .ehRVxW:hover>.tem-submenu .caret svg {
                position: relative;
                opacity: 0;
                top: calc(50% - 4px);
            }

            .bhQqYh:hover>.tem-submenu {
                padding: 16px 27px 16px 27px;
                border: 1px solid #f5f5f5;
                border-top: #d82482 solid 2px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                color: #d82482;
                -webkit-text-decoration: none;
                text-decoration: none;
                background: #f5f5f5;
                position: relative;
                -webkit-transition: none;
                transition: none;
                border-bottom: 0;
                font-weight: bold;
                margin: 0;
                }
                
            .bhQqYh:hover>.tem-submenu .caret svg {
                position: relative;
                opacity: 0;
                top: calc(50% - 4px);
            }

            .efGrHD:hover>.tem-submenu {
                padding: 16px 27px 16px 27px;
                border: 1px solid #f5f5f5;
                border-top: #d82482 solid 2px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                color: #d82482;
                -webkit-text-decoration: none;
                text-decoration: none;
                background: #f5f5f5;
                position: relative;
                -webkit-transition: none;
                transition: none;
                border-bottom: 0;
                font-weight: bold;
                margin: 0;
            }
                
            .efGrHD:hover>.tem-submenu .caret svg {
                position: relative;
                opacity: 0;
                top: calc(50% - 4px);
            }

            .nHnaK:hover>.tem-submenu {
                padding: 16px 27px 16px 27px;
                border: 1px solid #f5f5f5;
                border-top: #d82482 solid 2px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                color: #d82482;
                -webkit-text-decoration: none;
                text-decoration: none;
                background: #f5f5f5;
                position: relative;
                -webkit-transition: none;
                transition: none;
                border-bottom: 0;
                font-weight: bold;
                margin: 0;
            }
                
            .nHnaK:hover>.tem-submenu .caret svg {
                position: relative;
                opacity: 0;
                top: calc(50% - 4px);
            }

            .cgiFkg {
                position: absolute;
                font-size: 0.7em;
                margin: 0 0 0 0.5em;
                width: 12px;
                height: 12px;
            }


            .cMkdVA:hover>.tem-submenu:after {
                background: #f5f5f5;
                position: absolute;
                z-index: 1000;
                height: 16px;
                bottom: -1px;
                width: 100%;
                content: "";
                left: 0;
                }
                
                .cMkdVA .submenu {
                left: 0;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                border: 1px solid #f5f5f5;
                background: #f5f5f5;
                white-space: normal;
                position: absolute;
                display: none;
                width: 220px;
                }
                
                .cMkdVA .submenu.w-auto {
                width: auto;
                }
                
                .cMkdVA .submenu .row {
                width: 100%;
                }
                
                .cMkdVA .submenu .col {
                margin: 1rem 0 12px 16px;
                padding-right: 16px;
                width: auto;
                }
                
                .cMkdVA .submenu .col:not(:last-child) {
                border-right: lightgrey 2px solid;
                }
                
                .cMkdVA .submenu .col h3 {
                margin-top: 4px;
                font-size: 15px;
                white-space: nowrap;
                }
                
                .cMkdVA .submenu .col .button-menu,
                .cMkdVA .submenu .col a {
                color: #222;
                margin: 0;
                font-size: 1rem;
                 padding: 0;
                }
                
                .cMkdVA .submenu .col .button-menu:last-child,
                .cMkdVA .submenu .col a:last-child {
                margin-bottom: 8px;
                }
                
                .cMkdVA .submenu .col .button-menu:hover,
                .cMkdVA .submenu .col a:hover {
                -webkit-text-decoration: underline;
                text-decoration: underline;
                color: #d82482;
                }
            
            
            .cMkdVA:hover>.submenu {
            pointer-events: auto;
            z-index: 999;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            }
            
            .cMkdVA .vantagens~.submenu {
            width: 165px;
            }
            
            
            
            
            
            
            
            
            .ehRVxW:hover>.tem-submenu:after {
            background: #f5f5f5;
            position: absolute;
            z-index: 1000;
            height: 16px;
            bottom: -1px;
            width: 100%;
            content: "";
            left: 0;
            }
            
            .ehRVxW .submenu {
            left: 0;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #f5f5f5;
            background: #f5f5f5;
            white-space: normal;
            position: absolute;
            display: none;
            width: 220px;
            }
            
            .ehRVxW .submenu.w-auto {
            width: auto;
            }
            
            .ehRVxW .submenu .row {
            width: 100%;
            }
            
            .ehRVxW .submenu .col {
            margin: 1rem 0 12px 16px;
            padding-right: 16px;
            width: auto;
            }
            
            .ehRVxW .submenu .col:not(:last-child) {
            border-right: lightgrey 2px solid;
            }
            
            .ehRVxW .submenu .col h3 {
            margin-top: 4px;
            font-size: 15px;
            white-space: nowrap;
            }
            
            .ehRVxW .submenu .col .button-menu,
            .ehRVxW .submenu .col a {
            color: #222;
            margin: 0;
            font-size: 1rem;
            padding: 0;
            }
            
            .ehRVxW .submenu .col .button-menu:last-child,
            .ehRVxW .submenu .col a:last-child {
            margin-bottom: 8px;
            }
            
            .ehRVxW .submenu .col .button-menu:hover,
            .ehRVxW .submenu .col a:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
            color: #d82482;
            }
            
            .ehRVxW:hover>.submenu {
                pointer-events: auto;
                z-index: 999;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
            }
                
            .ehRVxW .vantagens~.submenu {
                width: 165px;
            }
            
            .bhQqYh:hover>.tem-submenu:after {
                background: #f5f5f5;
                position: absolute;
                z-index: 1000;
                height: 16px;
                bottom: -1px;
                width: 100%;
                content: "";
                left: 0;
                }
                
                .bhQqYh .submenu {
                left: 0;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                border: 1px solid #f5f5f5;
                background: #f5f5f5;
                white-space: normal;
                position: absolute;
                display: none;
                width: 220px;
                }
                
                .bhQqYh .submenu.w-auto {
                width: auto;
                }
                
                .bhQqYh .submenu .row {
                width: 100%;
                }
                
                .bhQqYh .submenu .col {
                margin: 1rem 0 12px 16px;
                padding-right: 16px;
                width: auto;
                }
                
                .bhQqYh .submenu .col:not(:last-child) {
                border-right: lightgrey 2px solid;
                }
                
                .bhQqYh .submenu .col h3 {
                margin-top: 4px;
                font-size: 15px;
                white-space: nowrap;
                }
                
                .bhQqYh .submenu .col .button-menu,
                .bhQqYh .submenu .col a {
                color: #222;
                margin: 0;
                font-size: 1rem;
                padding: 0;
                }
                
                .bhQqYh .submenu .col .button-menu:last-child,
                .bhQqYh .submenu .col a:last-child {
                margin-bottom: 8px;
                }
                
                .bhQqYh .submenu .col .button-menu:hover,
                .bhQqYh .submenu .col a:hover {
                -webkit-text-decoration: underline;
                text-decoration: underline;
                color: #d82482;
                }
            
            
            .bhQqYh:hover>.submenu {
            pointer-events: auto;
            z-index: 999;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            }
            
            .bhQqYh .vantagens~.submenu {
            width: 165px;
            }
            
            .efGrHD:hover>.tem-submenu:after {
            background: #f5f5f5;
            position: absolute;
            z-index: 1000;
            height: 16px;
            bottom: -1px;
            width: 100%;
            content: "";
            left: 0;
            }
            
            .efGrHD .submenu {
            right: 0;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #f5f5f5;
            background: #f5f5f5;
            white-space: normal;
            position: absolute;
            display: none;
            width: 660px;
            }
            
            .efGrHD .submenu.w-auto {
            width: auto;
            }
            
            .efGrHD .submenu .row {
            width: 100%;
            }
            
            .efGrHD .submenu .col {
            margin: 1rem 0 12px 16px;
            padding-right: 16px;
            width: auto;
            }
            
            .efGrHD .submenu .col:not(:last-child) {
            border-right: lightgrey 2px solid;
            }
            
            .efGrHD .submenu .col h3 {
            margin-top: 4px;
            font-size: 15px;
            white-space: nowrap;
            }
            
            .efGrHD .submenu .col .button-menu,
            .efGrHD .submenu .col a {
            color: #222;
            margin: 0;
            font-size: 1rem;
             padding: 0;
            }
            
            .efGrHD .submenu .col .button-menu:last-child,
            .efGrHD .submenu .col a:last-child {
            margin-bottom: 8px;
            }
            
            .efGrHD .submenu .col .button-menu:hover,
            .efGrHD .submenu .col a:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
            color: #d82482;
            }


            .efGrHD:hover>.submenu {
                pointer-events: auto;
                z-index: 999;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                }
                
                .efGrHD .vantagens~.submenu {
                width: 165px;
                }
                
                .nHnaK:hover>.tem-submenu:after {
                background: #f5f5f5;
                position: absolute;
                z-index: 1000;
                height: 16px;
                bottom: -1px;
                width: 100%;
                content: "";
                left: 0;
                }
                
                .nHnaK .submenu {
                right: 0;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
                border: 1px solid #f5f5f5;
                background: #f5f5f5;
                white-space: normal;
                position: absolute;
                display: none;
                width: 220px;
                }
                
                .nHnaK .submenu.w-auto {
                width: auto;
                }
                
                .nHnaK .submenu .row {
                width: 100%;
                }
                
                .nHnaK .submenu .col {
                margin: 1rem 0 12px 16px;
                padding-right: 16px;
                width: auto;
                }
                
                .nHnaK .submenu .col:not(:last-child) {
                border-right: lightgrey 2px solid;
                }
                
                .nHnaK .submenu .col h3 {
                margin-top: 4px;
                font-size: 15px;
                white-space: nowrap;
                }
                
                .nHnaK .submenu .col .button-menu,
                .nHnaK .submenu .col a {
                color: #222;
                margin: 0;
                font-size: 1rem;
                   padding: 0;
                }
                
                .nHnaK .submenu .col .button-menu:last-child,
                .nHnaK .submenu .col a:last-child {
                margin-bottom: 8px;
                }
                
                .nHnaK .submenu .col .button-menu:hover,
                .nHnaK .submenu .col a:hover {
                -webkit-text-decoration: underline;
                text-decoration: underline;
                color: #d82482;
                }
                
                
                .nHnaK:hover>.submenu {
                pointer-events: auto;
                z-index: 999;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                }
                
                .nHnaK .vantagens~.submenu {
                width: 165px;
                }

                .imJzZn {
                    position: relative;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-flex: 1 1 0;
                    -ms-flex: 1 1 0;
                    flex: 1 1 0;
                    position: relative;
                    max-width: none;
                    }
        }

        .iaXBsB:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
        }
        
        .iaXBsB:disabled,
        .iaXBsB.disabled {
            color: #909090;
        }
        
        .iaXBsB:hover {
            cursor: pointer;
        }
        
        .iaXBsB:focus {
            outline: none;
        }
        
        .iaXBsB:disabled,
        .iaXBsB.disabled {
            cursor: not-allowed;
            pointer-events: none;
        }
        `}</style>
        </section>
    )
}

export default HeaderMenu



// .iaXBsB {
//     color: #d82482;
//     background: transparent;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     display: inline-block;
//     border-radius: 0;
//     text-align: left;
//     padding: 0;
//     border: 0;
//     font: inherit;
//     font-size: 0.875rem;
//     font-weight: inherit;
//     line-height: 1em;
//     -webkit-transition: 0.3s ease;
//     transition: 0.3s ease;
//     white-space: nowrap;
// }
// .eRWINx {
//     border-color: transparent;
//     background: #d82482;
//     color: white;
//     border-width: 1px;
//     text-transform: none;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     padding: 1rem 0;
//     border-style: solid;
//     text-align: center;
//     display: block;
//     width: 100%;
//     border-radius: 2px;
//     font: inherit;
//     font-size: 0.875rem;
//     font-weight: inherit;
//     line-height: 1em;
//     -webkit-transition: 0.3s ease;
//     transition: 0.3s ease;
//     white-space: nowrap;
// }
// .eRWINx:hover {
//     border-color: #d82482;
//     background: white;
//     color: #d82482;
// }
// .eRWINx:disabled,
// .eRWINx.disabled {
//     opacity: 0.5;
// }

// .eRWINx svg {
//     -webkit-animation-name: spin;
//     animation-name: spin;
//     -webkit-animation-duration: 400ms;
//     animation-duration: 400ms;
//     -webkit-animation-iteration-count: infinite;
//     animation-iteration-count: infinite;
//     -webkit-animation-timing-function: linear;
//     animation-timing-function: linear;
// }

// @-webkit-keyframes spin {
//     from {
//         -webkit-transform: rotate(0deg);
//         -ms-transform: rotate(0deg);
//         transform: rotate(0deg);
//     }

//     to {
//         -webkit-transform: rotate(360deg);
//         -ms-transform: rotate(360deg);
//         transform: rotate(360deg);
//     }
// }

// @keyframes spin {
//     from {
//         -webkit-transform: rotate(0deg);
//         -ms-transform: rotate(0deg);
//         transform: rotate(0deg);
//     }

//     to {
//         -webkit-transform: rotate(360deg);
//         -ms-transform: rotate(360deg);
//         transform: rotate(360deg);
//     }
// }
// .eRWINx:hover {
//     cursor: pointer;
// }
// .eRWINx:focus {
//     outline: none;
// }
// .eRWINx:disabled,
// .eRWINx.disabled {
//     cursor: not-allowed;
//     pointer-events: none;
// }
// .cMkdVA {
// display: inline-block;
// position: relative;
// }
// .cMkdVA .icon-subtitle .col {
// margin: 0;
// }
// .cMkdVA .icon-subtitle img {
// width: 22px;
// }
// .ehRVxW {
// display: inline-block;
// position: relative;
// }
// .ehRVxW .icon-subtitle .col {
// margin: 0;
// }
// .ehRVxW .icon-subtitle img {
// width: 22px;
// }
// .bhQqYh {
// display: inline-block;
// position: relative;
// }
// .bhQqYh .icon-subtitle .col {
// margin: 0;
// }
// .bhQqYh .icon-subtitle img {
// width: 22px;
// }
// .efGrHD {
// display: inline-block;
// position: relative;
// }


// .efGrHD .icon-subtitle .col {
// margin: 0;
// }

// .efGrHD .icon-subtitle img {
// width: 22px;
// }

// .nHnaK {
// display: inline-block;
// position: relative;
// }

// .nHnaK .icon-subtitle .col {
// margin: 0;
// }

// .nHnaK .icon-subtitle img {
// width: 22px;
// }
// @media only screen and (max-width:1023px) {
// .keDYPe {
//     -webkit-box-pack: initial;
//     -webkit-justify-content: initial;
//     -ms-flex-pack: initial;
//     justify-content: initial;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-align-items: initial;
//     -webkit-box-align: initial;
//     -ms-flex-align: initial;
//     align-items: initial;
//     -webkit-box-flex: 1;
//     -webkit-flex-grow: 1;
//     -ms-flex-positive: 1;
//     flex-grow: 1;
// }


// }