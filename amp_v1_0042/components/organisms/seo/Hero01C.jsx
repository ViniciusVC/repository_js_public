// Hero01C - layout Portal Oi SEO

var React = require('react');
//var PropTypes = require('prop-types');

class Hero01C extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01C.jsx - layout Portal Oi SEO');
    return (
      <section class="slick-slide slick-cloned internet" data-index="1" tabIndex="-1" data-reactid="179">
        {/*<section style="outline:none;background-image:url(https://www.vvcestudio.com.br/publicV2/heros/internet/hero-fibra-320.jpg);background-size:cover;" class="slick-slide slick-cloned internet" data-index="1" tabindex="-1" data-reactid="179">*/}
        <h3 class="hidden" data-reactid="180">Slider de Ofertas</h3>
        <div class="sliderr slide-wrapper" data-reactid="181">
          <div class="container" data-reactid="182">
            <div class="slide type14" data-reactid="183">
              <h6 data-reactid="184">PLANO SMART<br /></h6>
              <div class="contentSlide" data-reactid="185">
                <div data-reactid="186">
                  <p><strong>Oi Fibra</strong></p>
                </div>
                <div class="contentSide side1" data-reactid="187">
                  <span data-reactid="188">Líder no ranking Netflix<br /></span>
                </div>
              </div>
            </div>
            <div class="obs" data-reactid="189">
              <span class="text" data-reactid="190">Por<br /></span>
              <span class="price" data-reactid="191">R$ <strong>99</strong><br /></span>
              <span class="afterPrice" data-reactid="192"><strong>,90</strong><br />/mês<br /></span>
              <div class="contentSide side2" data-reactid="193">
                <span data-reactid="194"><strong>200 Mega</strong><br />
                </span>
              </div>
            </div>
            <a class="banner button-cta" data-context="" href="/internet/" data-reactid="195">Conheça as ofertas</a>
            <div class="more" data-reactid="196">
              <span data-reactid="197">
                <strong>Valor com desconto de R$ 20,00</strong><br />
                no plano Smart com débito automático e Conta Digital<br />
              </span>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

/*
Hero01C.propTypes = {
  title: PropTypes.string,
};
*/
module.exports = Hero01C;
