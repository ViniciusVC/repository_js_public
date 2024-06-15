
import React from 'react';
//import Head from 'next/head';
import HeadMeusDocumentos from '../../organisms/documentoscopia/headMeusDocumentos.js';
import GTM from '../../atoms/atGTM'
//import FavIcon from '../../atoms/atFavIcon'
import ContentResposta from '../../organisms/documentoscopia/contentResposta'
//import * as Util from '../../../controller/util.js';

// function headMeusDocumentos(modo){
//   if(modo=="amp"||modo=="AMP"){
//     return(
//       <Head>
//         <title>A GENTE SÓ PRECISA SE CONHECER UM POUCO MAIS.</title>
//         <FaviIcon />
//         <meta name="description" content="A GENTE SÓ PRECISA SE CONHECER UM POUCO MAIS." />
//         <meta name="robots" content="noindex" />
//         <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/email/"/>
//         <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
//       </Head>
//   )}else{
//     return(
//       <Head>
//         <title>A GENTE SÓ PRECISA SE CONHECER UM POUCO MAIS.</title>
//         <FaviIcon />
//         <meta name="description" content="A GENTE SÓ PRECISA SE CONHECER UM POUCO MAIS." />
//         <meta name="robots" content="noindex" />
//         <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/email/"/>
//         <link rel="amphtml" href="https://www.vvc.com.br/amp/meusdocumentos/email" />
//         <link rel="preconnect" href="https://www.google-analytics.com"/>
//         <link rel="preconnect" href="https://www.googletagmanager.com"/>
//         <GTM cod="head"/>
//      </Head>
//     ) 
//   }
// }


const meusDocumentosEmail = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║   documentoscopia  resposta erro       ║');
  console.log('╚════════════════════════════════════════╝');  
  // var cod = "#";
  // if( props.cod!=undefined){varClass=cod.cod};
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  var cod = "2";
  if( props.cod!=undefined){cod=props.cod};

  return(
    <div className="geral">
        <HeadMeusDocumentos modo={modo}/>
          <GTM position="body" modo={modo} codGTM="GTM-K89BB78" />
          <GTM position="body" modo={modo} codGTM="GTM-KR9G4JB" />
        <ContentResposta cod={cod}/>
    </div>
  )
}

export default meusDocumentosEmail

//<form action="../documentoscopia/api/" method="post" id="formdocumentoscopia" name="formdocumentoscopia" enctype="multipart/form-data">
//<script src="../assetsv5/js/documentoscopia.js"></script>