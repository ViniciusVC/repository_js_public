
// head do Documentoscopia  - Projeto Piloto
import React from 'react';
import Head from 'next/head';
//import GTM from '../../atoms/atGTM'
import FavIcon from '../../atoms/atFavIcon'
import * as Util from '../../../controller/util.js';

const headMeusDocumentos = props => {
  var modo = Util.validaProps(props.modo, "amp");
  if(modo=="amp"||modo=="AMP"){
    return(
      <Head>
        <title>Envio de documentos para cadastro (AMP)</title>
        <FavIcon />
        <meta name="description" content="Formulário para envio de documentos." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/"/>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
      </Head>
    )
  }else{
    return(
      <Head>
        <title>Envio de documentos para cadastro</title>
        <FavIcon />
        <meta name="description" content="Formulário para envio de documentos." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvc.com.br/meusdocumentos/"/>
        <link rel="amphtml" href="https://www.vvc.com.br/amp/meusdocumentos/" />
        <link rel="preconnect" href="https://www.google-analytics.com"/>
        <link rel="preconnect" href="https://www.googletagmanager.com"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153476418-1"></script>
        <script src="/static/assetsv5/js/Ga.js"/>
          {/* <script>

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-153476418-1');

          </script> */}
      </Head>
    ) 
    /*
        <script src="/static/assetsv5/js/GTM-K89BB78.js"/>
        <script src="/static/assetsv5/js/GTM-KR9G4JB.js"/>
        <GTM position="head" modo={modo} codGTM="GTM-K89BB78" />
        <GTM position="head" modo={modo} codGTM="GTM-KR9G4JB" />
        <script type="text/javascript" src="static/GTM.js"></script>
    */
  }
}

export default headMeusDocumentos
