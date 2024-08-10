import React from 'react'
import Head from 'next/head';
import Header04 from '../components/organisms/documentoscopia/header04'
import Img from '../components/atoms/atImg/index.js'
import Div from '../components/atoms/atDiv/index.js'

const Error = function(props){
console.log('\u001b[31m╔════════════════════════════════════════╗');
console.log('\u001b[31m║      _error 404                        ║');
console.log('\u001b[31m╚════════════════════════════════════════╝\u001b[0m');
return(
  <div>
    <Head>
        <title>Página não encontrada</title>
        <link rel="icon" href="https://www.vvcestudio.com.br/fontesvvc/favicon.ico" />
        <meta name="description" content="Pagina não encontrada." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.vvcestudio.com.br/"/>
    </Head>
    <Header04 modo="html"></Header04>
    <Div display="horizontal">
        <div className="coluna404">
          <h1 className='title'>Ih, essa página não foi encontrada</h1>
          <p>
            Talvez o endereço digitado esteja incorreto ou você tenha
            clicado em uma página que não existe.
          </p>
          <p>
            Você pode ver as opções do menu acima ou continuar
            a navegação pela página inicial.
          </p><br/>
        </div>
        <div>
            <Img 
              src="/static/assetsv5/img/hero-large-404.png"
              width="323px"
              height="436px"
              alt="Componente Img exemplo next"
              title="Componente Img exemplo next"
              class="ClassImgNext"
              modo="html">
            </Img>
        </div>
    </Div>
    <style jsx>{`
      .title {
        margin: 0;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .coluna404{
        width: 50%;
      }
    `}</style>
  </div>
)}

export default Error


/*
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <div>
      <h1>Pagina não encontrada</h1>
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </div>
    )
  }
}
*/


