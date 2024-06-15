// Content01 é usado na HOME - layout Portal Oi vignette.

import React from 'react';
import Img from '../../atoms/atImg/index.js';
import MenuNav02A from './menuNav02A.js';
import MenuNav02B from './menuNav02B.js';
import MenuNav02C from './menuNav02C.js';
import MenuNav02D from './menuNav02D.js';
import MenuNav02E from './menuNav02E.js';
import MenuNav02F from './menuNav02F.js';
import MenuNav02G from './menuNav02G.js';
import MenuNav02H from './menuNav02H.js';
import MenuNav02I from './menuNav02I.js';

//<link rel="stylesheet" href="/ArquivosEstaticos/oi/style/menu/menu.css" />
//<link rel="stylesheet" href="/ArquivosEstaticos/oi/vvc-pra-voce/planos-servicos/cobertura/css/cobertura.css" />

const Content02 = props => {
    console.log('Rodando /views/organisms/content02.jsx - layout Portal Oi VIGNETTE');
    return (
      <div>
        <noscript>
          <iframe src="//www.googletagmanager.com/ns.html?id=GTM-KR9G4JB"
            height="0" width="0" className="iframe"></iframe>
        </noscript>
      <header class="headprincipal">
        <div class="limite">
          <div>
            <div>
              <h1 class="logo"><a href="http://www.vvc.com.br/" title="Oi"><Img src="/ArquivosEstaticos/oi/images/logo-header.png" /></a></h1>
              <div class="escolhacidade">
                <h6>RIO DE JANEIRO, RJ</h6>
                <a id="trocaEstado" class="btTrocaEstado seta-01" tabindex="1" title="Alterar localidade" href="javascript:trocaEstado();">Alterar localidade</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="formlogin">
                <iframe
                  src="https://minha.vvc.com.br/ArquivosEstaticos/minhavvc/HeaderLogin/index.html?dominio=www.vvc.com.br"
                  className="iframe2" 
                  allowtransparency="true"
                  scrolling="no"
                  frameborder="0"
                  width="366"
                  height="48"
                  id="login-minhavvc">
                </iframe>
              </div>
              <div class="formbusca">
                <label>
                  <input type="text" value="BUSCA" id="" class="iptBusca" />
                  <input type="image" src="/ArquivosEstaticos/oi/images/btlupa.png" title="Buscar" alt="Buscar" class="iptLupa sembt" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="minimenu">
          <div class="limite">
            <div id="minimenuopt">
              <MenuNav02A></MenuNav02A>
            </div>
            <div id="minimenuother">
              <MenuNav02B></MenuNav02B>
            </div>
          </div>
        </div>
      </header>

      <div class="menuprincipal">
        <div class="limite">
          <div>
            <div>
              <ul class="mn-main">
                <li>
                  <a href="/oi/vvc-pra-voce/planos-servicos" title="Planos e Serviços"><img class="atvSubLink" src="/ArquivosEstaticos/oi/images/menus/menu-2013/planos-e-servicos/m-m-5.gif" imgdefault="/ArquivosEstaticos/oi/images/menus/menu-2013/planos-e-servicos/m-m-5.gif" imghover="/ArquivosEstaticos/oi/images/menus/menu-2013/planos-e-servicos/m-m-5_on.gif" imgAtvLink="/ArquivosEstaticos/oi/images/menus/menu-2013/planos-e-servicos/m-m-5_at.gif" alt="Planos e Serviços" /></a>
                  <div class="sm">
                    <div class="bg-sm">
                      <div class="topo"></div>
                      <div class="miolo-submenu">
                        <MenuNav02C></MenuNav02C>
                        <MenuNav02D></MenuNav02D>
                        <MenuNav02E></MenuNav02E>
                        <MenuNav02F></MenuNav02F>
                        <MenuNav02G></MenuNav02G>
                      </div>
                      <div class="baixo"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/oi/vvc-pra-voce/loja-online" title="Loja Online"><Img class="" src="/ArquivosEstaticos/oi/images/menus/menu-2013/loja-online/m-m-1.gif" imgdefault="/ArquivosEstaticos/oi/images/menus/menu-2013/loja-online/m-m-1.gif" imghover="/ArquivosEstaticos/oi/images/menus/menu-2013/loja-online/m-m-1_on.gif" imgAtvLink="/ArquivosEstaticos/oi/images/menus/menu-2013/loja-online/m-m-1_at.gif" alt="Loja Online" /></a>
                  <div class="sm">
                    <div class="bg-sm">
                      <div class="topo"></div>
                      <a class="banner" target="_self" href="/oi/vvc-pra-voce/planos-servicos/internet/internet-pra-casa/vvc-velox-banda-larga" title="" > <Img src="/ArquivosEstaticos/oi/vvc-pra-voce/loja-online/images/banner_flutuante__menususpenso.jpg" alt="Banda Larga" /></a>
                      <div class="miolo-submenu">
                        <MenuNav02H></MenuNav02H>
                        <MenuNav02I></MenuNav02I>

                        <nav>
                          <h3>
                            <a href="#">Consultas</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido" title="Acompanhe seu Pedido">Acompanhe seu Pedido</a>
                            </li>
                            <li>
                              <a target="_blank" href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo" title="Acompanhe a Instalação do seu Oi Fixo">Acompanhe a Instalação do seu Oi Fixo</a>
                            </li>
                          </ul>
                        </nav>

                        <nav>
                          <h3>
                            <a href="#">Recarga</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga" title="Recarga Online">Recarga Online</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br" title="Acompanhe sua recarga">Acompanhe sua recarga</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="baixo"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/oi/vvc-pra-voce/atendimento" title="Atendimento">
                    <Img class="" src="/ArquivosEstaticos/oi/images/menus/menu-2013/atendimento/m-m-2.gif" imgdefault="/ArquivosEstaticos/oi/images/menus/menu-2013/atendimento/m-m-2.gif" imghover="/ArquivosEstaticos/oi/images/menus/menu-2013/atendimento/m-m-2_on.gif" imgAtvLink="/ArquivosEstaticos/oi/images/menus/menu-2013/atendimento/m-m-2_at.gif" alt="Atendimento" />
                  </a>
                  <div class="sm">
                    <div class="bg-sm">
                      <div class="topo"></div>
                      <a class="banner" target="_blank" href="/oi/vvc-pra-voce/minha-oi/debito-automatico" title="" > <Img src="" alt="Confira" /></a>
                      <div class="miolo-submenu">

                        <nav>
                          <h3>
                            <a href="#">Tire suas dúvidas</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=98" title="TV">TV</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=94" title="Internet pra Casa">Internet pra Casa</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=96" title="Internet Móvel">Internet Móvel</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=87" title="Móvel Pós-pago">Móvel Pós-pago</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=88" title="Móvel Pré-pago">Móvel Pré-pago</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=89" title="Móvel Controle">Móvel Controle</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=91" title="Fixo">Fixo</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/?c=99" title="Minha VVC">Minha VVC</a>
                            </li>
                            <li>
                              <a href="http://www.vvc.com.br/oi/vvc-pra-voce/atendimento" title="Mais Populares">Mais Populares</a>
                            </li>
                            <li>
                              <a href="http://guiadeaparelhos.vvc.com.br" title="Guia de Aparelhos">Guia de Aparelhos</a>
                            </li>
                          </ul>
                        </nav>


                        <nav>
                          <h3>
                            <a href="#">Consultas</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido" title="Acompanhe seu Pedido">Acompanhe seu Pedido</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/planos-servicos/cobertura" title="Consulta de Cobertura">Consulta de Cobertura</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento#nao-encontrou" title="Central de Atendimento">Central de Atendimento</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi" title="Endereço das Lojas">Endereço das Lojas</a>
                            </li>
                          </ul>
                        </nav>


                        <nav>
                          <h3>
                            <a href="#">Conta</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento/entenda-sua-conta" title="Entenda sua Conta">Entenda sua Conta</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento/segunda-via" title="2ª Via de Conta">2ª Via de Conta</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br/portal/site/minhavvc/CadastrarUsuario" title="Cadastre-se na Minha VVC">Cadastre-se na Minha VVC</a>
                            </li>
                            <li>
                              <a href="http://faq.vvc.com.br/como-faco-para-efetuar-o-pagamento-da-minha-conta" title="Onde Pagar sua Conta">Onde Pagar sua Conta</a>
                            </li>
                          </ul>
                        </nav>


                      </div>
                      <div class="baixo"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/oi/vvc-pra-voce/minha-oi/conheca" title="Minha VVC">
                    <Img class="" src="/ArquivosEstaticos/oi/images/menus/menu-2013/minha-oi/m-m-3.gif" imgdefault="/ArquivosEstaticos/oi/images/menus/menu-2013/minha-oi/m-m-3.gif" imghover="/ArquivosEstaticos/oi/images/menus/menu-2013/minha-oi/m-m-3_on.gif" imgAtvLink="/ArquivosEstaticos/oi/images/menus/menu-2013/minha-oi/m-m-3_at.gif" alt="Minha VVC" />
                  </a>
                  <div class="sm">
                    <div class="bg-sm">
                      <div class="topo"></div>
                      <a class="banner" target="_blank" href="https://login.vvc.com.br/nidp/idff/sso?id=sso&amp;sid=6&amp;option=credential&amp;sid=6" title="" > <Img src="/ArquivosEstaticos/oi/images/menus/menu-2013/minha-oi/banner-vvc-tv-hd-minha-vvc.jpg" alt="https://login.vvc.com.br/nidp/idff/sso?id=sso&amp;sid=6&amp;option=credential&amp;sid=6" /></a>
                      <div class="miolo-submenu">

                        <nav>
                          <h3>
                            <a href="#">Entenda</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/conheca" title="Sobre a Minha VVC">Sobre a Minha VVC</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br/portal/site/minhavvc/CadastrarUsuario" title="Cadastre-se">Cadastre-se</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br/portal/site/minhavvc/SolicitarDesbloqueioSenha" title="Resgate sua Senha">Resgate sua Senha</a>
                            </li>
                            <li>
                              <a href="https://login.vvc.com.br/nidp/idff/sso?id=sso&sid=6&option=credential&sid=6" title="Acesse Agora">Acesse Agora</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/aplicativo" title="Aplicativo Minha VVC">Aplicativo Minha VVC</a>
                            </li>
                          </ul>
                        </nav>

                        <nav>
                          <h3>
                            <a href="#">Resolva</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento/segunda-via" title="2ª Via de Conta">2ª Via de Conta</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/atendimento/minha-oi/conta-online" title="Conta Online">Conta Online</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/debito-automatico" title="Débito Automático">Débito Automático</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/consultar-ultimas-contas" title="Consulta Últimas Contas">Consulta Últimas Contas</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/solicitar-reparo-fixo" title="Solicitação Reparo Fixo">Solicitação Reparo Fixo</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/aumentar-velocidade-internet" title="Aumente sua Velocidade">Aumente sua Velocidade</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/saldo-minutos-sms" title="Saldo de Minutos e SMS">Saldo de Minutos e SMS</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/torpedos" title="Torpedos">Torpedos</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/vvc-pontos" title="Oi Pontos">Oi Pontos</a>
                            </li>
                          </ul>
                        </nav>

                        <nav>
                          <h3>
                            <a href="#">Recarga</a>
                          </h3>
                          <ul>
                            <li>
                              <a href="https://minha.vvc.com.br/" title="Consulte seu saldo">Consulte seu saldo</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br/portal/site/minhavvc/menuitem.e451ce2c3a3f4c111bd71bd7246d02a0/?vgnextoid=f094814984f9e310VgnVCM10000031d0200aRCRD" title="Repetir últimas recargas">Repetir últimas recargas</a>
                            </li>
                            <li>
                              <a href="https://minha.vvc.com.br/" title="Histórico de recargas">Histórico de recargas</a>
                            </li>
                            <li>
                              <a href="/oi/vvc-pra-voce/minha-oi/recarregar-pre-pago" title="Recarregue na Minha VVC">Recarregue na Minha VVC</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="baixo"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:function();" title="Recarregue Agora"><Img class="" src="/ArquivosEstaticos/oi/images/menus/menu-2013/recarregue-agora/m-m-6.gif" imgdefault="/ArquivosEstaticos/oi/images/menus/menu-2013/recarregue-agora/m-m-6.gif" imghover="/ArquivosEstaticos/oi/images/menus/menu-2013/recarregue-agora/m-m-6_on.gif" imgAtvLink="/ArquivosEstaticos/oi/images/menus/menu-2013/recarregue-agora/m-m-6_on.gif" alt="Recarregue Agora" /></a>
                  <div class="sm">
                    <div class="bg-sm">
                      <div class="topo"></div>
                      <div class="miolo-submenu">
                      </div>
                      <div class="baixo"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <ul class="atendimentomundo">
              </ul></div>
          </div>
        </div>
      </div>
      <header class="headerarea">
        <div class="imgarea">
          <br />
          <div>
            <div>
            </div>
          </div>
        </div>
        <div class="breadcrumb">
          <div>
            <div>
              <strong>Você está em:</strong>
              <a href="/oi/vvc-pra-voce">Oi Pra Você </a> /
              <a href="/oi/vvc-pra-voce/planos-servicos">Planos e Serviços </a>
            </div>
          </div>
        </div>
        <h1>
          <div>
            <div>
              Cobertura
            </div>
          </div>
        </h1>
        <div>
          <div>
          </div>
        </div>
      </header>


      <div class="main">
        <div class="limite">
          <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
            <tr>
              <td width="100%" valign="top" align="left">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td>
                      <div>
                        <div>
                          <div class="main">
                            <div class="localheader">
                              <h2>Mapa de Cobertura</h2>
                              <h3>Consulte a área de cobertura e a disponibilidade dos serviços móveis da Oi</h3>
                            </div>
                            <div class="limite">
                              <div class="contentMiolo clearfix">
                              
                                <iframe 
                                  name="framecobertura" 
                                  id="framecobertura" 
                                  scrolling="no" 
                                  width="940" 
                                  height="640" 
                                  frameborder="no" 
                                  SRC="">
                                </iframe>

                                <div class="title-planos">Planos</div>
                                <h4 class="title-conheca-planos">Conheça os planos com 4G da vvc. A sua internet mais rápida.</h4>
                                <div class="caixa">
                                  <div class="esquerdo">
                                    <div class="box-esq" id="pos">
                                      <div class="conteudo">
                                        <div class="ico-cel"></div>
                                        <h3>oi mais</h3>
                                        <p>
                                          Seu pós com mais liberdade
                                      <a name="Pós-Pago" href="https://www.vvc.com.br/celular/pos-pago/">conheça agora</a>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="box-dir" id="controle">
                                      <div class="conteudo">
                                        <div class="ico-cel"></div>
                                        <h3>oi mais controle</h3>
                                        <p>
                                          Valor fixo no cartão todo mês
                                          <br />
                                          <br />
                                          <a name="Oi Controle" href="https://www.vvc.com.br/celular/controle/">conheça agora</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="direito">
                                    <div class="box-dir" id="pre">
                                      <div class="conteudo">
                                        <div class="ico-cel"></div>
                                        <h3>Pré da Oi</h3>
                                        <p>
                                          Troque minutos e internet
                                          <br />
                                          <br />
                                          <a name="Pre-Pago" href="https://www.vvc.com.br/celular/pre-pago/">conheça agora</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="caixa">
                                  <div class="esquerdo">
                                    <div class="box-esq" id="roaming">
                                      <div class="conteudo">
                                        <div class="ico-cel"></div>
                                        <h3>Roaming internacional</h3>
                                        <p>Use seu telefone celular da Oi pra falar e navegar em mais de 170 países
                                    <a class="roaming-link" name="Roaming internacional" href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/servicos/servicos-pro-seu-vvc-movel/roaming-internacional/">conheça as tarifas</a>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="box-dir" id="movel">
                                      <div class="conteudo">
                                        <div class="ico-4g"></div>
                                        <h3>internet móvel</h3>
                                        <p>
                                          Navegue¹ no tablet e no computador
                                      <br />
                                          <br />
                                          <a name="Internet móvel" href="https://www.vvc.com.br/internet-movel/">conheça agora</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="direito">
                                    <div class="box-dir link" id="celular">
                                      <div class="conteudo">
                                        <div class="ico-inter"></div>
                                        <h3>Internet para<br />celular</h3>
                                        <p>Fique sempre conectado
                                    <a name="Internet para celular" href="https://www.vvc.com.br/internet-movel/">conheça agora</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <span class="legal">¹ Não disponível no Internet Móvel 300 MB.</span>
                                </div>
                                <span class="legal-roaming">*Serviço de Roaming Internacional disponível somente para planos pós pagos. <a href="/oi/vvc-pra-voce/atendimento/roaming-nacional-comunicado">Comunicado sobre Roaming Nacional</a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <Img src="/portal/images/misc/spacer.gif" width="100" height="1" border="0" alt="" />
              </td>
            </tr>
          </table>
        </div >
      </div >
      
      <div>
        <div>
          <script type="text/javascript" src="/ArquivosEstaticos/oi/scripts/planos/vvc.rules.planos.js"></script>
          <div class="sitemap">
            <div class="limite">

              <h2 class="tit titEuquero">Eu quero</h2>

              <nav>
                <h5>Conhecer os produtos</h5>
                <ul>
                  <li>
                    <a title="Telefone Móvel" href="/oi/vvc-pra-voce/vvc-movel/planos/conheca-os-planos">Telefone Móvel</a>
                  </li>
                  <li>
                    <a title="Telefone Fixo" href="/oi/vvc-pra-voce/vvc-fixo/planos/conheca-os-planos">Telefone Fixo</a>
                  </li>
                  <li>
                    <a title="Banda Larga" href="/oi/vvc-pra-voce/planos-servicos/internet/internet-pra-casa/vvc-velox-banda-larga">Banda Larga</a>
                  </li>
                  <li>
                    <a href="/oi/vvc-pra-voce/planos-servicos/internet/internet-movel/vvc-internet-movel">Internet Móvel Banda Larga</a>
                  </li>
                  <li>
                    <a title="Plano de Dados" href="/oi/vvc-pra-voce/internet/planos/vvc-dados-pro-seu-vvc-movel/">Plano de Dados</a>
                  </li>
                  <li>
                    <a title="Combo com Fixo, Móvel, DDD e Internet" href="/oi/vvc-pra-voce/vvc-conta-total/planos/conheca-os-planos/">Combo</a>
                  </li>
                  <li>
                    <a title="TV por assinatura" href="/oi/vvc-pra-voce/vvc-tv">TV por assinatura</a>
                  </li>
                  <li>
                    <a title="Longa Distância" href="/oi/vvc-pra-voce/31/">Longa Distância</a>
                  </li>
                  <li>
                    <a title="Cartão de crédito Oi" href="/oi/vvc-pra-voce/cartao-de-credito-oi">Cartão de crédito Oi</a>
                  </li>
                  <li>
                    <a title="Oi Carteira" href="/oi/vvc-pra-voce/vvc-para-comprar/vvc-carteira">Oi Carteira</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h5>Ver as ofertas</h5>
                <ul>
                  <li>
                    <a title="Oi Pré-pago" href="/oi/vvc-pra-voce/vvc-movel/planos/vvc-cartao/">Oi Pré-pago</a>
                  </li>
                  <li>
                    <a title="Oi Controle" href="/oi/vvc-pra-voce/vvc-movel/planos/vvc-controle/">Oi Controle</a>
                  </li>
                  <li>
                    <a title="Oi Conta" href="/oi/vvc-pra-voce/vvc-movel/planos/#!plano/vvc-conta">Oi Conta</a>
                  </li>
                  <li>
                    <a title="Internet no seu Oi" href="/oi/vvc-pra-voce/internet/planos/vvc-dados-pro-seu-vvc-movel/">Internet no seu Oi</a>
                  </li>
                  <li>
                    <a title="Oi Indica" href="/oi/vvc-pra-voce/vvc-movel/servicos/vvc-indica-conheca-o-programa/">Oi Indica</a>
                  </li>
                  <li>
                    <a title="Oi Pontos" href="/oi/vvc-pra-voce/vvc-pontos/">Oi Pontos</a>
                  </li>
                  <li>
                    <a title="Aparelhos" href="/oi/vvc-pra-voce/vvc-movel/aparelhos/conheca-os-aparelhos">Aparelhos</a>
                  </li>
                  <li>
                    <a title="Pacotes de Torpedos" href="/oi/vvc-pra-voce/vvc-movel/servicos/servicos-pro-seu-vvc-movel/pacotes-de-torpedos-sms/vvc-cartao-ou-vvc-controle">Pacote de SMS pro seu Oi Pré-pago e Oi Controle</a>
                  </li>
                  <li>
                    <a title="Internet pro seu Oi Pré-pago e Oi Controle" href="/oi/vvc-pra-voce/internet-movel/internet-celular-pre">Internet pro seu Oi Pré-pago e Oi Controle</a>
                  </li>
                  <li><a title="Banda Larga PNBL" href="/oi/vvc-pra-voce/planos-servicos/internet/planos/plano-nacional-de-banda-larga-(pnbl)">Plano Nacional de Banda Larga</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h5>Serviços Oi</h5>
                <ul>
                  <li>
                    <a title="Cancelamento de Produtos" href="https://login.vvc.com.br/nidp/idff/sso?id=sso&sid=0&option=credential&sid=0">Reclamação e Cancelamento de Produtos</a>
                  </li>
                  <li>
                    <a title="Recarregue seu Oi" href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga">Recarregue seu Oi</a>
                  </li>
                  <li>
                    <a title="Pacotes de Voz pro Oi Pré-pago e Oi Controle" href="/oi/vvc-pra-voce/vvc-movel/servicos/servicos-vvc-cartao/pacotes-de-voz">Pacotes de Voz pro Oi Pré-pago e Oi Controle</a>
                  </li>
                  <li>
                    <a title="Roaming Internacional" href="/oi/vvc-pra-voce/vvc-movel/servicos/servicos-pro-seu-vvc-movel/roaming-internacional/">Roaming Internacional</a>
                  </li>
                  <li>
                    <a title="Identificador de chamadas pro Oi Fixo" href="/oi/vvc-pra-voce/vvc-fixo/servicos/servicos-pro-seu-vvc-fixo/identificador-de-chamadas/">Identificador de chamadas pro Oi Fixo</a>
                  </li>
                  <li>
                    <a title="Caixa Postal Oi Fixo" href="/oi/vvc-pra-voce/vvc-fixo/servicos/servicos-pro-seu-vvc-fixo/caixa-postal/">Caixa Postal Oi Fixo</a>
                  </li>
                  <li>
                    <a title="Acompanhamento de pedidos" href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido">Acompanhe seu Pedido</a>
                  </li>
                  <li>
                    <a title="Portabilidade" href="/oi/vvc-pra-voce/vvc-movel/servicos/portabilidade/">Portabilidade</a>
                  </li>
                  <li>
                    <a title="Envie um Torpedo Web" href="/oi/vvc-pra-voce/vvc-torpedo-web/">Envie um Torpedo Web</a>
                  </li>

                </ul>
              </nav>
              <nav>
                <h5>Resolver minha vida online</h5>
                <ul>
                  <li>
                    <a title="Recarga online" href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga">Recarga</a>
                  </li>
                  <li>
                    <a title="Saldo de Consumo" href="http://faq.vvc.com.br/como-faco-para-consultar-o-saldo-e-a-validade-dos-creditos-do-meu-pre-pago" target="_blank">Saldo de Consumo</a>
                  </li>
                  <li>
                    <a title="2ª via de conta" href="http://faq.vvc.com.br/como-consigo-tirar-a-2-via-da-minha-conta" target="_blank">2ª via de conta</a>
                  </li>
                  <li>
                    <a title="Bloqueio por perda ou roubo" href="http://faq.vvc.com.br/como-bloqueio-meu-numero-por-perda-ou-roubo" target="_blank">Bloqueio por perda ou roubo</a>
                  </li>
                  <li>
                    <a title="Ativação e desativação de serviços" href="http://faq.vvc.com.br/como-ativo-desativo-servicos-no-meu-celular" target="_blank">Ativação e desativação de serviços</a>
                  </li>
                  <li>
                    <a title="Alteração da data de vencimento" href="http://faq.vvc.com.br/como-altero-a-data-de-vencimento-da-minha-conta-na-minha-oi" target="_blank">Alteração da data de vencimento</a>
                  </li>
                  <li>
                    <a title="Alteração de endereço de cobrança" href="http://faq.vvc.com.br/como-faco-para-alterar-o-endereco-de-recebimento-da-fatura-na-minha" target="_blank">Alteração de endereço de cobrança</a>
                  </li>
                  <li>
                    <a title="Fatura Oi Paggo" href="https://www.paggo.com.br/freeddom/web/holder/oi/login.do" target="_blank">Fatura Oi Paggo</a>
                  </li>
                  <li>
                    <a title="Fale com a Oi" href="/oi/vvc-pra-voce/atendimento#nao-encontrou">Fale com a Oi</a>
                  </li>
                  <li>
                    <a href="/oi/sobre-a-oi/regulamentacao/informacoes/telefone-pra-deficientes-auditivos">142 | CIC Pessoa com deficiência auditiva</a>
                  </li>
                  <li>
                    <a href="http://antivirus.vvc.com.br/instalar" title="Instalar Oi Antivírus" target="_blank">Instalar Oi Antivírus</a>
                  </li>
                  <li>
                    <a href="http://faq.vvc.com.br/faq-list/" title="Perguntas Frequentes" target="_blank">Perguntas Frequentes</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h5>Conhecer a Oi</h5>
                <ul>
                  <li>
                    <a title="Trabalhe na Oi" href="/oi/sobre-a-oi/gente/">Trabalhe na Oi</a>
                  </li>
                  <li>
                    <a class="lojas_atend_pref" title="Lojas de Atendimento Presencial" href="/ArquivosEstaticos/oi/docs/pdf/relacao-municipios.pdf" target="_blank">Lojas de Atendimento Presencial</a>
                  </li>
                  <li>
                    <a title="Sala de imprensa" href="/oi/sobre-a-oi/sala-de-imprensa/">Sala de imprensa</a>
                  </li>
                  <li>
                    <a title="Regulamentação" href="/oi/sobre-a-oi/regulamentacao/">Regulamentação</a>
                  </li>
                  <li>
                    <a title="Sustentabilidade" href="/oi/sobre-a-oi/empresa/sustentabilidade/politica-de-sustentabilidade">Sustentabilidade</a>
                  </li>
                  <li>
                    <a title="Conselho de usuários" href="/oi/sobre-a-oi/regulamentacao/informacoes/conselho-de-usuarios/conselho-de-usuarios-regionais">Conselho de usuários</a>
                  </li>
                  <li>
                    <a title="Visiting Brazil" href="/oi/vvc-pra-voce/planos-servicos/vvc-pre-paid-kit">Visiting Brazil</a>
                  </li>
                  <li>
                    <a title="Denuncie crimes na internet" href="/oi/sobre-a-oi/empresa/informacoes/denuncie-crimes-na-internet/">Denuncie crimes na internet</a>
                  </li>
                  <li>
                    <a title="Regras SAC" href="/oi/sobre-a-oi/regulamentacao/regras-sac/principais-regras">Regras SAC</a>
                  </li>
                  <li>
                    <a title="Código de Defesa do Consumidor" href="/ArquivosEstaticos/oi/docs/pdf/sobre_oi/6046 Livreto Codigo_web.pdf" target="_blank">Código de Defesa do Consumidor</a>
                  </li>
                  <li>
                    <a title="PROCON-RJ" href="http://www.procon.rj.gov.br/" target="_blank">PROCON-RJ</a>
                  </li>
                  <li>
                    <a title="Política de Privacidade" href="/oi/sobre-a-oi/empresa/informacoes/politica-de-privacidade/">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="/oi/sobre-a-oi/empresa/informacoes/9-digito" title="9º dígito">9º dígito</a>
                  </li>
                  <li>
                    <a title="Pesquisa de Qualidade" href="/ArquivosEstaticos/oi/docs/pdf/pesquisa_qualidade.pdf" target="_blank">Pesquisa de Qualidade</a>
                  </li>
                </ul>
              </nav>

              <nav>
                <h5>Sites Oi</h5>
                <ul class="sitesoi">
                    <li class="logooifuturo">
                      <a title="Oi Futuro" href="http://www.oifuturo.org.br/" target="_blank">
                        <Img src="/ArquivosEstaticos/oi/images/icooifuturo.gif" alt="Oi Futuro" />
                      </a>
                    </li>
                    <li class="logomundooi">
                      <a title="Mundo Oi" href="http://mundovvc.vvc.com.br/" target="_blank">
                        <Img src="/ArquivosEstaticos/oi/images/icomundooi2.png" alt="Mundo Oi" />
                      </a>
                    </li>
                    <li class="logooifm">
                      <a title="Oi FM" href="http://www.oifm.com.br/" target="_blank">
                        <Img src="/ArquivosEstaticos/oi/images/icooifm.gif" alt="Oi FM" />
                      </a>
                    </li>
                    <li class="logooiacontece">
                      <a title="Diversão Downloads" href="http://loja.vvc.com.br/portal" target="_blank">
                        <Img src="/ArquivosEstaticos/oi/images/logo-vvc-diversao-download.png" alt="Diversão Downloads" />
                      </a>
                    </li>
                </ul>
                <ul class="socialnetoi">
                    <li class="logooifacebook">
                      <a title="Facebook" href="https://www.facebook.com/OiOficial" target="_blank">Facebook</a>
                    </li>
                    <li class="logooitwitter">
                      <a title="Twitter" href="http://www.twitter.com/digaoi" target="_blank">Twitter</a>
                    </li>
                    <li class="logooigoogleplus">
                      <a title="Google+" href="https://plus.google.com/u/0/+Oi/posts" target="_blank">Google+</a>
                    </li>
                    <li class="logooiyoutube">
                      <a title="YouTube" href="http://www.youtube.com/oi" target="_blank">YouTube</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <footer>
              <div class="limite">
                <p class="pcopyright">
                  <Img src="/ArquivosEstaticos/oi/images/logo-oimae.png" alt="Logo Oi" />© Copyright 2000-<span class="anoAtual"></span>
                  <strong><a title="vvc.com.br" href="http://www.vvc.com.br/">vvc.com.br</a></strong>Todos os direitos reservados.
                </p>
              </div>
            </footer>

            <script type="text/javascript" src="/ArquivosEstaticos/oi/vvc-pra-voce/recarga/script/modal-recarga.js"></script>
            <script type="text/javascript" src="/ArquivosEstaticos/oi/scripts/vvc-pra-voce/social-media.js"></script>
            <script src="//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js" type="text/javascript"></script>
          </div>
        </div>
        <style jsx>{`
          .vign-breadcrumbsContainer {
            border: none;  
            margin: 0;
            padding: 3px 9px;
          }
          .vign-breadcrumbsList {
            list - style - type: none;  
            margin: 0;  
            padding: 0;
          }
          .vign-breadcrumbsList .vign-last {
            background: none;
          }
          .iframe{
            display:none;
            visibility:hidden;
          }
          .iframe2{
            background: none;
          }
        `}</style>
        </div>
   );
}

export default Content02


