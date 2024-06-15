// O tags01 é usado no header da HOME - layout Portal Oi SEO.

var React = require('react');
var PropTypes = require('prop-types');

let JsonAMP = {
  "vars": {
      "account": "UA-143307429-1",
      "documentLocation": "AMP-lp-assine-pos-teste"
  },
  "triggers": {
      "gadwpTrackPageview": {
          "on": "visible",
          "request": "pageview"
      },
      "gadwpScrollPings": {
          "on": "scroll",
          "scrollSpec": {
              "verticalBoundaries": [25, 50, 75, 100]
          },
          "request": "event",
          "vars": {
              "eventCategory": "Scroll Depth",
              "eventAction": "Percentage",
              "eventLabel": "${verticalScrollBoundary}%"
          },
          "extraUrlParams": {
              "ni": true
          }
      },
      "gadwpEventTracking": {
          "on": "click",
          "selector": "#euquero",
          "request": "event",
          "vars": {
              "eventCategory": "link",
              "eventAction": "click",
              "eventLabel": "teste1"
          }
      }
  }
}


class tag01 extends React.Component {
  render() {
    console.log('Rodando views/seo/tags01.jsx - layout Portal Oi SEO');
    return (
      <amp-analytics type="googleanalytics" id="analytics1">
              <script type="application/json">{JsonAMP.string}</script>
      </amp-analytics>
    );
  }
}

tag01.propTypes = {
  title: PropTypes.string,
};

module.exports = tag01;
