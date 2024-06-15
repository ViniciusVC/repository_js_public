
// layout01.jsx - Layout Portal Oi SEO

var React = require('react');
var Head01 = require('./Head01');
var Tags01 = require('./tags01');
var Header01 = require('./header01');
var Comunicado01 = require('./Comunicado01')
var Footer01 = require('./footer01');

class Layout01 extends React.Component {
  render() {
    console.log('Rodando views/layout01.jsx - Layout Portal Oi SEO');
    return (
      <html>
        <Head01></Head01>
        <body>
        <Tags01></Tags01>
          <div>
          <Header01></Header01>
            {this.props.children}
            <Comunicado01></Comunicado01>
            <Footer01></Footer01>
          </div>
        </body>
      </html>
    );
  }
}


module.exports = Layout01;


