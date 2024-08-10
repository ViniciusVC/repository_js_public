// Hero01E - layout Portal Oi SEO

var React = require('react');
var PropTypes = require('prop-types');

class Hero01E extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01E.jsx - layout Portal Oi SEO');
    return (
      
<section class="slick-slide slick-cloned" data-index="3" tabIndex="-1" data-reactid="219">
      {/*<section style="outline:none;background-image:url(https://www.vvcestudio.com.br/publicV2/bg-minha-vvc-whatsapp-320.jpg);background-size:cover;" class="slick-slide slick-cloned" data-index="3" tabindex="-1" data-reactid="219">*/}            
                  <h3 class="hidden" data-reactid="220">Slider de Ofertas</h3>
                  <div class="sliderr slide-wrapper" data-reactid="221">
                    <div class="container" data-reactid="222">
                      <div class="slide type9" data-reactid="223">
                        <h6 data-reactid="224">WHATSAPP DA OI</h6>
                        <div class="small-only" data-reactid="225">
                          <div class="contentSlide" data-reactid="226">
                            <span class="contentSlide__slide-title" data-reactid="227">
                              Fale com a gente por WhatsApp!
                            </span>
                          </div>
                        </div>
                        <div class="medium-up" data-reactid="228">
                          <div class="contentSlide" data-reactid="229">
                            <span class="contentSlide__slide-title" data-reactid="230">
                              Fale com a gente por WhatsApp!
                            </span>
                          </div>
                        </div>
                        <div class="small-only" data-reactid="231">
                          <div class="description" data-reactid="232">
                            <div data-reactid="233">
                              <p>Agora você pode pedir informações sobre sua conta ou suporte
                              técnico pelo <em>WhatsApp</em>.</p>
                              <p>É só adicionar o <strong>Assistente Virtual da Oi</strong>
                              (31) 3131-3131 e conversar com ele.
                              Aproveite a novidade.</p>
                            </div>
                          </div>
                        </div>
                        <div class="medium-up" data-reactid="234">
                          <div class="description" data-reactid="235">
                            <div data-reactid="236">
                              <p>Agora você pode pedir informações sobre sua conta ou suporte
                              técnico pelo <em>WhatsApp</em>.</p>
                              <p>É só adicionar o <strong>Assistente Virtual da Oi</strong> (31) 3131-3131 e conversar com ele. Aproveite a novidade.</p>
                            </div>
                          </div>
                        </div>
                        <a class="banner button-cta" data-context="" href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=553131313131" data-reactid="237">Eu quero!</a>
                      </div>
                    </div>
                  </div>

              </section>
      
    );
  }
}

Hero01E.propTypes = {
  title: PropTypes.string,
};

module.exports = Hero01E;
