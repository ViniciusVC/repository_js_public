import React from "react";
import * as Util from "../../../controller/util.js";

const moAtendimentoSession7 = props => {
  var modo = Util.validaProps(props.modo, "html");
  return (
    <section className="minhavvcSection outrosContatosSection">
      <h2>Outros contatos</h2>
      <ul>
        <li>
          <h3>Pr&eacute;-pago</h3>
          <p>*804 pra ver saldo</p>
          <p>*805 pra ver b&ocirc;nus</p>
          <p>*880 pra ver ofertas</p>
        </li>
        <li>
          <h3>Roaming internacional</h3>
          <p>*144 e 1057 pra liga&ccedil;&otilde;es do Brasil</p>
          <p>+55 (21) 2729-1301 pra liga&ccedil;&otilde;es do exterior.</p>
          <p>Gr&aacute;tis para celular Oi</p>
        </li>
        <li>
          <h3>Provedor da Oi</h3>
          <p>4002 3131 em capitais</p>
          <p>0800 283 0649 outras regi&otilde;es</p>
        </li>
        <li>
          <h3>Paggo da Oi</h3>
          <p>0800 285 3110 pra clientes</p>
          <p>0800 286 0311 pra lojistas</p>
        </li>
        <li>
          <h3>Deficientes auditivos</h3>
          <p>142 ligue ou envie SMS</p>
        </li>
        <li>
          <h3>Deficientes visuais</h3>
          <p>*144 do seu celular Oi</p>
          <p>1057 de qualquer telefone</p>
        </li>
        <li>
          <h3>Lojas Oi</h3>
          <a href="https://www.vvcestudio.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/">
            Lista de lojas da Oi
          </a>
          <a href="https://www.vvcestudio.com.br/ArquivosEstaticos/oi/vvc-pra-voce/atendimento/pdf/atendimento-presencial-RJ.pdf">
            Postos de atendimento presencial
          </a>
          <a href="https://www.vvcestudio.com.br/ArquivosEstaticos/oi/docs/pdf/atendimento/deficiente-auditiva.pdf">
            Loja de atendimento em LIBRAS
          </a>
        </li>
        <li>
          <h3>Carta</h3>
          <p>Caixa Postal 20005</p>
          <p>CEP 74533-970</p>
          <p>Goi&acirc;nia-GO</p>
        </li>
      </ul>
      <style jsx>{`
        section.minhavvcSection.outrosContatosSection {
          font-family: SimplonBP-Regular, sans-serif;
          width: 100%;
          padding: 1.25rem 0px;
        }

        section.minhavvcSection.outrosContatosSection h2 {
          font-weight: 300;
          font-style: normal;
          font-size: 2rem;
          text-transform: uppercase;
          color: rgb(0, 0, 0);
          letter-spacing: -0.2px;
          margin-bottom: 2rem;
          font-family: Simplon-light;
        }

        section.minhavvcSection.outrosContatosSection ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        section.minhavvcSection.outrosContatosSection ul li {
          margin-bottom: 1.25rem;
          font-family: Simplon-light;
        }

        section.minhavvcSection.outrosContatosSection ul li h3 {
          font-weight: 500;
          font-size: 1.25rem;
          margin: 0 0 0.75rem;
          font-family: SimplonBP-Regular;
        }

        section.minhavvcSection.outrosContatosSection ul li p,
        section.minhavvcSection.outrosContatosSection ul li a {
          color: rgb(119, 119, 119);
          font-weight: 300;
          margin: 0 0 0.5rem;
        }

        section.minhavvcSection.outrosContatosSection ul li a {
          display: block;
        }

        @media screen and (min-width: 1024px) {
          section.minhavvcSection.outrosContatosSection ul {
            display: flex;
            flex-wrap: wrap;
          }

          section.minhavvcSection.outrosContatosSection
            ul
            li:nth-of-type(4n + 2),
          section.minhavvcSection.outrosContatosSection
            ul
            li:nth-of-type(4n + 3) {
            width: 30%;
          }

          section.minhavvcSection.outrosContatosSection
            ul
            li:nth-of-type(4n + 1),
          section.minhavvcSection.outrosContatosSection
            ul
            li:nth-of-type(4n + 4) {
            width: 20%;
          }
        }
      `}</style>
    </section>
  );
};

export default moAtendimentoSession7;
