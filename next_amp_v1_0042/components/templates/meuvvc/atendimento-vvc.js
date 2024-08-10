import React from 'react'

import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon/index.js'
import Headerminhavvc from '../../organisms/meuvvc/headerMinhavvc.js'
import Footerminhavvc from '../../organisms/meuvvc/footerMinhavvc.js'
import ContentAtendimento from '../../organisms/meuvvc/contentAtendimento.js'

import HeaderHtml from "../../moleculas/meuvvc/moHeaders/headerHtml.js"
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

    console.log('╔════════════════════════════════════════╗');
    console.log('║        meuvvc   atendimento-oi       ║');
    console.log('╚════════════════════════════════════════╝');

    var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
    var modo = Util.validaProps(props.modo, "html");

    return (
        <div>
            <Head>
                <title>Atendimento Oi</title>
                <FaviIcon />
                <meta name="description" content="Atendimento Oi" />
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.vvcestudio.com.br/meuvvc/atendimento-oi/" />
                <link rel="amphtml" href="https://www.vvcestudio.com.br/amp/meuvvc/atendimento-oi/" />
                <HeaderHtml modo={modo} />
            </Head>
            <div className="atendimentoOi">
                <Headerminhavvc modo={modo} Cidade={cidade} />
                <ContentAtendimento modo={modo} Cidade={cidade} />
                <Footerminhavvc modo={modo} Cidade={cidade} />
            </div>

            <style jsx>{`
                .atendimentoOi{
                    /* width:100%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap; */
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

export default atendimentoOi
