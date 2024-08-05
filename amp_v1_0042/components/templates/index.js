import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'

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
      <title>Home</title>
      <FavIcon />
      <meta name="description" content="Portal da vvc." />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.vvcestudio.com.br/"/>
    </Head>
    Cidade:{cidade}
    <h1 className='title'>Bem vindo ao Projeto AMP_V1</h1>
    <ListadeRotas/>
  </div>
)}

export default Home
