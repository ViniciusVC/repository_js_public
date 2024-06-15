import React from 'react'
import Link from 'next/link'


//console.log('Instanciando templates/index.js');

const ListadeRotas = function(){
  return(
  <div>
    <h4 className='CssTitleRotasProjeto'>Rotas do projeto-2</h4>
    <div className='CssRotasProjeto'>
        <details>
          <summary>HTML</summary>
          <ol type="1">
            <li><Link href='#'>/</Link></li>
            <li><Link href='/home/'>/home/</Link></li>
            <li><Link href='/vvc-play/'>/vvc-play/</Link></li>
            <li><Link href='/lp-assine-pos/'>/lp-assine-pos/</Link></li>
          </ol>
          <ol type="1">
            <li><Link href='/meusdocumentos/'>/meusdocumentos/</Link></li>
            <li><Link href='/meusdocumentos/?passo=1'>/meusdocumentos/?passo=1</Link></li>
            <li><Link href='/meusdocumentos/?passo=2'>/meusdocumentos/?passo=2</Link></li>
            <li><Link href='/meusdocumentos/?passo=3'>/meusdocumentos/?passo=3</Link></li>
            <li><Link href='/meusdocumentos/?passo=4'>/meusdocumentos/?passo=4</Link></li>
            <li><Link href='/meusdocumentos/email/'>/meusdocumentos/email/</Link></li>
            <li><Link href='/meusdocumentos/resposta2/'>/meusdocumentos/email/</Link></li>
            <li><Link href='/meusdocumentos/resposta3/'>/meusdocumentos/email/</Link></li>
          </ol>
          <ol type="1">
            <li><Link href='/minha-oi/'>/minha-oi/</Link></li>
            <li><Link href='/minha-oi/segunda-via/'>/minha-oi/segunda-via/</Link></li>
            <li><Link href='/minha-oi/codigo-de-barras/'>/minha-oi/codigo-de-barras/</Link></li>
            <li><Link href='/minha-oi/atendimento-oi/'>/minha-oi/atendimento-oi/</Link></li>
            <li><Link href='/recarga/'>/recarga/</Link></li>
          </ol>
          <ol type="1">
            <li><Link href='/portabilidade/'>/portabilidade</Link></li>
          </ol>
          <ol type="1">
            <li><Link href='/componentes/'>/componentes/</Link></li>
          </ol>
        </details>
        <details>
          <summary>AMP</summary>
            <ol type="1">
              <li><Link href='/amp/'>/amp/</Link></li>
              <li><Link href='/amp/home/'>/amp/home/</Link></li>
              <li><Link href='/amp/vvc-play/'>/amp/vvc-play/</Link></li>
              <li><Link href='/amp/lp-assine-pos/'>/amp/lp-assine-pos/</Link></li>
              <li><Link href='/amp/meusdocumentos/'>/amp/meusdocumentos/</Link></li>
            </ol>
            <ol type="1">
              <li><Link href='/amp/minha-oi/'>/amp/minha-oi/</Link></li>
              <li><Link href='/amp/minha-oi/segunda-via/'>/amp/minha-oi/segunda-via/</Link></li>
              <li><Link href='/amp/minha-oi/codigo-de-barras/'>/amp/minha-oi/codigo-de-barras/</Link></li>
              <li><Link href='/amp/minha-oi/atendimento-oi/'>/amp/minha-oi/atendimento-oi/</Link></li>
              <li><Link href='/amp/recarga/'>/amp/recarga/</Link></li>
            </ol>
            <ol type="1">
              <li><Link href='/amp/portabilidade'>/amp/portabildade</Link></li>
             
            </ol>
        </details>
        <details>
          <summary>API</summary>
            <ol type="1">
              <li><Link href='/api1/captcha/'>/api1/captcha/</Link></li> 
              <li><Link href='/api1/meusdocumentos/'>/api1/meusdocumentos/</Link> (apenas post) </li> 
            </ol>
        </details>
    </div>
    <style jsx>{`
      .CssRotasProjeto {
        width: 100%;
        color: #333;
        font-size: 17px;
      }
      .CssTitleRotasProjeto {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        font-size: 22px;
      }
    `}</style>
  </div>
)}

export default ListadeRotas
