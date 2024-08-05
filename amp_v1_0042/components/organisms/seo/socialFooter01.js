
// Footer01 usado na HOME - layout Portal Oi SEO.

import React from 'react';
import Icon from '../../atoms/atIcon/index.js';
import Div from '../../atoms/atDiv/index.js';

const SocialFooter01 = function(props){
  var cidade = "Rio de Janeiro";
  if(props.cidade!=undefined){
    cidade = props.cidade
  }
  console.log('Rodando /views/organisms/footer01.jsx - layout Portal Oi SEO');
  return(
    <div >
      <div className="SocialFooter01div">
      <Div display="horizontal">
        <div>
          <a href="/meuvvc/">
            Atendimento ao cliente
          </a>
        </div>
        <div>
          <a className="SocialFooter01a" href="https://www.facebook.com/OiOficial/">
            <Icon type="facebook" color="#000000" width="30px" heigth="30px"/>
          </a>
        </div>
        <div>
          <a className="SocialFooter01a" href="https://twitter.com/vvc_oficial">
            <Icon type="twitter" color="#000000" width="30px" heigth="30px"/>
          </a>
        </div>
        <div>
          <a className="SocialFooter01a" href="https://www.youtube.com/user/oi/">
            <Icon type="youtube" color="#000000" width="30px" heigth="30px"/>
          </a>
        </div>
      </Div>
      </div>
      <style jsx>{`
        .SocialFooter01{
          align-items: center;
          color: rgb(0, 0, 0);
          display: flex;
          font-family: oiTextRegular, sans-serif;
          font-size: 16px;
          justify-content: space-between;
          margin-bottom: 0px;
          margin-left: 32.5px;
          margin-right: 32.5px;
          margin-top: 0px;
          max-width: 960px;
          padding-bottom: 34.88px;
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 22.56px;
          visibility: visible;
          -webkit-box-align: center;
          -webkit-box-pack: justify;
          -webkit-font-smoothing: antialiased;
        }
.SocialFooter01div{align-items: center;
  color: rgb(0, 0, 0);
  display: block;
  font-family: oiTextRegular, sans-serif;
  font-size: 12px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  visibility: visible;
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  }
        .SocialFooter01a{
          border-bottom-left-radius: 1.44px;
          border-bottom-right-radius: 1.44px;
          border-top-left-radius: 1.44px;
          border-top-right-radius: 1.44px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          display: inline;
          font-family: oiTextRegular, sans-serif;
          font-size: 12px;
          height: auto;
          margin-bottom: 0px;
          margin-left: 0px;
          margin-right: 0px;
          margin-top: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 0px;
          text-decoration-color: rgb(255, 255, 255);
          text-decoration-line: none;
          text-decoration-style: solid;
          visibility: visible;
          width: auto;
          -webkit-font-smoothing: antialiased;
          
        }
      `}</style>
    </div>
)}

export default SocialFooter01

