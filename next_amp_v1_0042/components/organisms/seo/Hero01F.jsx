// Hero01E - layout Portal Oi SEO

var React = require('react');
var PropTypes = require('prop-types');

class Hero01F extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01F.jsx - layout Portal Oi SEO');
    return (
      <section class="slick-slide slick-cloned" data-index="4" tabIndex="-1" data-reactid="238">
        {/*<section style="outline:none;background-image:url(https://www.vvcestudio.com.br/publicV2/carousel/pre/virada-maes-2019-pre-pago-320px.jpg);background-size:cover;" class="slick-slide slick-cloned" data-index="4" tabindex="-1" data-reactid="238">*/}
        <h3 class="hidden" data-reactid="239">Slider de Ofertas</h3>
        <div class="sliderr slide-wrapper" data-reactid="240">
          <div class="container" data-reactid="241">
            <div class="slide type6" data-reactid="242">
              <h6 data-reactid="243">PRÉ-PAGO</h6>
              <div class="small-only" data-reactid="244">
                <div class="contentSlide" data-reactid="245">
                  <div class="car-home-title" data-reactid="246">
                    <p>Uma só recarga</p>
                    <p>no seu Pré-pago</p>
                    <p>vale 31 dias</p>
                  </div>
                </div>
              </div>
              <div class="medium-up" data-reactid="247">
                <div class="contentSlide" data-reactid="248">
                  <div class="car-home-title" data-reactid="249">
                    <p>Uma só recarga no seu</p>
                    <p>Pré-pago vale 31 dias</p>
                  </div>
                </div>
              </div>
              <div class="small-only" data-reactid="250">
                <div class="description" data-reactid="251">
                  <div class="car-home-subtitle" data-reactid="252">
                    <p>No Pré da Oi, você tem</p>
                    <p>internet, apps liberados e</p>
                    <p>fala com todo o Brasil. E</p>
                    <p>ainda dá pra trocar minutos</p>
                    <p>por internet na Minha vvc.</p>
                  </div>
                </div>
              </div>
              <div class="medium-up" data-reactid="253">
                <div class="description" data-reactid="254">
                  <div class="car-home-subtitle" data-reactid="255">
                    <p>No Pré da Oi, você tem internet, apps liberados e fala</p>
                    <p>com todo o Brasil. E ainda dá pra trocar minutos por</p>
                    <p>internet na Minha vvc.</p>
                  </div>
                </div>
              </div>
              <a class="banner button-cta" data-context="" href="https://www.vvcestudio.com.br/celular/pre-pago" data-reactid="256">Conheça a oferta</a>
            </div>
          </div>
        </div>

      </section>

    );
  }
}

Hero01F.propTypes = {
  title: PropTypes.string,
};

module.exports = Hero01F;
