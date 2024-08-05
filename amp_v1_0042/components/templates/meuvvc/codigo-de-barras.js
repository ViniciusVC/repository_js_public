import React from 'react'

import Head from 'next/head';
import FaviIcon from '../../atoms/atFavIcon/index.js';
import Headerminhavvc from '../../organisms/meuvvc/headerMinhavvc.js';
import Footerminhavvc from '../../organisms/meuvvc/footerMinhavvc.js';
import HeaderHtml from "../../moleculas/meuvvc/moHeaders/headerHtml.js"
import BodyCodigoBarras from '../../organisms/meuvvc/contentCodigoBarras';
import * as Util from '../../../controller/util.js';



//console.log('Instanciando templates/index.js');

const codigoDeBarras = function (props) {
  console.log('╔══════════════════════════════════════╗');
  console.log('║     index meuvvc codigoDeBarras      ║');
  console.log('╚══════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>Codigo de Barras</title>
        <FaviIcon />
        <meta name="description" content="Minha VVC Codigo de Barras" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvcestudio.com.br/meuvvc/codigo-de-barras" />
        <link rel="amphtml" href="/amp/meuvvc/atendimento-oi/" />
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
