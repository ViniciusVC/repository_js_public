import React from 'react';
import Head from 'next/head';
import Tags01 from '../organisms/seo/tags01';
import HeaderParametrizado from '../moleculas/headerParametrizado'
import BodyMapaCobertura from '../organisms/mapa-cobertura/bodyMapaCobertura'
import FooterParametrizado from '../moleculas/footerParametrizado'
import FavIcon from '../atoms/atFavIcon/index'

const mapacobertura = function (props) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      mapacobertura                     ║');
    console.log('╚════════════════════════════════════════╝');
    var cidade = "Rio de Janeiro";
    if (props.cidade != undefined) {
        cidade = props.cidade
    }
    var modo = "html";
    if (props.modo != undefined) {
        modo = props.modo
    }
    return (
        <div>
            <Head>
                <title>Mapa de Cobertura</title>
                <FavIcon />
                <meta name="description" content="Mapa de Cobertura." />
                <meta name="robots" content="noindex" />
                {/* <link rel="canonical" href="https://www.vvcestudio.com.br/mapacobertura/" /> */}
            </Head>
            <Tags01 />

            <HeaderParametrizado
                backgroundColor=""
                colorText="#222222"
                colorTextBorderBottom="#5863ff"
                colorButton="#278BFF"
                colorButtonText="#fff"
                colorButtonBorder="#278BFF"
                colorButtonHover="#5863ff"
                colorButtonBorderHover="#5863ff"
                colorIconSearch="#222222"
            />
            <hr />
            <div className="titulo-mapa-cobertura">
                Mapa de Cobertura
            </div>
            <hr />

            <BodyMapaCobertura />

            <FooterParametrizado
                colorText="#222"
                colorTextHover="#278BFF"
                colorIconMobile="#5863ff"
                colorLogo="#278BFF"
                colorLogoText="#fff"
                colorButtons="#278BFF"
                colorButtonsHover="#5863ff"
                colorButtonText="#fff"
            />

            <style jsx>{`
            .titulo-mapa-cobertura {
                padding: 1.42rem 0;
                font-size: 1.2rem;
                margin-left: 1.12rem;
                margin-right: 1.12rem;
            }
            @media screen and (min-width:734px) {
                .titulo-mapa-cobertura {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 44rem
                }
            }            
            @media screen and (min-width:1024px) {
                .titulo-mapa-cobertura {
                    max-width: 60rem
                }
            }
            @media screen and (min-width:1250px) {
                .titulo-mapa-cobertura {
                    max-width: 73.125rem
                }
            }
            html{
                font-size:1rem;
                -webkit-font-smoothing:antialiased;
                -moz-osx-font-smoothing:grayscale;
                -webkit-box-sizing:border-box;
                box-sizing:border-box;
            }
            `}</style>
            <style jsx global>
                {`
                body {
                    font: 11px SimplonBP-Regular;
                    color: #000;
                    margin: 0;
                    padding: 0;
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
        </div>
    )
}

export default mapacobertura
