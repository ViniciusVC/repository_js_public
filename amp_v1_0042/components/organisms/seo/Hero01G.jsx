// Hero01E - layout Portal Oi SEO

var React = require('react');
//var PropTypes = require('prop-types');

class Hero01G extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01G.jsx - layout Portal Oi SEO');
    return (
      <section class="slick-slide slick-cloned" data-index="5">
        {/*<section style="background-image:url(https://www.vvc.com.br/publicV2/carousel/controle/bg-banner-home-controle-320.jpg);background-size:cover;" class="slick-slide slick-cloned" data-index="5"> */}
        <h3 class="hidden">Slider de Ofertas</h3>
        <div class="sliderr slide-wrapper">
          <div class="container">
            <div class="slide type7">
              <div class="contentSlide small-only">
                <span class="titleHeroHome">
                  <strong>PRORROGADO</strong><br />
                </span>
              </div>
              <div class="contentSlide medium-up">
                <span class="list-hero__mark line1">
                  <strong>PRORROGADO</strong><br />
                </span>
              </div>
              <div class="CountdownContainer sc-bdVaJa dHrQls">
                <h3 class="sc-htpNat hUJkmS"> Esta oferta acaba em: </h3>
                <div class="sc-bwzfXH jHkNKs">
                  <span class="Countdown-col sc-bxivhb lbbikY">
                    <span class="Countdown-col-element sc-ifAKCX bTQsLE">
                      <strong>0</strong>
                      <span>Dias</span>
                    </span>
                  </span>
                  <span class="Countdown-col sc-bxivhb lbbikY">
                    <span class="Countdown-col-element sc-ifAKCX bTQsLE">
                      <strong>00</strong>
                      <span> Horas</span>
                    </span>
                  </span>
                  <span class="divider"> : </span>
                  <span class="Countdown-col sc-bxivhb lbbikY">
                    <span class="Countdown-col-element sc-ifAKCX bTQsLE">
                      <strong>00</strong>
                      <span> Minutos</span>
                    </span>
                  </span>
                  <span class="divider"> : </span>
                  <span class="Countdown-col sc-bxivhb lbbikY">
                    <span class="Countdown-col-element sc-ifAKCX bTQsLE">
                      <strong>00</strong>
                      <span>Segundos</span>
                    </span>
                  </span>
                </div>
              </div>
              <img class="hero-mob-offerimage" src="https://www.vvc.com.br/publicV2/12gb-apps-liberados-desk.svg" alt="12 GB + Messenger e Whatsapp" />
              <div class="hero-offer-social">
                <span class="hero-gb-offer"></span>
                <img class="hero-social-network" src="http://www.vvc.com.br/publicV2/12gb-apps-liberados-desk.svg" alt="12 GB + WhatsApp, Facebook, Instagram e Messenger" />
              </div>
              <div class="obs">
                <span>Por apenas </span>
                <span class="price">
                  <span>R$ </span>49
                             <span class="suffix">
                    <strong>,99</strong><br />
                    /mês no cartão<br />
                  </span>
                </span>
              </div>
              <a class="banner button-cta" data-context="" href="/celular/controle/">Eu quero</a>
              <div class="more">
                <a data-context=""></a>
              </div>
            </div>
          </div>
        </div>

      </section>

    );
  }
}

/*
Hero01G.propTypes = {
  title: PropTypes.string,
};
*/

module.exports = Hero01G;
