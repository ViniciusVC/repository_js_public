
//Arquivo padrão do Next
//Component atomo Price.js

import React from 'react'

console.log('Instanciando /componentes/atoms/Head.js');

const Head = props => {
  console.log('Rodando /views/organisms/Head03.jsx - Layout OCC ');
  var varcharset = (this.props.JsonHead.charset == undefined) ? '' : this.props.JsonHead.charset;
  var vartitle = (this.props.JsonHead.title == undefined) ? 'Titulo da pagina' : this.props.JsonHead.title;
  var varcanonical = (this.props.JsonHead.canonical == undefined) ? 'www.vvcestudio.com.br' : this.props.JsonHead.canonical;
  var varicon = (this.props.JsonHead.icon == undefined) ? 'vvc.ico' : this.props.JsonHead.icon;
  var vardescription = (this.props.JsonHead.description == undefined) ? 'Portal Oi' : this.props.JsonHead.description;
  var varrobots = (this.props.JsonHead.robots == undefined) ? ' ' : this.props.JsonHead.robots;
  var varviewport = (this.props.JsonHead.viewport == undefined) ? ' ' : this.props.JsonHead.viewport;
  var varheaderCSS = fs.readFileSync('./views/organisms/occ/style_header_03.css', 'utf8', function(err, contents) {
    console.log(contents);
  });
  var varbodyCSS = fs.readFileSync('./views/organisms/occ/style_body_03.css', 'utf8', function(err, contents) {
    console.log(contents);
  });
  var varfooterCSS = fs.readFileSync('./views/organisms/occ/style_footer_03.css', 'utf8', function(err, contents) {
    console.log(contents);
  });
  vartodoCSS = varheaderCSS+varbodyCSS+varfooterCSS;
  console.log('var=' + varcharset);
  console.log('var=' + vartitle);
  console.log('var=' + varcanonical);
  console.log('var=' + varicon);
  console.log('var=' + vardescription);
  console.log('var=' + varrobots);
  console.log('var=' + varviewport);

return(
    <head>
    <meta charSet={varcharset} />
    <title>{vartitle}</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="canonical" href={varcanonical} />
    <link rel="icon" href={varicon} />
    <meta name="description" content={vardescription} />
    <meta name="robots" content={varrobots} />
    <meta name="viewport" content={varviewport}></meta>
    <style>{vartodoCSS}</style>
    </head>
  )
}

module.exports = Head;

/*
export default Btnminhavvc
// header do LP-ASSINE-POS - Layout OCC

import React, { Component } from 'react';
//var _Promise = require('bluebird');
//var Promise = require('bluebird');


var vartodoCSS = '!!!!!!!!!!!!!!';

class  extends Component {
  render() {
        
 
 
        return (

        );
  }
}


*/

/*
var varstylesheet01 = (this.props.JsonHead.stylesheet01==undefined) ? 'arquivo.css' : this.props.JsonHead.stylesheet01;
var varstylesheet02 = (this.props.JsonHead.stylesheet02==undefined) ? 'arquivo.css' : this.props.JsonHead.stylesheet02;
var varstylesheet03 = (this.props.JsonHead.stylesheet03==undefined) ? 'arquivo.css' : this.props.JsonHead.stylesheet03;
console.log('var='+varstylesheet01);
console.log('var='+varstylesheet02);
console.log('var='+varstylesheet03);
<link rel="stylesheet" href={varstylesheet01} />
<link rel="stylesheet" href={varstylesheet02} />
<link rel="stylesheet" href={varstylesheet03} />
*/