import React from 'react';
import Head from 'next/head';
import ListadeRotas from '../moleculas/moListadeRotas/index.js';
import FavIcon from '../atoms/atFavIcon/'
import Div from '../atoms/atDiv/index.js';
import * as Atoms from '../index.js';
import * as Util from '../../controller/util.js';

const getAtoms = function(nameAtoms,modo){
  return Atoms[nameAtoms](modo);
}

const componentes = function(props){
    console.log('╔════════════════════════════════════════╗');
    console.log('║      componentes                       ║');
    console.log('╚════════════════════════════════════════╝');
    var cidade = Util.validaProps(props.cidade,"Rio de Janeiro")
    var modo = Util.validaProps(props.modo,"html")
    var id = Util.validaProps(props.id,"atArrow");
    return(
    <Div display="vertical">
      <Head>
        <title>Componentes</title>
        <FavIcon />
        <link rel="icon" href="https://www.vvcestudio.com.br/componentes/componentes" />
        <meta name="description" content="Componentes html do Portal da Oi (AMP)." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvcestudio.com.br/"/>
        <link rel="amphtml" href="https://www.vvcestudio.com.br/amp/"/>
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <dib><h1 className='title'>Componentes html deste Projeto.</h1></dib>
      <Div display="horizontal">
        <div className='coluna1'>
            <h4 className='CssTitleRotasProjeto'>Lista de componentes</h4>
              {Object.keys(Atoms).map((nomeAtoms, index) => {
                return (<div>
                  <a href={"/componentes/?id="+nomeAtoms}>
                  {index + " - "+ nomeAtoms}
                  </a>
                  </div>)
              })}
              <ListadeRotas/>    
        </div>
        <div className='coluna2'>
            <div>{getAtoms(id,modo)}</div>
        </div>
      </Div>
      <div>
            Cidade:{cidade}<br/>
            Modo:{modo}<br/>
            teste function apenasNumros({Util.apenasNumeros('A1B2C3')})
      </div>
      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 10px;
          line-height: 1.15;
          font-size: 48px;
        }
        .coluna1{
          width: 20%;
        }
        .coluna2{
          width: 70%;
          background-color: #e9e9e9;
        }
        .CssTitleListadeAtomos{
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 22px;
        }
      `}</style>
    </Div>
 )
}

export default componentes