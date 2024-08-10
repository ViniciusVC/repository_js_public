import React from 'react'
//import Link from 'next/link'
import Head from 'next/head';
import FavIcon from '../../atoms/atFavIcon';
import Footerminhavvc from '../../organisms/meuvvc/footerMinhavvc.js'
import ListadeRotas from '../../moleculas/moListadeRotas/index.js';
import BodySegundaVia from '../../organisms/meuvvc/contentSegundavia';
import Headerminhavvc from '../../organisms/meuvvc/headerMinhavvc.js';
import Line from '../../atoms/atLine/';
import HeaderMenu from "../../moleculas/meuvvc/moHeaders/headerMenu";
import HeaderHtml from "../../moleculas/meuvvc/moHeaders/headerHtml"
import ChatBoot from "../../moleculas/meuvvc/moChatboot"

import * as Util from '../../../controller/util.js';



//console.log('Instanciando templates/index.js');

const segundaVia = function(props){
  console.log('╔══════════════════════════════════════╗');
  console.log('║      index meuvvc  segunda-via       ║');
  console.log('╚══════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade,"Rio de Janeiro");
  var modo = Util.validaProps(props.modo,"html"); 
  
console.log(props)
  return(
  <div>
    <Head>
      <title>Segunda-Via</title>
      <FavIcon />
      <meta name="description" content="meuvvc Segunda-Via" />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.vvcestudio.com.br/meuvvc/segunda-via/"/>
      <link rel="amphtml" href="/amp/meuvvc/segunda-via/"/>
      <HeaderHtml modo={modo}/>
      <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    </Head>
    <div className="segundaVia">
    <Headerminhavvc modo={modo} Cidade={cidade}/>
    {/* teste javascript com amp */}
    <BodySegundaVia modo={modo} Cidade={cidade}/>
      <Line css="linhaDivisao"/>
      <Footerminhavvc modo={modo} Cidade={cidade}/>
      {/* <ChatBoot modo={modo} />  */}
    </div>
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
)}

export default segundaVia
