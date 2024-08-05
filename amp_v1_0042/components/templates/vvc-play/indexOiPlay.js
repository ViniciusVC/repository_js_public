import React from 'react'
import Head from 'next/head'
import FavIcon from '../../atoms/atFavIcon'
import FooterParametrizado from '../../moleculas/footerParametrizado'
import HeaderParametrizado from '../../moleculas/headerParametrizado'
import Bodyvvcplay from '../../organisms/vvc-play/bodyvvcplay'
import * as Util from '../../../controller/util.js'

const Home = function (props) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      index vvc-play                     ║');
    console.log('╚════════════════════════════════════════╝');
    var modo = Util.validaProps(props.modo, "html")
    return (
        <>
            <div className="container">
                <Head >
                    <title>VVC Play</title>
                    <FavIcon />
                    <meta name="description" content="VVC Play" />
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://www.vvcestudio.com.br/vvc-play" />
                </Head>

                <HeaderParametrizado
                    backgroundColor=""
                    colorText="#909090"
                    colorTextBorderBottom="#dbdbdb"
                    colorButton=""
                    colorButtonText="#dbdbdb"
                    colorButtonBorder="#dbdbdb"
                    colorButtonHover=""
                    colorButtonBorderHover=""
                    colorIconSearch="#909090"
                    modo={modo}
                />

                <Bodyvvcplay modo={modo} />

                <FooterParametrizado
                    colorText="#909090"
                    colorTextHover="#fff"
                    colorIconMobile="#909090"
                    colorLogo="#909090"
                    colorLogoText="#222"
                    colorButtons="#909090"
                    colorButtonsHover="#fff"
                    colorButtonText="#222"
                    modo={modo}
                />
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
                    overflow-x: hidden;
                }
                @font-face {
                    font-family: 'SimplonBP-Regular';
                    src: url('https://www.vvcestudio.com.br/publicV2/fonts/simplonbp-regular-webfont.woff');
                } 
                @font-face {
                    font-family: 'Simplon-Headline';
                    src: url('https://www.vvcestudio.com.br/publicV2/fonts/simplonvvc-headline-webfont.woff');
                }
                @font-face {
                    font-family: 'Simplon-Bold';
                    src: url('https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-bold-webfont.woff');
                } 
                @font-face {
                    font-family: 'Simplon-Medium';
                    src: url('https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-medium-webfont.woff');
                } 
                @font-face {
                    font-family: 'Simplon-Light';
                    src: url('https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-light-webfont.woff');
                }
                `}
            </style>
        </>
    )
}

export default Home
