import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FavIcon from '../../atoms/atFavIcon/'
import Headerminhavvc from '../../organisms/meuvvc/headerMinhavvc.js'
import Footerminhavvc from '../../organisms/meuvvc/footerMinhavvc.js'
import ContentHomeminhavvc from '../../organisms/meuvvc/contentHomeMinhavvc.js'
import ChatBoot from "../../moleculas/meuvvc/moChatboot";
import HeaderHtml from "../../moleculas/meuvvc/moHeaders/headerHtml"
import * as Util from '../../../controller/util.js';

const Home = function (props) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║      index meuvvc                    ║');
    console.log('╚══════════════════════════════════════╝');

    var cidade = Util.validaProps(props.cidade,"Rio de Janeiro");
    var modo = Util.validaProps(props.modo,"html");

    return (
        <div>
            <Head>
                <title>Minha VVC</title>
                <FavIcon />
                <meta name="description" content="meuvvc Home" />
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.vvcestudio.com.br/meuvvc/"/>
                <link rel="amphtml" href="https://www.vvcestudio.com.br/amp/meuvvc/"/>
                <HeaderHtml modo={modo}/>
                <ChatBoot modo={modo} />
            </Head>
              <Headerminhavvc modo={modo} Cidade={cidade}/>
            <div className="home">
              <ContentHomeminhavvc modo={modo} Cidade={cidade}/>
              <Footerminhavvc modo={modo} Cidade={cidade}/>
            </div>
            <style jsx>{`
              .home{
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
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
                font-family: SimplonBP-Regular, sans-serif;        
              }
          `}</style>
        </div>
    )
}

export default Home
