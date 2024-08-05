import React from "react";
import Icon from "../../atoms/atIcon/index.js";
import * as Util from "../../../controller/util.js";

const moAtendimentoSession3 = props => {
  var modo = Util.validaProps(props.modo, "html");

	return (
		<div className="moAtendimentoSession3">
			<ol className="listaUteis">
				<li>
					<a href="https://www.vvcestudio.com.br/faq/p/como-consigo-a-2via-da-minha-conta">
						Como consigo a 2ª via da minha conta?
						<Icon type="caret" color="#D82482" width="8px" />
					</a>
				</li>
				<li>
					<a href="https://www.vvcestudio.com.br/faq/p/como-religar-um-servico-bloqueado">
						Como religar um serviço bloqueado?
						<Icon type="caret" color="#D82482" width="8px" />
					</a>
				</li>
				<li>
					<a href="https://www.vvcestudio.com.br/faq/p/como-resolver-problemas-tecnicos-de-fixo-e-banda-larga-da-oi">
						Como resolver problemas técnicos de fixo e banda larga da Oi?
						<Icon type="caret" color="#D82482" width="8px" />
					</a>
				</li>
				<li>
					<a href="https://www.vvcestudio.com.br/faq/p/como-recarrego-um-celular-pre-pago-pelo-aplicativo-meuvvc">
						Como recarrego um celular Pré-pago pelo aplicativo Minha VVC?
						<Icon type="caret" color="#D82482" width="8px" />
					</a>
				</li>
				<li>
					<a href="https://www.vvcestudio.com.br/faq/p/como-bloqueio-meu-celular-ou-minimodem-por-perda-ou-roubo">
						Como bloqueio meu celular ou minimodem por perda ou roubo?
						<Icon type="caret" color="#D82482" width="8px" />
					</a>
				</li>
			</ol>
			<style jsx>{`
				div.moAtendimentoSession3 {
					font-family: Simplon-medium;
					width: 100%;
				}

				ol.listaUteis {
					color: #d82482;
					padding: 0;
					margin: 0 auto;
					counter-reset: section;
					width: 90%;
				}

				ol.listaUteis li {
					margin-bottom: 30px;
				}

				ol.listaUteis li a {
					font-family: Simplon-light;
					text-decoration: none;
					color: #222;
					width: 100%;
					display: flex;
					justify-content: space-between;
				}

				ol.listaUteis li a:hover {
					color: #d82482;
				}

				@media only screen and (min-width: 1024px) {
					div.moAtendimentoSession3 {
						width: 50%;
					}
					ol.listaUteis {
						margin: unset;
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default moAtendimentoSession3;
