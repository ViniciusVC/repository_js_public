import React from 'react'

import Head from 'next/head';
import FaviIcon from '../../atoms/atFavIcon';
import Headerminhavvc from '../../organisms/minha-oi/headerMinhavvc.js';
import Footerminhavvc from '../../organisms/minha-oi/footerMinhavvc.js';
import HeaderHtml from "../../moleculas/minha-oi/moHeaders/headerHtml"
import BodyCodigoBarras from '../../organisms/minha-oi/contentCodigoBarras';
import * as Util from '../../../controller/util.js';



//console.log('Instanciando templates/index.js');

const codigoDeBarras = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║     index minha-oi codigoDeBarras      ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>Codigo de Barras</title>
        <FaviIcon />
        <meta name="description" content="Minha VVC Codigo de Barras" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvc.com.br/minha-oi/codigo-de-barras" />
        <link rel="amphtml" href="/amp/minha-oi/atendimento-oi/" />
        <HeaderHtml modo={modo} />
      </Head>
      <Headerminhavvc modo={modo} Cidade={cidade} />
      <BodyCodigoBarras modo={modo} Cidade={cidade} />

      <Footerminhavvc modo={modo} Cidade={cidade} />

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
    </div>
  )
}



export default codigoDeBarras
