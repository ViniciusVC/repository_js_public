import React from "react";
import Link from "../../atoms/atLink/index.js";
import * as Util from "../../../controller/util.js";
import Img from "../../atoms/atImg/index.js";
import Icon from "../../atoms/atIcon/index.js";

const moAtendimentoSession6 = props => {
  var modo = Util.validaProps(props.modo, "html");
  return (
    <section className="minhavvcSection atendimentoCta">
      <div className="amoebaMobile">
        <Img
          src="https://www.vvc.com.br/minha-oi/assets/images/amoeba-falecomavvc-mobile.svg"
          width="52px"
          height="54px"
          alt="Amoeba Oi mobile"
          title="Amoeba Oi"
          class="amoebaMobile"
          modo={modo}
        />
      </div>

      <div className="amoebaDesktop">
        <Img
          src="https://www.vvc.com.br/minha-oi/assets/images/amoeba-falecomavvc.svg"
          width="95px"
          height="112px"
          alt="Amoeba Oi desktop"
          title="Amoeba Oi"
          class="amoebaDesktop"
          modo={modo}
        />
      </div>

      <h2>Atendimento online rápido e seguro</h2>

      <p className="text-info">
        Resolva tudo pelas redes sociais ou fale com nosso Assistente Virtual.
      </p>

      <a href="https://www.vvc.com.br/faq/p/como-falo-com-o-atendimento-da-oi">
        <p className="linkText">
          Veja <span>como acessar</span>
        </p>
        <Icon type="goIcon"
              color="white"
              width="20px"
              colorGradient1="#f8562c"
              colorGradient2="#e92555"
              height="20px" />
      </a>

      <style jsx>{`
        section.minhavvcSection.atendimentoCta {
          box-shadow: rgba(219, 219, 219, 0.6) 8px 8px 16px 0px;
          position: relative;
          padding: 40px 35px;
        }

        section.minhavvcSection.atendimentoCta div {
          position: absolute;
          top: 0;
          left: 0;
        }

        section.minhavvcSection.atendimentoCta a p.linkText,
        section.minhavvcSection.atendimentoCta div.amoebaDesktop {
          display: none;
        }

        section.minhavvcSection.atendimentoCta h2 {
          font-size: 1rem;
          font-weight: 600;
          font-style: normal;
          line-height: 1.4;
          color: rgb(34, 34, 34);
          width: 80%;
          letter-spacing: 1px;
        }
        .text-info {
          font-weight: 300;
          font-style: normal;
          font-size: 18px;
          color: rgb(34, 34, 34);
          margin-bottom: 0;
          font-family: Simplon-light;
          line-height: 1.4;
        }

        section.minhavvcSection.atendimentoCta a {
          float: right;
          transform: translateY(-25px);
          text-decoration: none;
          margin-right: -10px;
          color: rgb(34, 34, 34);
          font-family: SimplonBP-Regular;
        }

        @media only screen and (min-width: 1024px) {
          section.minhavvcSection.atendimentoCta {
            padding: 30px 35px 30px 150px;
          }

          section.minhavvcSection.atendimentoCta div.amoebaMobile {
            display: none;
          }

          section.minhavvcSection.atendimentoCta h2 {
            font-size: 1.2rem;
            margin: 0;
          }

          section.minhavvcSection.atendimentoCta p {
            width: 500px;
            margin: 0;
          }

          section.minhavvcSection.atendimentoCta a {
            transform: translateY(-50px);
            display: flex;
            align-items: center;
          }

          section.minhavvcSection.atendimentoCta a p.linkText,
          section.minhavvcSection.atendimentoCta div.amoebaDesktop {
            display: block;
          }

          section.minhavvcSection.atendimentoCta a p.linkText {
            width: auto;
            margin-right: 20px;
          }

          section.minhavvcSection.atendimentoCta a p.linkText span {
            color: rgb(181, 31, 115);
          }
        }
      `}</style>
    </section>
  );
};

export default moAtendimentoSession6;
