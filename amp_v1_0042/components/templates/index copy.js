import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'

//console.log('Instanciando templates/index.js');

const Home = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = "Rio de Janeiro";
  if (props.cidade != undefined) { cidade = cidade.cod };
  var modo = "html";
  if (props.modo != undefined) { modo = props.modo };
  return (
    <div>
      <Head>
        <title>Home</title>
        <FavIcon />
        <meta name="description" content="Portal da vvc." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvc.com.br/" />
      </Head>
      Cidade:{cidade}
      <h1 className='title'>Bem vindo ao Projeto AMP_V1</h1>
      <div className='hero'>
      <style jsx>{`
      .hero {
        text-align: center;
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }
    `}</style>
    </div>
  )
}

export default Home
