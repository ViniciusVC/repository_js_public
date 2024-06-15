
import React from 'react'
import Head from 'next/head'
//import Footer04 from '../../organisms/documentoscopia/footer04'
import HeadMeusDocumentos from '../../organisms/documentoscopia/headMeusDocumentos.js';
import Ajuda04 from '../../organisms/documentoscopia/contentajuda04'
import Header04 from '../../organisms/documentoscopia/header04'
import GTM from '../../atoms/atGTM'
import FavIcon from '../../atoms/atFavIcon'
import * as Util from '../../../controller/util.js';

//console.log('Instanciando templates/documentoscopia/ajuda.js');
const documentoscopia = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      documentoscopia Ajuda             ║');
  console.log('╚════════════════════════════════════════╝'); 

  var modo = Util.validaProps(props.modo,"html")
  var ajuda = Util.validaProps(props.ajuda,"selfie");

  // var modo =  "html";
  // if( props.modo!=undefined){modo=props.modo};
  // var ajuda = "selfie";
  // if( props.ajuda!=undefined){ajuda=props.ajuda};
  var canonical = 'https://www.vvc.com.br/documentoscopia/ajuda'+ajuda+'/';

  //   <Head>
  //   <title>Envio de documentos para cadastro</title>
  //   <FaviIcon />
  //   <meta name="description" content="Formulário para envio de documentos." />
  //   <meta name="robots" content="noindex" />
  //   <link rel="canonical" href={canonical}/>
  //   <GTM cod="head"/>
  //  </Head>

  return(
  <div>
<HeadMeusDocumentos modo={modo}/>
    <GTM position="body" modo={modo} codGTM="GTM-K89BB78" />
    <GTM position="body" modo={modo} codGTM="GTM-KR9G4JB" />
    <Header04 modo={modo}/>
    <Ajuda04 modo={modo} ajuda={ajuda}/>
    {/* <Footer04 modo={modo}/> */}
    <style jsx>{`
      .geral{
        margin: 10px;
        width: 100%; 
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

export default documentoscopia

//<form action="../documentoscopia/api/" method="post" id="formdocumentoscopia" name="formdocumentoscopia" enctype="multipart/form-data">
//<script src="../assetsv5/js/documentoscopia.js"></script>