/*


var VarModo = "html"

class footer01 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/footer01.jsx - layout Portal Oi SEO');
    return (
      <footer class="false">
        <h2 class="hidden">Footer Portal Oi</h2>


        <section class="footer">
          <div class="container">
            <div class="footer-nav">
              <h3 class="hidden">Footer Categories</h3>
              <div class="footer-category">
                <div class="link-title">
                  <div class="iconLink small-only">
                    <a data-context="" href="/combo/">
                      <span>
                      <Img src="" width="" height="" alt="Icone combo SVG" title="Icone combo SVG" class="" modo={VarModo}></Img>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" style="enable-background:new -255 347 100 100">
                          <polygon points="-255,443 -222,443 -222,441 -253,441 -253,355 -222,355 -222,353 -255,353" />
                          <polygon points="-156,353 -189,353 -189,355 -158,355 -158,441 -189,441 -189,443 -156,443" />
                        </svg>

                      </span>
                      <span>Combo</span>
                    </a>
                  </div>
                  <a class="medium-up" data-context="" href="/combo/">Combo</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/combo/">Planos</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/meuvvc/combo/">Atendimento</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/meuvvc/combo/">Serviços Adicionais</a>
                </div>
              </div>

              <div class="footer-category">
                <div class="link-title">
                  <div class="iconLink small-only">
                    <a data-context="" href="/tv-hd/">
                      <span>
                        <svg enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path d="M76.8 12.5H54l8.4-8.4-2.5-2.5-9.5 9.5-9.5-9.5-2.5 2.5 8.6 8.6H23.2C10.5 12.6 0 22.9 0 35.9v39.3c0 12.6 10.1 23.1 23.1 23.2h53.7c12.8 0 23.2-10.3 23.2-23.2V35.7c0-12.9-10.3-23.2-23.2-23.2zM21.5 94.4c-8.1-.8-15-6.6-17.2-14.2h17.2v14.2zm16.1 0H25.1V80h12.5v14.4zm39.3 0H41V80h54.9c-2.3 8.5-9.9 14.4-19 14.4zm19.8-19.7c0 .8 0 1.7-.2 2.5v-.6H3.9c0-.6-.2-1.2-.2-1.9V35.4c0-11.1 8.9-19.7 19.7-19.7h53.7c11.1 0 19.7 8.9 19.7 19.7v39.3z" />
                          <circle cx="75.2" cy="87.4" r="2.7" />
                        </svg>
                      </span>
                      <span>TV HD</span>
                    </a>
                  </div>
                  <a class="medium-up" data-context="" href="/tv-hd/">TV HD</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/tv-hd/">Planos</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/meuvvc/tv-hd/">Atendimento</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/meuvvc/tv-hd/">Serviços Adicionais</a>
                </div>
              </div>

              <div class="footer-category">
                <div class="link-title">
                  <div class="iconLink small-only">
                    <a data-context="" href="/celular/">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="51" viewBox="0 0 30 51">
                          <g class="icon-smartphone" fill="#222" fill-rule="evenodd">
                            <path d="M1.535 40.467h26.93V10.196H1.535v30.271zm26.93 4.61c0 .163-.217 4.108-4.39 4.423H6.157c-.689 0-4.13-.21-4.62-4.275v-3.258h26.929v3.11zM1.535 5.864c.016-.163.309-3.974 4.084-4.365h18.747c.138 0 3.514.151 4.099 4.322v2.875H1.535V5.865zM24.381 0H5.53C1.397.435.107 3.975 0 5.822v39.493C.677 50.837 5.604 51 6.156 51h17.98c4.452-.33 5.786-3.974 5.864-5.895V5.717C29.232.137 24.44 0 24.381 0z" /><path d="M14.348 45.401c0-.685.586-1.242 1.305-1.242.72 0 1.304.557 1.304 1.242 0 .693-.584 1.245-1.304 1.245-.719 0-1.305-.552-1.305-1.245zM13.043 4.976h3.914V3.732h-3.914z" />
                          </g>
                        </svg>
                      </span>
                      <span>Celular</span>
                    </a>
                  </div>
                  <a class="medium-up" data-context="" href="/celular/">Celular</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="/celular/">Planos</a></div>
                <div class="link-item">
                  <a data-context="" href="/meuvvc/celular/">Atendimento</a>
                </div>
                <div class="link-item">
                  <a data-context="" href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">Serviços pra Celular</a>
                </div>
              </div>
              
              
              <div class="footer-category">
                <div class="link-title">
                  <div class="iconLink small-only">
                    <a data-context="" href="/internet/">
                      <span>
                        <svg enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 58.5c0 15.6 12.7 28.3 28.3 28.3 15.6 0 28.3-12.7 28.3-28.3S65.6 30.2 49.9 30.2c-15.6 0-28.3 12.5-28.3 28.3zM43.4 35c-3 5.2-4.5 13.4-4.7 21.7H25.4c.8-10.4 8.1-19 18-21.7zm-18 25.3h13.3c.3 8.6 2 17.3 5.3 22.2C33.7 80 26 71.3 25.4 60.3zm24.5 23c-2.8 0-7.3-8.9-7.7-23h15.3c-.1 14.1-4.7 23-7.6 23zm6.2-.6c3.1-5 5-13.6 5.3-22.2h13.3c-.8 10.8-8.4 19.5-18.6 22.2zm18.5-26H61.3c-.2-8.3-1.9-16.7-4.7-21.7 9.8 2.7 17.2 11.3 18 21.7zm-16.9.1H42.3c.4-14 4.7-22.7 7.6-22.7 3.2 0 7.4 8.6 7.8 22.7z" /><path d="M59.4 3.8c-5-5-13.6-5-18.6 0l-38 38V100h94.5V41.7L59.4 3.8zm33.8 92.6H6.7V43.1L43.2 6.5c3.6-3.6 9.7-3.6 13.3 0l36.6 36.6v53.3z" />
                        </svg>
                      </span>
                      <span>Internet</span>
                    </a>
                  </div>
                    <a class="medium-up" data-context="" href="/internet/">Internet</a>
                  </div>
                <div class="link-item"><a data-context="" href="/internet/">Planos</a></div>
                <div class="link-item"><a data-context="" href="/meuvvc/internet/">Atendimento</a></div>
                <div class="link-item"><a data-context="" href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">Serviços pra Internet</a></div>
              </div>



              <div class="footer-category">
                <div class="link-title">
                  <div class="iconLink small-only">
                    <a data-context="" href="/fixo/">
                      <span>
                        <svg enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="75.7" cy="77.6" r="3.4" /><circle cx="51.6" cy="62.1" r="3.4" /><circle cx="39.6" cy="62.1" r="3.4" /><circle cx="51.6" cy="50.1" r="3.4" /><circle cx="39.6" cy="50.1" r="3.4" /><path d="M70.6 55.4h-5.2V8.6H29.3V0h-3.4v55.6C15.3 57.3 7 66.6 7 77.7c0 12.4 10 22.4 22.4 22.4h41.5c12.5 0 22.4-10 22.4-22.4S82.9 55.4 70.6 55.4zM29.3 12.1H62v22.5H29.3V12.1zm0 46.7V38H62v37.9H29.3V58.8zM70.6 97H29.1C18.6 97 10 88.6 10 77.9c0-9.4 6.7-17.1 15.5-18.6v20.2h39.7V59h5.2c10.5 0 19.1 8.5 19.1 19.1 0 10.6-8.4 18.9-18.9 18.9z" /></svg>
                      </span>
                      <span>Fixo</span>
                    </a>
                  </div>
                  <a class="medium-up" data-context="" href="/fixo/">Fixo</a>
                </div>
                <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/fixo/">Planos</a></div>
                <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/meuvvc/fixo/">Atendimento</a></div>
                <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/meuvvc/fixo/">Serviços Adicionais</a></div>
              </div>


            </div>
          </div>
        </section>


        <section class="supportFooterMenu">
          <div class="footer-region container">

            <div class="footer-regionalization">
              
              
              <div class="logoFooter">
                <a data-context="" href="https://www.vvcestudio.com.br">
                  <span>
                  <Img src="" width="" height="" alt="Logo roda pe SVG" title="Logo roda pe SVG" class="" modo={VarModo}></Img>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 528.1" enable-background="new 0 0 612 528.1">
                      <linearGradient id="vvc-logo-purple-3-gradient" gradientUnits="userSpaceOnUse" x1="84.947" y1="264.026" x2="538.17" y2="264.026">
                        <stop offset="0" style="stop-color:#E9278B" />
                        <stop offset=".062" style="stop-color:#D528AB" />
                        <stop offset=".136" style="stop-color:#C129C9" />
                        <stop offset=".214" style="stop-color:#B229E1" />
                        <stop offset=".297" style="stop-color:#A72AF2" />
                        <stop offset=".387" style="stop-color:#A12AFC" />
                        <stop offset=".5" style="stop-color:#9F2AFF" />
                        <stop offset=".598" style="stop-color:#9C2DFF" />
                        <stop offset=".676" style="stop-color:#9237FF" />
                        <stop offset=".748" style="stop-color:#8248FF" />
                        <stop offset=".816" style="stop-color:#6A60FF" />
                        <stop offset=".881" style="stop-color:#4C7FFF" />
                        <stop offset=".943" style="stop-color:#28A4FF" />
                        <stop offset="1" style="stop-color:#00CDFF" />
                      </linearGradient>
                      <path fill="url(#vvc-logo-purple-3-gradient)" d="M308.2 501.4c61.4 11.9 152 3.5 152-102.8 0-170.7 127.6-196.4 56.5-299.5-86-124.9-376.4-97.1-423 85.8-41.4 162 70.9 288.7 214.5 316.5z" />
                      <path fill="#FFFFFF" d="M383.9 216.1c11.9 0 21.5-9.6 21.5-21.5 0-11.8-9.6-21.5-21.5-21.5-11.8 0-21.4 9.6-21.4 21.5s9.6 21.5 21.4 21.5zm.3 15.9c-12.1 0-21.9 28.7-21.9 64.1 0 35.4 9.8 64.1 21.9 64.1 12.1 0 21.9-28.7 21.9-64.1 0-35.4-9.8-64.1-21.9-64.1zm-97.5 0c-36 0-59.9 28.5-59.9 64.1 0 35.7 23.9 64.1 59.9 64.1 35.9 0 59.7-28.4 59.7-64.1 0-35.7-23.8-64.1-59.7-64.1zm0 98c-16.5 0-25.6-16.9-25.6-34.1 0-17.2 9.1-33.6 25.6-33.6 16.4 0 25.5 16.5 25.5 33.6 0 17.2-9.1 34.1-25.5 34.1z" />
                    </svg>
                  </span>
                  <span></span>
                </a>
              </div>


              <h3 class="hidden">Regionalization</h3>
              <div class="Modal__wrapper ">
                <a class="regionName medium-up" data-context="">
                  <span></span>
                  <span class="region-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M97.9 24.4c-3.3-3.3-7.8-2.2-11.1 0L50.3 58.7 13.7 25.5c-3.3-3.3-7.8-4.4-11.1-1.1-3.3 2.2-3.3 7.8-1.1 11.1l43.2 41c2.2 1.1 3.3 1.1 5.5 1.1s3.3-1.1 4.4-2.2l43.2-41c3.4-3.4 2.3-7.8.1-10z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div class="containerSelfCare">
              <div class="selfCare medium-up">
                <a href="/meuvvc/">Atendimento ao cliente</a>
              </div><div class="socialMedia medium-up">
                <a class="facebook" data-context="" href="https://www.facebook.com/OiOficial/">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 8 15">
                      <path d="M6 3l1.968.002L8 0H6C4.111 0 2 1.936 2 4v1H0v3h2v7.001h3V8h3V5H5V4c0-.493.731-1 1-1z" class="cls-1" />
                    </svg>
                  </span>
                  <span></span>
                </a>
                <a class="twitter" data-context="" href="https://twitter.com/vvc_oficial">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 16 14">
                      <path d="M14.2 2.112c1.153-.789 1.254-1.87 1.254-1.87-.372.539-2.034.827-2.034.827C11.996-.692 9.861.242 9.861.242c-2.508.933-2.135 3.987-2.135 3.987C3.353 4.157.979.637.979.637a3.818 3.818 0 0 0 .899 4.616c-.492.054-1.373-.359-1.373-.359-.034 2.64 2.576 3.575 2.576 3.575-.237.036-1.356.036-1.356.036.577 2.155 3.017 2.37 3.017 2.37-2.372 1.868-4.745 1.546-4.745 1.546 2.339 1.868 4.656 1.671 6.237 1.437 3.885-.577 5.966-3.557 5.966-3.557 2.746-3.701 1.83-6.826 2.271-7.005l.023-.011c.453-.216 1.502-1.606 1.502-1.606-.745.43-1.796.433-1.796.433z" class="cls-1" />
                    </svg>
                  </span>
                  <span></span>
                </a>
                <a class="youtube" data-context="" href="https://www.youtube.com/user/oi/">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 22.81 15.88">
                      <path d="M22.618 4.472c-.088-.954-.278-1.891-.685-2.766-.339-.727-.827-1.319-1.678-1.45-.5-.078-1.01-.103-1.518-.132C14.108-.139 3.788.139 3.243.161 1.959.214 1.163.855.74 2.024a7.975 7.975 0 0 0-.287.929c-.468 2.04-.41 4.115-.408 6.186.001 1.426.134 2.837.524 4.217.484 1.71 1.227 2.271 2.992 2.38 6.383.398 17.185-.173 16.524-.086.754-.099 1.268-.492 1.656-1.108a4.43 4.43 0 0 0 .565-1.405c.644-2.869.58-5.765.312-8.665zm-7.587 3.239c-1.836 1.176-3.658 2.376-5.485 3.565-.06.039-.131.061-.259.119V3.403c.49.317.921.593 1.349.873 1.452.953 2.899 1.913 4.357 2.857.306.198.449.315.038.578z" class="cls-1" />
                    </svg>
                  </span>
                  <span></span>
                </a>
              </div></div></div><div class="footer-institutional-block">
            <div class="container">
              <div class="footer-institutional">

                <nav>
                  <h3 class="hidden">footer menu</h3>
                  <div class="hotlinksMobile small-only">
                    <ul>
                      <li><a class="active" data-context="" href="https://www.vvcestudio.com.br/">Você</a></li>
                      <li><a class="false" data-context="" href="https://www.vvcestudio.com.br/empresas/">Empresas</a></li>
                      <li><a class="false" data-context="" href="https://www.vvcestudio.com.br/lp/franquias/">Franquias</a></li>
                      <li><a class="false" data-context="" href="https://www.vvcestudio.com.br/ri/">Investidores</a></li>
                    </ul>
                  </div>
                  <div class="footerNav medium-up">
                    <ul>
                      <li><a data-context="" href="https://www.vvcestudio.com.br/empresas/">Empresas</a></li>
                      <li><a data-context="" href="https://www.vvcestudio.com.br/lp/franquias/">Franquias</a></li>
                      <li><a data-context="" href="https://www.vvcestudio.com.br/ri/">Investidores</a></li>
                      <li><a data-context="" href="/oi/sobre-a-oi/">Sobre a Oi</a></li>
                      <li><a data-context="" href="/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/">Lojas da Oi</a></li>
                      <li class="large-up"><a data-context="" href="/oi/celular-legal/">Celular Legal</a></li>
                      <li class="large-up"><a data-context="" href="/outras-operadoras/">Outras Operadoras</a></li>
                      <li class="extra-large-up"><a data-context="" href="/oi/sobre-a-oi/regulamentacao/informacoes/conselho-de-usuarios/2017-2019/">Conselho de Usuários</a></li>
                      <li class="extra-large-up"><a data-context="" href="https://secure-web.cisco.com/1EH1B-CLV31IF8vcULmniGDoJim0uL59SwzKlscoLeueHtIl9uJoz5RjL9Tvf-ob6T0NnEICsBlVygnHSJ9JOJn_Wh864Xja_tDA3-n_zSACAQLyCjI8IKhL7tmgG0Oo86Nulwacs7dmiyBCfG9_ot5lrEoKD3ARvmc3fIDIj4GLfvvzMFzPdNl_Uw5Jtsd0wQP4e7wS1-im491uGVbXNt_M9gAAcYxp6x2tdS587TVv6W2jeUh0PX3OjEiDcLumG8F1W__DbZUhK2p6QL_c3PxBoxmhciwy7QAdnyVqbY0CAD2omGxEaW0ixivc_R9lZ/https%3A%2F%2Fwww.oiconselhodeusuarios.com.br">Eleições</a></li>
                    </ul>
                  </div>
                </nav>

                <div class="oiAz">
                  <div class="Modal__wrapper ">
                    <a class="oiAzButton" data-context="">
                      <span >Oi de A a Z</span>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

//Index.propTypes = {  title: PropTypes.string, };
module.exports = footer01;
*/