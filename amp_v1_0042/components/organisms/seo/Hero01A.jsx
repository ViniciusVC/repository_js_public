// Hero01A - layout Portal Oi SEO

var React = require('react');
//var PropTypes = require('prop-types');

class Hero01A extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01A.jsx - layout Portal Oi SEO');
    return (
      <section class="slick-slide slick-cloned" data-index="-1">
        {/*<section style="background-image:url(https://www.vvc.com.br/publicV2/carousel/pre/virada-maes-2019-pre-pago-320px.jpg);background-size:cover;" class="slick-slide slick-cloned" data-index="-1">*/}
        <h3 class="hidden">Slider de Ofertas</h3>
        <div class="sliderr slide-wrapper">
          <div class="container">
            <div class="slide type6">
              <h6>PRÉ-PAGO</h6>
              <div class="small-only">
                <div class="contentSlide">
                  <div class="car-home-title">
                    <p>Uma só recarga</p>
                    <p>no seu Pré-pago</p>
                    <p>vale 31 dias</p>
                  </div>
                </div>
              </div>
              <div class="medium-up">
                <div class="contentSlide">
                  <div class="car-home-title">
                    <p>Uma só recarga no seu</p>
                    <p>Pré-pago vale 31 dias</p>
                  </div>
                </div>
              </div>
              <div class="small-only">
                <div class="description">
                  <div class="car-home-subtitle">
                    <p>No Pré da Oi, você tem</p>
                    <p>internet, apps liberados e</p>
                    <p>fala com todo o Brasil. E</p>
                    <p>ainda dá pra trocar minutos</p>
                    <p>por internet na Minha vvc.</p>
                  </div>
                </div>
              </div>
              <div class="medium-up">
                <div class="description">
                  <div class="car-home-subtitle">
                    <p>No Pré da Oi, você tem internet, apps liberados e fala</p>
                    <p>com todo o Brasil. E ainda dá pra trocar minutos por</p>
                    <p>internet na Minha vvc.</p>
                  </div>
                </div>
              </div>
              <a class="banner button-cta" data-context="" href="https://www.vvc.com.br/celular/pre-pago">Conheça a oferta</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*
Hero01A.propTypes = {
  title: PropTypes.string,
};
*/

module.exports = Hero01A;
