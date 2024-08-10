import React from 'react';
import Head from 'next/head';
import Header01 from '../organisms/seo/header01.js';
import Content01 from '../organisms/seo/content01.js';
import Comunicado01 from '../organisms/seo/Comunicado01.js';
import Footer01 from '../organisms/seo/footer01.js';
import FavIcon from '../atoms/atFavIcon'

function styleHomeSEO(varmodo){
  //CSS importado do projeto React SEO.
  if(varmodo=="amp"|| varmodo=="AMP")
  {
    return(
      <div></div>
    )
  }else{
    return(
      <link rel="stylesheet" type="text/css" href="https://www.vvcestudio.com.br/publicV2/client.css"/>
    )
  }
}

//console.log('Instanciando templates/index.js');

const Home = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Home                              ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = "RJ - Rio de Janeiro";
  if( props.cidade!=undefined){cidade=props.cidade};
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  return(
          <div>
           <Head>
              <title>Home</title>
              <FavIcon />
              <meta name="description" content="Portal da vvc." />
              <meta name="robots" content="noindex" />
              <link rel="canonical" href="https://www.vvcestudio.com.br"/>
            </Head>
            {styleHomeSEO(modo)}
            
            <div id="home" class="home">
              <div>
                <Header01 modo={modo} cidade={cidade}></Header01>
                <div>
                  <Content01 modo={modo} cidade={cidade}></Content01>
                  <Comunicado01 modo={modo} cidade={cidade}></Comunicado01>
                  <Footer01 modo={modo} cidade={cidade}></Footer01>
                </div>
              </div>
            </div>
    <style jsx>{`
    html{
        font-size:1rem;
        font-smooth:antialiased;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        -webkit-box-sizing:border-box;
        box-sizing:border-box
        }
    `}</style>
 </div>
)}

export default Home

/*
//home

var React = require('react');
//var PropTypes = require('prop-types');
var Head01 = require('../organisms/seo/Head01');
var Tags01 = require('../organisms/seo/tags01');
var Header01 = require('../organisms/seo/header01');
var Content01 = require('../organisms/seo/content01');
var Comunicado01 = require('../organisms/seo/Comunicado01')
var Footer01 = require('../organisms/seo/footer01');

class Home extends React.Component {
  render() {
    console.log('Rodando ~/views/home.jsx] - Layout Portal Oi SEO');
    return (
        <Head01></Head01>
        <body>

          <Tags01></Tags01>
          <main id="app">
          <div>
            <div id="home" class="home">
              <div>
                <Header01></Header01>
                <div>
                  <Content01></Content01>
                  <Comunicado01></Comunicado01>
                  <Footer01></Footer01>
                </div>
              </div>
            </div>
          </div>
          </main>

        </body>
    );
  }
}
module.exports = Home;
*/

