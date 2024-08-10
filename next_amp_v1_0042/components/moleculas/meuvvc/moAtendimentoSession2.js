import React from "react";
import BtLink from "../../atoms/atBtLink/index.js";
import * as Util from "../../../controller/util.js";

const moAtendimentoSession2 = props => {
	var modo = Util.validaProps(props.modo, "html");

	return (
		<div className="moAtendimentoSession2">
			<div className="container-atendimento">
				<h1 className="text-titulo">ATENDIMENTO OI</h1>
				<h2 className="text-subtitulo">
					A GENTE TEM TUDO PRA <span className="subtituloStrong">RESOLVER SEU PROBLEMA</span>
				</h2>
				<p className="text-info">
					Tire suas dúvidas, fale com a gente por WhatsApp, com o Assistente
					Virtual ou ligue pro nosso atendimento.
				</p>
				<BtLink href="https://www.vvcestudio.com.br/faq/"
					value="Acessar agora"
					estilo="rosa-invetido-curto"
					width="300px"
					mobilewidth="100%" />
			</div>
	
			<style jsx>{`
				.moAtendimentoSession2 {
					font-family: SimplonBP-Regular;
				}

				.container-atendimento {
					width: 65%;
				}

				.text-titulo {
					font-weight: 400px;
					font-style: normal;
					font-size: 1rem;
					line-height: 1.2;
					color: rgb(153, 153, 153);
					text-transform: uppercase;
					margin: 1rem 0px;
					letter-spacing: 1px;
				}

				.text-subtitulo {
					font-weight: 300;
					font-style: normal;
					line-height: 1.2;
					text-transform: uppercase;
					letter-spacing: -0.2px;
					font-size: 2rem;
					margin: 1rem 0px;
					color: #222;
				}

				.subtituloStrong {
					font-weight: 700;
				}

				.text-info {
					font-size: 16px;
					color: rgb(107, 107, 107);
					line-height: 1.2;
				}

				@media (max-width: 520px) {
					.container-atendimento {
						width: 100%;
					}

					.text-subtitulo {
						font-size: 1.5rem;
					}
				}

				@media only screen and (min-width: 1000px) {
					.moAtendimentoSession2 {
						width: 50%;
					}
				}

				@media only screen and (max-width: 1000px) {
					.moAtendimentoSession2 {
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default moAtendimentoSession2;
