// Hero01D - layout Portal Oi SEO

var React = require('react');
var PropTypes = require('prop-types');

class Hero01D extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01D.jsx - layout Portal Oi SEO');
    return (
      <section class="slick-slide slick-cloned" data-index="2" tabIndex="-1" data-reactid="201">
        {/*<section style="outline:none;background-image:url(/publicV2/carousel/pos/home-banner-pos-320.jpg);background-size:cover;" class="slick-slide slick-cloned" data-index="2" tabindex="-1" data-reactid="201">*/}
        <h3 class="hidden" data-reactid="202">Slider de Ofertas</h3>
        <div class="sliderr slide-wrapper" data-reactid="203">
          <div class="container" data-reactid="204">
            <div class="slide type13 " data-reactid="205">
              <h6 data-reactid="206"></h6>
              <div class="contentSlide medium-up" data-reactid="207">
                <p><strong>ULTRA</strong>GIGUE-SE</p>
                <p>leve um exagero de internet</p>
                <p>pra navegar no seu pós.</p>
              </div>
              <div class="contentSlide small-only" data-reactid="208">
                <p><strong>ULTRA</strong>GIGUE-SE</p>
                <p>leve um exagero de internet</p>
                <p>pra navegar no seu pós.</p>
              </div>
              <div class="small-only" data-reactid="209"></div>
              <div class="medium-up" data-reactid="210"></div>
              <img class="hero-mob-offerimage" src="/publicV2/plano-50gb-pos-mob.svg" alt="12 GB + Messenger e Whatsapp" data-reactid="211" />
              <div class="obs" data-reactid="212">
                <span class="text" data-reactid="213">por<br />
                </span>
                <span class="price" data-reactid="214">R$ <strong>99</strong><br />
                </span>
                <span class="afterPrice" data-reactid="215"><strong>,90</strong><br />
                  /mês<br />
                </span></div>
              <a class="banner button-cta" data-context="" href="https://www.vvcestudio.com.br/detalhes-da-oferta/pos-pago_50gb_fid_brasil" data-reactid="216">Conheça a oferta
              </a>
              <div class="more" data-reactid="217">
                <a data-context="" data-reactid="218"></a>
              </div>
            </div>
          </div>
        </div>

      </section>

    );
  }
}

Hero01D.propTypes = {
  title: PropTypes.string,
};

module.exports = Hero01D;
