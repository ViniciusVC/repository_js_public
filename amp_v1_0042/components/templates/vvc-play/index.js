import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Footervvcplay from '../../organisms/vvc-play/footervvcplay'
import HeaderParametrizado from '../../moleculas/headerParametrizado'
import Bodyvvcplay from '../../organisms/vvc-play/bodyvvcplay'

const Home = function (props) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      index vvc-play                     ║');
    console.log('╚════════════════════════════════════════╝');
    var cidade = "Rio de Janeiro";
    if (props.cidade != undefined) {
        cidade = cidade.cod
    };
    var modo = "html";
    if (props.modo != undefined) {
        modo = props.modo
    };
    return (
        <>
            <div className="container">
                <Head >
                    <title>VVC Play</title>
                    <FaviIcon />
                    <meta name="description" content="VVC Play" />
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://www.vvc.com.br/vvc-play" />
                </Head>
                <HeaderParametrizado
                    backgroundColor="pink"
                    colorText="blue"
                    colorButton="yellow"
                    colorButtonText="green"
                    colorButtonBorder="red"
                    colorIconSearch="cyan"
                />

                <Bodyvvcplay />

                <Footervvcplay />
            </div>
            <style jsx>{`
                .container {
                    margin: 0;
                    padding: 0;
                    background-color: #242326
                }
                .title {
                    margin: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                    text-align: center;
                }
                `}
            </style>
            <style jsx global>
                {`
                body {
                    background: #242326;
                    font: 11px Simplon;
                    color: #fff;
                    margin: 0;
                    padding: 0;
                }
                `}
            </style>
        </>
    )
}

export default Home
