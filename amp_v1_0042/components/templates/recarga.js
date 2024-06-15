import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../atoms/atFavIcon'

//console.log('Instanciando templates/index.js');

const Home = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = "Rio de Janeiro";
  if( props.cidade!=undefined){cidade=cidade.cod};
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  return(
  <div>
    <Head>
      <title>Recarga Oi</title>
      <FaviIcon />
      <meta name="description" content="Recarga vvc." />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.vvc.com.br/recarga/"/>
    </Head>
    Cidade:{cidade}
    <h1 className='title'>Recarga Oi</h1>
    <div className='hero'>
        <Link href='#'>/</Link><br/>
        <Link href='/home/'>/home/</Link><br/>
        <Link href='/lp-assine-pos/'>/lp-assine-pos/</Link><br/>
        <Link href='/meusdocumentos/'>/meusdocumentos/</Link><br/>
        <Link href='/meusdocumentos/?passo=1'>/meusdocumentos/?passo=1</Link><br/>
        <Link href='/meusdocumentos/?passo=2'>/meusdocumentos/?passo=2</Link><br/>
        <Link href='/meusdocumentos/?passo=3'>/meusdocumentos/?passo=3</Link><br/>
        <Link href='/meusdocumentos/?passo=4'>/meusdocumentos/?passo=4</Link><br/>
        <Link href='/meusdocumentos/email/'>/meusdocumentos/email/</Link><br/>

        <Link href='/minha-oi/'>/minha-oi/</Link><br/>
        <Link href='/minha-oi/segunda-via/'>/minha-oi/segunda-via/</Link><br/>
        <Link href='/minha-oi/codigo-de-barras/'>/minha-oi/codigo-de-barras/</Link><br/>
        <Link href='/minha-oi/atendimento-oi/'>/minha-oi/atendimento-oi/</Link><br/>
        <Link href='/recarga/'>/recarga/</Link><br/>

        <Link href='/amp/'>/amp/</Link><br/>
        <Link href='/amp/home/'>/amp/home/</Link><br/>
        <Link href='/amp/lp-assine-pos/'>/amp/lp-assine-pos/</Link><br/>
        <Link href='/amp/meusdocumentos/'>/amp/meusdocumentos/</Link><br/>

        <Link href='/amp/minha-oi/'>/amp/minha-oi/</Link><br/>
        <Link href='/amp/minha-oi/segunda-via/'>/amp/minha-oi/segunda-via/</Link><br/>
        <Link href='/amp/minha-oi/codigo-de-barras/'>/amp/minha-oi/codigo-de-barras/</Link><br/>
        <Link href='/amp/minha-oi/atendimento-oi/'>/amp/minha-oi/atendimento-oi/</Link><br/>
        <Link href='/amp/recarga/'>/amp/recarga/</Link><br/>

        <Link href='/componentes/'>/componentes/</Link><br/>
        <Link href='/api1/captcha/'>/api1/captcha/</Link><br/> 
        <Link href='/api1/meusdocumentos/'>/api1/meusdocumentos/</Link> (apenas post) <br/>
        
    </div>

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
)}

export default Home
