import React from 'react'
import Img from '../atoms/atImg'
import * as Util from '../../controller/util'

const headerParametrizado = props => {
    var modo = Util.validaProps(props.modo, 'html')
    return (
        <>
            <header className="header-parametrizado">
                <section className="menu container productV2 logov2">
                    <div className="containerMainMenu">
                        <nav className="main-menu">
                            <h2 className="logo">
                                <a href="https://www.vvcestudio.com.br">
                                    <span>
                                        <Img
                                            src="../../../static/assetsv5/img/vvc-logo-verde.png"
                                            width="30px"
                                            height="35px"
                                            alt="vvc. FAZ SENTIDO."
                                            title="vvc. FAZ SENTIDO."
                                            class="ClassImgNext"
                                            modo={modo}
                                        />
                                    </span>
                                </a>
                            </h2>
                            <ul>
                                <li className="small-only">
                                    <div className="Modal__wrapper ">
                                        <a className="menuMobile small-only">
                                            <span>Menu</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/combo/">Combo</a>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/tv-hd/">TV HD</a>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/celular/">Celular</a>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/internet/">Internet</a>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/fixo/">Fixo</a>
                                </li>
                                <li className="primary medium-up">
                                    <a className="borderBottomHover" href="/vvc-play/">VVC Play</a>
                                </li>
                                <li className="secondary large-up">
                                    <a className="borderBottomHover" href="/recarga/">Recarga</a>
                                </li>
                                <li className="secondary large-up">
                                    <a className="borderBottomHover" href="/meuvvc/segunda-via/">2ª via</a>
                                </li>
                                <li className="secondary extra-large-up">
                                    <a className="borderBottomHover" href="/meuvvc/conta-online/">Conta Digital</a>
                                </li>
                                <li className="secondary extra-large-up">
                                    <a className="borderBottomHover" href="/oi/celular-legal/">Celular Legal</a>
                                </li>
                                <li className="medium-up search">
                                    <span className="icon-menu-search">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 692 10 10" enableBackground="new -10 692 10 10">
                                            <path
                                                d="M-9.8 701.8c.3.3.8.3 1.1 0l1.6-1.6.2-.2c.7.5 1.6.8 2.5.8 2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4s-4.4 2-4.4 4.4c0 .9.3 1.8.8 2.5-.1 0-.2.1-.2.2l-1.6 1.6c-.3.3-.3.8 0 1.1zm1.7-5.4c0-2 1.6-3.7 3.7-3.7s3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7-3.7-1.7-3.7-3.7z" />
                                        </svg>
                                    </span>
                                    <a className="borderBottomHover" href="https://www.vvcestudio.com.br/faq/">BUSCA</a>
                                </li>
                                <li className="minhavvc model3">
                                    <a href="/meuvvc/">
                                        <span>
                                            Minha VVC
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header >
            <style jsx>{`
            .header-parametrizado{
                background-color: ${props.backgroundColor};
            }
            .container {
                margin-left: 1.12rem;
                margin-right: 1.12rem;
            }
            
            @media screen and (min-width:734px) {
                .container {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 44rem;
                }
            }
            
            @media screen and (min-width:1024px) {
                .container {
                    max-width: 60rem;
                }
            }
            
            @media screen and (min-width:1250px) {
                .container {
                    max-width: 73.125rem;
                }
            }
            
            h2 {
                font-weight: 400;
            }
            
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            
            @media screen and (min-width:734px) {
                .small-only {
                    display: none;
                }
            }
            
            @media screen and (max-width:733px) {
                .medium-up {
                    display: none;
                }
            }
            
            @media screen and (max-width:1023px) {
                .large-up {
                    display: none;
                }
            }
            
            @media screen and (max-width:1249px) {
                .extra-large-up {
                    display: none;
                }
            }
            
            a {
                color: #fff;
            }
            
            a {
                cursor: pointer;
                text-decoration: none;
                border-radius: .09rem;
            }
            
            a.borderBottomHover:hover {
                border-bottom: .06rem solid ${props.colorTextBorderBottom};
            }
            a.assine {
                margin-left: 1.72rem;
                text-transform: uppercase;
                padding: .63rem .75rem;
                font-family: oiTextMedium;
                font-size: .75rem;
                color: #909090;
            }
            
            @media screen and (min-width:734px) {
                a.assine {
                    text-transform: none;
                    font-size: 1.12rem;
                    padding: .98rem .9em;
                    font-family: oiTextRegular, sans-serif;
                }
            }
            
            @media screen and (min-width:1024px) {
                a.assine {
                    margin-left: 2.25rem;
                    padding: 1rem 2.25rem;
                }
            }
            
            @media screen and (min-width:1250px) {
                a.assine {
                    padding: 1rem 2.86rem;
                }
            }
            .main-menu {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
            }
            
            .menu {
                padding: 0 0 1.12rem;
                font-size: 1.2rem;
                letter-spacing: -.01333em;
            }
            
            @media screen and (min-width:734px) {
                .menu {
                    padding: 1.42rem 0;
                }
            }
            
            @media screen and (min-width:1250px) {
                .menu {
                    padding: .98rem 0;
                }
            }
            
            .menu ul {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                list-style-type: none;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
            }
            
            @media screen and (max-width:734px) {
                .menu ul {
                    -webkit-box-pack: end;
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                }
            }
            
            .menu ul li {
                margin: 0 1.3rem;
            }
            
            .menu ul li:last-child {
                margin: 0;
            }
            
            .menu ul li a {
                color: ${props.colorText};
            }
            
            @media screen and (min-width:734px) {
                .menu ul li {
                    margin: 0;
                }
            }
            
            .menu ul li.secondary {
                font-family: oiTextMedium, sans-serif;
                color: #909090;
                font-size: .75rem;
                line-height: 2rem;
                height: 2rem;
                opacity: .7;
                text-transform: uppercase;
            }
            
            .menu ul li.secondary:active {
                margin-top: .38rem;
            }
            
            .menu ul li.primary {
                font-family: SimplonBP-Regular;
                font-size: 1.2rem;
                line-height: 2rem;
                height: 2rem;
            }
            
            .menu ul li.primary:active {
                margin-top: .38rem;
            }
            
            .menu ul li.search {
                font-size: .75rem;
                text-transform: uppercase;
                font-family: oiTextMedium, sans-serif;
                opacity: .7;
            }
            
            .menu ul li.search:active {
                margin-top: 0;
            }
            
            .menu ul li buttom.minhavvc a {
                color: #909090;
                border-radius: .09rem;
                margin: 1px solid #fff;
                border-color: #fff;
                font-family: SimplonBP-Regular;
            }
            
            .menu ul li.minhavvc a:active {
                margin-top: 0;
                font-family: SimplonBP-Regular;
            }
            
            @media screen and (min-width:734px) {
                .menu ul li.minhavvc a {
                    text-align: center;
                    border-bottom: none;
                    color: #fff;
                    width: 105px;
                    height: 25px;
                    display: block;
                    padding: 1rem 0
                    background-color: #fff;
                    font-family: SimplonBP-Regular;
                }
                .menu ul li.minhavvc a:active {
                    margin-top: 0;
                    font-family: SimplonBP-Regular;
                }
            }
            
            @media screen and (min-width:1024px) {
                .menu ul li.minhavvc a {
                    width: 143px;
                    font-family: SimplonBP-Regular;
                }
            }
            
            @media screen and (min-width:1250px) {
                .menu ul li.minhavvc a {
                    width: 162px;
                    padding: 1.5rem 0;
                    font-family: SimplonBP-Regular;
                }
            }
            
            @media screen and (min-width:1920px) {
                .menu ul li.minhavvc a {
                    width: 218px;
                    font-family: SimplonBP-Regular;
                }
            }
            
            @media screen and (min-width:2340px) {
                .menu ul li.minhavvc a {
                    width: 305px;
                    padding: 1.8rem 0;
                    font-family: SimplonBP-Regular;
                }
            }
            
            @media screen and (min-width:734px) {
                .menu ul li.minhavvc.model3 a {
                    font-family: SimplonBP-Regular;
                    border: solid 1px #909090;
                    color: ${props.colorButtonText};
                    background-color: ${props.colorButton};
                    border-color: ${props.colorButtonBorder};
                }
                .menu ul li.minhavvc.model3 a:hover {
                    background-color: ${props.colorButtonHover};
                    border-color: ${props.colorButtonBorderHover};
                }
            }
            
            .menu img {
                height: 2.81rem;
            }
            
            .menu .logo {
                width: 4.59rem;
                position: absolute;
                top: 1.5rem;
            }
            
            .menu .logo span svg {
                width: 4.12rem;
                height: 4.12rem;
            }
            
            @media screen and (min-width:734px) {
                .menu .logo {
                    position: relative;
                    top: 0;
                    margin-right: 1.88rem;
                }
            }
            
            .icon-menu-search {
                margin-right: .22rem;
            }
            
            .icon-menu-search svg {
                fill: #fff;
                width: .56rem;
                height: .56rem;
            }
            
            .icon-menu-search .menu {
                background-color: #fff;
            }
            
            .productV2.menu {
                height: 5rem;
                padding: 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-line-pack: center;
                align-content: center;
            }
            
            .productV2.menu .containerMainMenu {
                width: 100%;
            }
            
            .productV2.menu .containerMainMenu .main-menu {
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            .productV2.menu .containerMainMenu .main-menu .logo {
                position: static;
                margin-right: 1.4375rem;
            }
            
            .productV2.menu .containerMainMenu .main-menu .logo svg {
                height: 3.75rem;
                width: 3.75rem;
            }
            
            .productV2.menu ul {
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -ms-flex-line-pack: center;
                align-content: center;
            }
            
            .productV2.menu ul li:first-child {
                margin-left: 0;
            }
            
            .productV2.logov2.menu ul li.search .icon-menu-search svg {
                fill: ${props.colorIconSearch};
            }
            
            .productV2.logov2.menu .containerMainMenu .main-menu .logo svg {
                height: 2.625rem;
                width: 2.8125rem;
            }
            
            @media screen and (min-width:768px) {
                .productV2.logov2.menu .containerMainMenu .main-menu .logo svg {
                    width: 3.375rem;
                    height: 3.125rem;
                }
            }
            
            @media screen and (min-width:734px) {
                .productV2.menu ul {
                    height: 100%;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }
                .productV2.menu {
                    height: 6.5rem;
                }
            }
            
            @media screen and (min-width:1024px) {
                .productV2.menu {
                    height: 6rem;
                }
            }
            
            header.header .logo {
                width: 3.75rem;
                float: none;
                display: block;
            }
            `}</style>
        </>
    )
}

export default headerParametrizado