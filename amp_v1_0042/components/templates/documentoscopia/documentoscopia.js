
import React from 'react';
import Head from 'next/head';
import HeadMeusDocumentos from '../../organisms/documentoscopia/headMeusDocumentos.js';
import Header04 from '../../organisms/documentoscopia/header04';
import Content04 from '../../organisms/documentoscopia/content04';
//import Footer04 from '../../organisms/documentoscopia/footer04';
import GTM from '../../atoms/atGTM'
import * as Util from '../../../controller/util.js';

// function headMeusDocumentos(modo){
//   if(modo=="amp"||modo=="AMP"){
//     return(
//       <Head>
//         <title>Envio de documentos para cadastro (AMP)</title>
//         <FaviIcon />
//         <meta name="description" content="Formulário para envio de documentos." />
//         <meta name="robots" content="noindex" />
//         <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/"/>
//         <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
//     </Head>
//   )}else{
//     return(
//       <Head>
//         <title>Envio de documentos para cadastro</title>
//         <FaviIcon />
//         <meta name="description" content="Formulário para envio de documentos." />
//         <meta name="robots" content="noindex" />
//         <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/"/>
//         <link rel="amphtml" href="https://www.vvc.com.br/amp/meusdocumentos/" />
//         <link rel="preconnect" href="https://www.google-analytics.com"/>
//         <link rel="preconnect" href="https://www.googletagmanager.com"/>
//         <GTM cod="head"/>
//       </Head>
//     ) 
//   }
// }

const meusDocumentos = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      documentoscopia                   ║');
  console.log('╚════════════════════════════════════════╝');  
 
  // var cod = "#";
  // if( props.cod!=undefined){varClass=cod.cod};
  // var modo = "html";
  // if( props.modo!=undefined){modo=props.modo};

  var modo = Util.validaProps(props.modo,"html")

  return(
   <div className="geral">
     <HeadMeusDocumentos modo={modo}/>
     <GTM position="body" modo={modo} codGTM="GTM-K89BB78" />
     <GTM position="body" modo={modo} codGTM="GTM-KR9G4JB" />
     <Header04 modo={modo}/>
     <Content04 modo={modo} query={props.query}/>
     {/* <Footer04 modo={modo}/> */}
    <style jsx>{`
      .geral{
        margin: 10px;
      }
    `}</style>
        <style jsx global>{`
              ${Util.fontesCSS1()}
              ${Util.fontesCSS2()}
              ${Util.fontesCSS3()}
              ${Util.fontesCSS4()}
              ${Util.fontesCSS5()}
              body{
                margin: 0px;
                padding: 0px;
                background-color: #ffffff;
              } 
    `}</style>
</div>
)
}

export default meusDocumentos

//<form action="../documentoscopia/api/" method="post" id="formdocumentoscopia" name="formdocumentoscopia" enctype="multipart/form-data">
//<script src="../assetsv5/js/documentoscopia.js"></script>