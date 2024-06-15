import React from 'react'
import Head from 'next/head';
import HeaderHtml from "../../moleculas/minha-oi/moHeaders/headerHtml";
// import Portabilidade from "../../organisms/vvc-com/portabilidade.js"
import Header from '../../moleculas/headerParametrizado';
import Body from "../../organisms/portabilidade/indice";
import FaviIcon from '../../atoms/atFavIcon';
import * as Util from '../../../controller/util.js';


const portabilidade = props =>{
    console.log('╔════════════════════════════════════════╗');
    console.log('║     index vvc-com portabilidade         ║');
    console.log('╚════════════════════════════════════════╝');
    let modo = Util.validaProps(props.modo,"html"); 
   return(
       <>
            <Head>
            <title>Codigo de Barras</title>
                <FaviIcon />
                <meta name="description" content="vvc.com ortabilidade" />
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.vvc.com.br/portabilidade/"/>
                <link rel="amphtml" href="/amp/minha-oi/atendimento-oi/"/>
                <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
            </Head>
           
            <Header
                backgroundColor=""
                colorText="#222222"
                colorButton="#ededed"
                colorButtonText="#000"
                colorButtonBorder="#ededed"
                colorIconSearch="#222222"
            />
            <Body modo={modo}/>
            
           
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
                font-family: SimplonBP-Regular, sans-serif;        
              }
    `}</style>
        </>
   )
   
}

export default portabilidade;
