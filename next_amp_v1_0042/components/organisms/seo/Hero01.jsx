// Hero01 é usado na HOME - layout Portal Oi SEO.

var React = require('react');
//var PropTypes = require('prop-types');
var Hero01A = require('./Hero01A');
var Hero01B = require('./Hero01B');
var Hero01C = require('./Hero01C');
var Hero01D = require('./Hero01D');
var Hero01E = require('./Hero01E');
var Hero01F = require('./Hero01F');
var Hero01G = require('./Hero01G');


class Hero01 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Hero01.jsx - layout Portal Oi SEO');
    return (
    <div class="slick-initialized slick-slider">
      <div class="slick-list">
        <div class="slick-track">
          <Hero01A></Hero01A>
          <Hero01B></Hero01B>
          <Hero01C></Hero01C>
          <Hero01D></Hero01D>
          <Hero01E></Hero01E>
          <Hero01F></Hero01F>
          <Hero01G></Hero01G>
        </div>
      </div>
    </div>
    );
  }
}

/*
Hero01.propTypes = {
  title: PropTypes.string,
};
*/

module.exports = Hero01;
