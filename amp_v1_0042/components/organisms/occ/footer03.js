
// Footer do LP-ASSINE-POS - Layout OCC
import React from 'react';

const Footer03 = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Footer03                          ║');
  console.log('╚════════════════════════════════════════╝');
 
  // var cidade = "RJ - Rio de Janeiro";
  // if( props.cod!=undefined){varClass=cod.cod};
  // var VarModo = "html";
  // if( props.modo!=undefined){VarModo=props.modo};
 
  return(
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="footcontrow">
            <p>{props.JsonFooter.footcontrow}</p>
            <ul className="footerulresp">
              <li>
                <a href={props.JsonFooter.li01.link}>
                {props.JsonFooter.li01.texto}</a></li>
              <li>
                <a href={props.JsonFooter.li02.link}>
                {props.JsonFooter.li02.texto}</a></li>
              <li>
                <a href={props.JsonFooter.li03.link}>
                {props.JsonFooter.li03.texto}</a></li>
            </ul>
            <p className="disclaimer">
              {props.JsonFooter.disclaimer}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
    /* footer ------------------------------------------------------------ */

    footer{
        border-top: .14285714rem solid rgba(204,204,204,0.3);
        /*padding-top: 10em;*/
        display: block;
        cursor: default;
        box-sizing: border-box;
    }

    .footer-container{
        padding: 0 5.2%;
        margin: 0;
        cursor: default;
        box-sizing: border-box;
        display: block;
        box-sizing: border-box;
    }

    footer row{
        margin-right: 0;
        margin-left: 0;
        padding: 0;
        margin: 0;
        cursor: default;
        box-sizing: border-box;
        display: table;
        content: " ";
        clear: both;
    }

    .footcontrow{
        padding-right: 0;
        padding-left: 0;
        min-height: 0;
        width: 100%;
        float: left;
        position: relative;
        padding: 0;
        margin: 0;
        cursor: default;
        box-sizing: border-box;
    }

    footer p {
        margin: 0 0 10px;
        padding: 0;
        cursor: default;
        font-family: "SimplonBP-Regular",Arial;
        color: #ccc;
        font-size: 1.14285714rem;
        font-style: inherit;
        font-weight: normal;
        line-height: 150%;
        text-align: inherit;
        text-decoration: inherit;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    /* Pequeno */
    @media only screen and (max-width : 780px) {
        .footerulresp{
            display: block;        
        }
    }

    /* footer Medio */
    @media only screen and (min-width : 780px) {
        .footerulresp{
            display: flex;
        }
    }

    footer ul {
        font-size: 1rem;
        list-style-type: none;
        margin-top: 0;
        padding: 0;
        margin: 0;
        cursor: default;
        color: #333;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 150%;
    }

    footer li {
        margin-right: 2.57142857rem;
        opacity: .6;
        font-family: "SimplonBP-Regular",Arial;
        padding: 0;
        margin: 0;
        margin-right: 50px;
        margin-bottom: 15px;
        cursor: default;
        box-sizing: border-box;
        display: list-item;
        color: #333;
        font-style: normal;
        font-weight: normal;
        line-height: 150%;
        display: list-item;
        text-align: -webkit-match-parent;
        font-size: 1rem;
        list-style-type: none;

    }

    footer a{
        font-family: "SimplonBP-Regular",Arial;
        color: #909090;
        text-decoration: none;
        border-bottom: solid 1px #dbdbdb;
        cursor: pointer;
        outline: 0;
        background: transparent;
        padding: 0;
        margin: 0;
        font-style: normal;
        font-weight: normal;
        line-height: 150%;
        box-sizing: border-box;
    }
      `}</style>
    </footer>
  )
}

export default Footer03
  




/*


var React = require('react');
//var PropTypes = require('prop-types');
  
class Index extends React.Component {
  render() {
    console.log('Rodando /views/organisms/footer03.jsx - Layout OCC ');
    return (
      <footer>
        <div className="footer-container">
          <div className="row">
            <div className="footcontrow">
              <p>{props.JsonFooter.footcontrow}</p>
              <ul className="footerulresp">
                <li>
                  <a href={props.JsonFooter.li01.link}>
                  {props.JsonFooter.li01.texto}</a></li>
                <li>
                  <a href={props.JsonFooter.li02.link}>
                  {props.JsonFooter.li02.texto}</a></li>
                <li>
                  <a href={props.JsonFooter.li03.link}>
                  {props.JsonFooter.li03.texto}</a></li>
              </ul>
              <p className="disclaimer">
                {props.JsonFooter.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Index;
*/