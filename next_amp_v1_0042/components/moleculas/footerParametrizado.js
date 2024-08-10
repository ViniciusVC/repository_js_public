import React from 'react'

const footerParametrizado = props => {
    var modo = "html";
    if (props.modo != undefined) {
        modo = props.modo
    }
    return (
        <>
            <hr />
            <footer className="false">
                <section className="footer">
                    <div className="container">
                        <div className="footer-nav">
                            <div className="footer-category">
                                <div className="link-title">
                                    <div className="iconLink small-only">
                                        <a href="/combo/">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100">
                                                    <polygon fill={props.colorIconMobile}
                                                        points="-255,443 -222,443 -222,441 -253,441 -253,355 -222,355 -222,353 -255,353" />
                                                    <polygon fill={props.colorIconMobile}
                                                        points="-156,353 -189,353 -189,355 -158,355 -158,441 -189,441 -189,443 -156,443" />
                                                </svg>
                                            </span>
                                            <span>Combo</span>
                                        </a>
                                    </div>
                                    <a className="medium-up" href="/combo/">Combo</a>
                                </div>
                                <div className="link-item">
                                    <a href="/combo/">Planos</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/combo/">Atendimento</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/combo/">Serviços Adicionais</a>
                                </div>
                            </div>
                            <div className="footer-category">
                                <div className="link-title">
                                    <div className="iconLink small-only">
                                        <a href="/tv-hd/">
                                            <span>
                                                <svg
                                                    enableBackground="new 0 0 100 100" viewBox="0 0 100 100"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill={props.colorIconMobile}
                                                        d="M76.8 12.5H54l8.4-8.4-2.5-2.5-9.5 9.5-9.5-9.5-2.5 2.5 8.6 8.6H23.2C10.5 12.6 0 22.9 0 35.9v39.3c0 12.6 10.1 23.1 23.1 23.2h53.7c12.8 0 23.2-10.3 23.2-23.2V35.7c0-12.9-10.3-23.2-23.2-23.2zM21.5 94.4c-8.1-.8-15-6.6-17.2-14.2h17.2v14.2zm16.1 0H25.1V80h12.5v14.4zm39.3 0H41V80h54.9c-2.3 8.5-9.9 14.4-19 14.4zm19.8-19.7c0 .8 0 1.7-.2 2.5v-.6H3.9c0-.6-.2-1.2-.2-1.9V35.4c0-11.1 8.9-19.7 19.7-19.7h53.7c11.1 0 19.7 8.9 19.7 19.7v39.3z" />
                                                    <circle fill={props.colorIconMobile} cx="75.2" cy="87.4" r="2.7" />
                                                </svg>
                                            </span>
                                            <span>TV HD</span>
                                        </a>
                                    </div>
                                    <a className="medium-up" href="/tv-hd/">TV HD</a>
                                </div>
                                <div className="link-item">
                                    <a href="/tv-hd/">Planos</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/tv-hd/">Atendimento</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/tv-hd/">Serviços Adicionais</a>
                                </div>
                            </div>
                            <div className="footer-category">
                                <div className="link-title">
                                    <div className="iconLink small-only">
                                        <a href="/celular/">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="51" viewBox="0 0 30 51">
                                                    <g className="icon-smartphone" fill={props.colorIconMobile} fillRule="evenodd">
                                                        <path fill={props.colorIconMobile}
                                                            d="M1.535 40.467h26.93V10.196H1.535v30.271zm26.93 4.61c0 .163-.217 4.108-4.39 4.423H6.157c-.689 0-4.13-.21-4.62-4.275v-3.258h26.929v3.11zM1.535 5.864c.016-.163.309-3.974 4.084-4.365h18.747c.138 0 3.514.151 4.099 4.322v2.875H1.535V5.865zM24.381 0H5.53C1.397.435.107 3.975 0 5.822v39.493C.677 50.837 5.604 51 6.156 51h17.98c4.452-.33 5.786-3.974 5.864-5.895V5.717C29.232.137 24.44 0 24.381 0z" />
                                                        <path fill={props.colorIconMobile}
                                                            d="M14.348 45.401c0-.685.586-1.242 1.305-1.242.72 0 1.304.557 1.304 1.242 0 .693-.584 1.245-1.304 1.245-.719 0-1.305-.552-1.305-1.245zM13.043 4.976h3.914V3.732h-3.914z" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>Celular</span>
                                        </a>
                                    </div>
                                    <a className="medium-up" href="/celular/">Celular</a>
                                </div>
                                <div className="link-item">
                                    <a href="/celular/">Planos</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/celular/">Atendimento</a>
                                </div>
                                <div className="link-item">
                                    <a href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">
                                        Serviços pra Celular</a>
                                </div>
                            </div>
                            <div className="footer-category">
                                <div className="link-title">
                                    <div className="iconLink small-only">
                                        <a href="/internet/">
                                            <span>
                                                <svg
                                                    enableBackground="new 0 0 100 100" viewBox="0 0 100 100"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill={props.colorIconMobile}
                                                        d="M21.6 58.5c0 15.6 12.7 28.3 28.3 28.3 15.6 0 28.3-12.7 28.3-28.3S65.6 30.2 49.9 30.2c-15.6 0-28.3 12.5-28.3 28.3zM43.4 35c-3 5.2-4.5 13.4-4.7 21.7H25.4c.8-10.4 8.1-19 18-21.7zm-18 25.3h13.3c.3 8.6 2 17.3 5.3 22.2C33.7 80 26 71.3 25.4 60.3zm24.5 23c-2.8 0-7.3-8.9-7.7-23h15.3c-.1 14.1-4.7 23-7.6 23zm6.2-.6c3.1-5 5-13.6 5.3-22.2h13.3c-.8 10.8-8.4 19.5-18.6 22.2zm18.5-26H61.3c-.2-8.3-1.9-16.7-4.7-21.7 9.8 2.7 17.2 11.3 18 21.7zm-16.9.1H42.3c.4-14 4.7-22.7 7.6-22.7 3.2 0 7.4 8.6 7.8 22.7z" />
                                                    <path fill={props.colorIconMobile}
                                                        d="M59.4 3.8c-5-5-13.6-5-18.6 0l-38 38V100h94.5V41.7L59.4 3.8zm33.8 92.6H6.7V43.1L43.2 6.5c3.6-3.6 9.7-3.6 13.3 0l36.6 36.6v53.3z" />
                                                </svg>
                                            </span>
                                            <span>Internet</span>
                                        </a>
                                    </div>
                                    <a className="medium-up" href="/internet/">Internet</a>
                                </div>
                                <div className="link-item">
                                    <a href="/internet/">Planos</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/internet/">Atendimento</a>
                                </div>
                                <div className="link-item">
                                    <a
                                        href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">
                                        Serviços pra Internet</a>
                                </div>
                            </div>
                            <div className="footer-category">
                                <div className="link-title">
                                    <div className="iconLink small-only">
                                        <a href="/fixo/">
                                            <span>
                                                <svg
                                                    enableBackground="new 0 0 100 100" viewBox="0 0 100 100"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle fill={props.colorIconMobile} cx="75.7" cy="77.6" r="3.4" />
                                                    <circle fill={props.colorIconMobile} cx="51.6" cy="62.1" r="3.4" />
                                                    <circle fill={props.colorIconMobile} cx="39.6" cy="62.1" r="3.4" />
                                                    <circle fill={props.colorIconMobile} cx="51.6" cy="50.1" r="3.4" />
                                                    <circle fill={props.colorIconMobile} cx="39.6" cy="50.1" r="3.4" />
                                                    <path fill={props.colorIconMobile}
                                                        d="M70.6 55.4h-5.2V8.6H29.3V0h-3.4v55.6C15.3 57.3 7 66.6 7 77.7c0 12.4 10 22.4 22.4 22.4h41.5c12.5 0 22.4-10 22.4-22.4S82.9 55.4 70.6 55.4zM29.3 12.1H62v22.5H29.3V12.1zm0 46.7V38H62v37.9H29.3V58.8zM70.6 97H29.1C18.6 97 10 88.6 10 77.9c0-9.4 6.7-17.1 15.5-18.6v20.2h39.7V59h5.2c10.5 0 19.1 8.5 19.1 19.1 0 10.6-8.4 18.9-18.9 18.9z" />
                                                </svg>
                                            </span>
                                            <span>Fixo</span>
                                        </a>
                                    </div>
                                    <a className="medium-up" href="/fixo/">Fixo</a>
                                </div>
                                <div className="link-item">
                                    <a href="/fixo/">Planos</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/fixo/">Atendimento</a>
                                </div>
                                <div className="link-item">
                                    <a href="/meuvvc/fixo/">Serviços Adicionais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="supportFooterMenu">
                    <div className="footer-region container">
                        <div className="footer-regionalization">
                            <div className="logoFooter">
                                <a href="https://www.vvcestudio.com.br">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 528.1"
                                            enableBackground="new 0 0 612 528.1">
                                            <linearGradient id="vvc-logo-purple-3-gradient"
                                                gradientUnits="userSpaceOnUse" x1="84.947" y1="264.026" x2="538.17"
                                                y2="264.026">
                                            </linearGradient>
                                            <path fill={props.colorLogo}
                                                d="M308.2 501.4c61.4 11.9 152 3.5 152-102.8 0-170.7 127.6-196.4 56.5-299.5-86-124.9-376.4-97.1-423 85.8-41.4 162 70.9 288.7 214.5 316.5z" />
                                            <path fill={props.colorLogoText}
                                                d="M383.9 216.1c11.9 0 21.5-9.6 21.5-21.5 0-11.8-9.6-21.5-21.5-21.5-11.8 0-21.4 9.6-21.4 21.5s9.6 21.5 21.4 21.5zm.3 15.9c-12.1 0-21.9 28.7-21.9 64.1 0 35.4 9.8 64.1 21.9 64.1 12.1 0 21.9-28.7 21.9-64.1 0-35.4-9.8-64.1-21.9-64.1zm-97.5 0c-36 0-59.9 28.5-59.9 64.1 0 35.7 23.9 64.1 59.9 64.1 35.9 0 59.7-28.4 59.7-64.1 0-35.7-23.8-64.1-59.7-64.1zm0 98c-16.5 0-25.6-16.9-25.6-34.1 0-17.2 9.1-33.6 25.6-33.6 16.4 0 25.5 16.5 25.5 33.6 0 17.2-9.1 34.1-25.5 34.1z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="Modal__wrapper ">
                                <a className="regionName medium-up">
                                    <span className="region-icon">
                                        {/* Rio de Janeiro */}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="containerSelfCare">
                            <div className="selfCare medium-up">
                                <a href="/meuvvc/">Atendimento ao cliente</a>
                            </div>
                            <div className="socialMedia medium-up">
                                <a className="facebook" href="https://www.facebook.com/OiOficial/">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                            viewBox="0 0 8 15">
                                            <path
                                                d="M6 3l1.968.002L8 0H6C4.111 0 2 1.936 2 4v1H0v3h2v7.001h3V8h3V5H5V4c0-.493.731-1 1-1z"
                                                className="cls-1" />
                                        </svg>
                                    </span>
                                </a>
                                <a className="twitter" href="https://twitter.com/vvc_oficial">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                            viewBox="0 0 16 14">
                                            <path
                                                d="M14.2 2.112c1.153-.789 1.254-1.87 1.254-1.87-.372.539-2.034.827-2.034.827C11.996-.692 9.861.242 9.861.242c-2.508.933-2.135 3.987-2.135 3.987C3.353 4.157.979.637.979.637a3.818 3.818 0 0 0 .899 4.616c-.492.054-1.373-.359-1.373-.359-.034 2.64 2.576 3.575 2.576 3.575-.237.036-1.356.036-1.356.036.577 2.155 3.017 2.37 3.017 2.37-2.372 1.868-4.745 1.546-4.745 1.546 2.339 1.868 4.656 1.671 6.237 1.437 3.885-.577 5.966-3.557 5.966-3.557 2.746-3.701 1.83-6.826 2.271-7.005l.023-.011c.453-.216 1.502-1.606 1.502-1.606-.745.43-1.796.433-1.796.433z"
                                                className="cls-1" />
                                        </svg>
                                    </span>
                                </a>
                                <a className="youtube" href="https://www.youtube.com/user/oi/">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                            viewBox="0 0 22.81 15.88">
                                            <path
                                                d="M22.618 4.472c-.088-.954-.278-1.891-.685-2.766-.339-.727-.827-1.319-1.678-1.45-.5-.078-1.01-.103-1.518-.132C14.108-.139 3.788.139 3.243.161 1.959.214 1.163.855.74 2.024a7.975 7.975 0 0 0-.287.929c-.468 2.04-.41 4.115-.408 6.186.001 1.426.134 2.837.524 4.217.484 1.71 1.227 2.271 2.992 2.38 6.383.398 17.185-.173 16.524-.086.754-.099 1.268-.492 1.656-1.108a4.43 4.43 0 0 0 .565-1.405c.644-2.869.58-5.765.312-8.665zm-7.587 3.239c-1.836 1.176-3.658 2.376-5.485 3.565-.06.039-.131.061-.259.119V3.403c.49.317.921.593 1.349.873 1.452.953 2.899 1.913 4.357 2.857.306.198.449.315.038.578z"
                                                className="cls-1" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-institutional-block">
                        <div className="container">
                            <div className="footer-institutional">
                                <nav>
                                    <div className="hotlinksMobile small-only">
                                        <ul>
                                            <li>
                                                <a className="active" href="https://www.vvcestudio.com.br/">Você</a>
                                            </li>
                                            <li>
                                                <a className="false" href="/empresas/">Empresas</a>
                                            </li>
                                            <li>
                                                <a className="false" href="https://www.vvcestudio.com.br/lp/franquias/">Franquias</a>
                                            </li>
                                            <li>
                                                <a className="false" href="https://www.vvcestudio.com.br/ri/">Investidores</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footerNav medium-up">
                                        <ul>
                                            <li>
                                                <a href="/empresas/">Empresas</a>
                                            </li>
                                            <li>
                                                <a href="https://www.vvcestudio.com.br/lp/franquias/">Franquias</a>
                                            </li>
                                            <li>
                                                <a href="https://www.vvcestudio.com.br/ri/">Investidores</a>
                                            </li>
                                            <li>
                                                <a href="/oi/sobre-a-oi/">Sobre a Oi</a>
                                            </li>
                                            <li>
                                                <a href="/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/">Lojas da Oi</a>
                                            </li>
                                            <li className="large-up">
                                                <a href="/oi/celular-legal/">Celular Legal</a>
                                            </li>
                                            <li className="large-up">
                                                <a href="/outras-operadoras/">Outras Operadoras</a>
                                            </li>
                                            <li className="extra-large-up">
                                                <a href="/oi/sobre-a-oi/regulamentacao/informacoes/conselho-de-usuarios/2017-2019/">Conselho de Usuários</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="oiAz">
                                    <div className="Modal__wrapper ">
                                        <a className="oiAzButton">
                                            <span>Oi de A a Z</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            <style jsx>
                {`
            @media (max-width:768px) {
                input, select {
                    -webkit-appearance: none;
                }
            }

            @media screen and (min-width:1920px) {
                html {
                    font-size: 134%;
                }
            }
            
            @media screen and (min-width:2340px) {
                html {
                    font-size: 189%;
                }
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
            
            @media screen and (min-width:734px) {
                .small-only {
                    display: none;
                    font-family: SimplonBP-Regular,SimplonBP-Regular;

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
                cursor: pointer;
                text-decoration: none;
                border-radius: .09rem;
            }
            @media screen and (min-width:734px) {
                a.assine {
                    text-transform: none;
                    font-size: 1.12rem;
                    padding: .98rem .9em;
                    font-family: SimplonBP-Regular,oiTextRegular, sans-serif;
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
            
            @media screen and (min-width:734px) {
                .menu ul li {
                    margin: 0;
                }
            }
            
            .menu ul li.secondary:active {
                margin-top: .38rem;
            }
            
            .menu ul li.primary {
                font-size: 1.2rem;
                line-height: 2rem;
                height: 2rem;
            }
            
            .menu ul li.primary:active {
                margin-top: .38rem;
            }
            
            .menu ul li.search:active {
                margin-top: 0;
            }
            
            .menu ul li.minhavvc a:active {
                margin-top: 0;
            }
            
            
            @media screen and (min-width:1024px) {
                .menu ul li.minhavvc a {
                    width: 143px;
                }
            }
            
            @media screen and (min-width:1250px) {
                .menu ul li.minhavvc a {
                    width: 162px;
                    padding: 1.5rem 0;
                }
            }
            
            @media screen and (min-width:1920px) {
                .menu ul li.minhavvc a {
                    width: 218px;
                }
            }
            
            @media screen and (min-width:2340px) {
                .menu ul li.minhavvc a {
                    width: 305px;
                    padding: 1.8rem 0;
                }
            }
            
            .menu img {
                height: 2.81rem;
            }
            
            .main-menu-mobile ul {
                padding: 1.5rem 2.25rem;
            }
            
            .main-menu-mobile ul li {
                font-size: 2.62rem;
                font-family: SimplonBP-Regular,;
                padding-bottom: 1.5rem;
            }
            
            .main-menu-mobile ul li.secondary {
                font-size: 1.04rem;
                padding-right: 1.5rem;
            }
            
            .productV1.menu, .productV2.menu {
                height: 5rem;
                background-color: transparent;
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
            
            
            .Controle.subnav-retract a.active, .Portabilidade.subnav-retract a.active, .PosPago.subnav-retract a.active, .PrePago.subnav-retract a.active {
                font-family: SimplonBP-Regular,oiTextMedium, sans-serif;
                color: ${props.colorTextHover};
            }
            
            .footer {
                margin-top: 1.5rem;
                padding: .22rem 0 3rem;
                overflow: hidden;
                position: relative;
            }
            
            @media screen and (min-width:734px) {
                .footer {
                    margin-top: 4.5rem;
                }
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }
            }
            
            .footer .footer-nav .footer-category {
                position: relative;
                width: 1500px;
            }
            
            .footer .footer-nav .footer-category .link-item {
                font-family: SimplonBP-Regular,oiTextRegular;
                display: none;
                margin-top: 1.12rem;
            }
            
            .footer .footer-nav .footer-category .link-item .iconLink a {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            .footer .footer-nav .footer-category .link-item .iconLink a span {
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                margin-right: 1.12rem;
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav .footer-category .link-item {
                    display: block;
                    font-size: 1.01rem;
                }
            }
            
            @media screen and (min-width:1024px) {
                .footer .footer-nav .footer-category .link-item {
                    margin-top: .75rem;
                    font-size: 1.05rem;
                }
            }
            
            .footer .footer-nav .footer-category .link-item a {
                color: ${props.colorText};
                padding: .94rem 0 .89rem;
                text-decoration: none;
                cursor: pointer;
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav .footer-category .link-item a {
                    padding: 0;
                }
                .footer .footer-nav .footer-category .link-item a:hover {
                    color: ${props.colorTextHover};
                }
            }
            
            .footer .footer-nav .footer-category:last-child:after {
                display: none;
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav .footer-category:after {
                    display: none;
                }
            }
            
            .footer .footer-nav .footer-category .link-title {
                font-size: 1.12rem;
                font-family: SimplonBP-Regular;
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav .footer-category .link-title {
                    font-family: SimplonBP-Medium, sans-serif;
                    font-size: 1.28rem;
                }
            }
            
            @media screen and (min-width:1024px) {
                .footer .footer-nav .footer-category .link-title {
                    padding-bottom: .84rem;
                    font-family: SimplonBP-Medium, sans-serif;
                }
            }
            
            .footer .footer-nav .footer-category .link-title .iconLink a {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            .footer .footer-nav .footer-category .link-title .iconLink a span {
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                margin-right: 1.12rem;
            }
            
            .footer .footer-nav .footer-category .link-title a {
                color: ${props.colorText};
                padding: 1.35rem 0;
                text-decoration: none;
                cursor: pointer;
            }
            
            @media screen and (min-width:734px) {
                .footer .footer-nav .footer-category .link-title a {
                    padding: 0;
                }
                .footer .footer-nav .footer-category .link-title a:hover {
                    color: ${props.colorTextHover};
                }
            }
            
            .footer .footer-nav .footer-category .link-title a span svg {
                width: 1.88rem;
                height: 1.88rem;
                display: block;
            }
                        
            .supportFooterMenu .footer-region {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding: 1.41rem 0 2.18rem;
            }
            
            .supportFooterMenu .footer-region, .supportFooterMenu .footer-region .footer-regionalization {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-region .footer-regionalization .regionName {
                    font-size: 1.28rem;
                }
            }
            
            .supportFooterMenu .footer-region .footer-regionalization .logoFooter {
                width: 4.5rem;
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-region .footer-regionalization .logoFooter {
                    margin-right: 1.42rem;
                }
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional {
                padding: 2.34rem 0 .28rem;
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-institutional-block .footer-institutional {
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    padding: .45rem 0 2.25rem;
                }
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional .footerNav ul li a:hover {
                color: ${props.colorTextHover};
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional nav ul {
                padding: 0;
                margin: 0;
                list-style-type: none;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-institutional-block .footer-institutional nav ul {
                    -webkit-box-pack: start;
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                }
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional nav ul li a {
                font-size: .86rem;
                font-family: SimplonBP-Regular,oiTextMedium, sans-serif;
                color: ${props.colorText};
                text-transform: uppercase;
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional nav ul li a.active {
                color: ${props.colorTextHover};
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-institutional-block .footer-institutional nav ul li a {
                    text-transform: none;
                    margin-right: 1.5rem;
                    font-size: .98rem;
                    color: ${props.colorText};
                    font-family: SimplonBP-Regular,oiTextRegular, sans-serif;
                }
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional .oiAz div {
                width: 100%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional .oiAz div .oiAzButton {
                font-family: SimplonBP-Regular,SimplonBP-Regular;
                display: block;
                width: 100%;
                position: relative;
                font-size: .98rem;
                margin-top: 1.05rem;
                margin-bottom: 1.05rem;
                padding: 1.35rem 0 1.28rem;
                text-align: center;
                border-radius: .09rem;
                color: ${props.colorButtonText};
                -webkit-transition: background-color .21s ease;
                transition: background-color .21s ease;
                text-decoration: none;
                background-color: ${props.colorButtons};
            }
            
            .supportFooterMenu .footer-institutional-block .footer-institutional .oiAz div .oiAzButton:hover {
                background-color: ${props.colorButtonsHover};
            }
            
            @media screen and (min-width:734px) {
                .supportFooterMenu .footer-institutional-block .footer-institutional .oiAz div .oiAzButton {
                    padding: .98rem 3.15rem;
                }
            }
            
            .supportFooterMenu .containerSelfCare {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                margin-top: .75rem;
            }
            
            .supportFooterMenu .containerSelfCare .selfCare {
                font-family: SimplonBP-Regular,SimplonBP-Regular;
                height: 1.5rem;
                font-size: .99rem;
                margin-right: 1.12rem;
                letter-spacing: .01rem;
            }
            
            @media screen and (min-width:1024px) {
                .supportFooterMenu .containerSelfCare .selfCare {
                    margin-right: 4.88rem;
                    margin-right: 3.38rem;
                }
            }
            
            .supportFooterMenu .containerSelfCare .selfCare a {
                color: ${props.colorText};
            }
            
            .supportFooterMenu .containerSelfCare .selfCare a:hover {
                color: ${props.colorTextHover};
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia {
                font-size: .75rem;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a.facebook span svg {
                width: .52rem;
                height: 1.42rem;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a.twitter span svg {
                width: 1.05rem;
                height: 1.05rem;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a.googlemais span svg {
                width: 1.42rem;
                height: 1.42rem;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a.youtube span {
                margin-right: 0;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a.youtube span svg {
                width: 1.42rem;
                height: 1.42rem;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a span {
                margin-right: .9rem;
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a span svg {
                fill: ${props.colorButtons};
            }
            
            .supportFooterMenu .containerSelfCare .socialMedia a:hover span svg {
                fill: ${props.colorButtonsHover};
            }
            `}
            </style>
        </>
    )
}
export default footerParametrizado
