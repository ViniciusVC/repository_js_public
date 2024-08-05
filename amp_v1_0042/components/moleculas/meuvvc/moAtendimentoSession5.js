import React from "react";
import Icon from "../../atoms/atIcon/index.js";
import * as Util from "../../../controller/util.js";

const moAtendimentoSession5 = props => {
	var modo = Util.validaProps(props.modo, "html");

	return (
		<section className="telefonesContato">
			<h2 className="titulo">TELEFONES PARA CONTATO</h2>

			<div className="container">
				<div className="contentWrapper">
					<Icon type="comboC" colorGradient1="#f8562c" colorGradient2="#e92555" width="30px" />
					<div>
						<p className="subtitulo">Combo</p>
						<p className="text-info">
							*144 do seu celular Oi ou
							<br />
							103 31 e 1057 de
							<br />
							qualquer telefone
						</p>
					</div>
				</div>

				<div className="contentWrapper">
					<Icon type="mobileC" colorGradient1="#f8562c" colorGradient2="#e92555" width="30px" />
					<div>
						<p className="subtitulo">Celular</p>
						<p className="text-info">
							*144 do seu celular Oi ou
							<br />
							1057 de qualquer
							<br />
							telefone
						</p>
					</div>
				</div>

				<div className="contentWrapper">
					<Icon type="broadbandB" colorGradient1="#f8562c" colorGradient2="#e92555" width="30px" />
					<div>
						<p className="subtitulo">Internet</p>
						<p className="text-info">
							103 31 pra banda larga,
							<br />
							1057 pra internet móvel
							<br />
							ou 106 31 pra fibra ótica
						</p>
					</div>
				</div>

				<div className="contentWrapper">
					<Icon type="tvhd" colorGradient1="#f8562c" colorGradient2="#e92555" width="30px" />
					<div>
						<p className="subtitulo">TV HD</p>
						<p className="text-info">
							106 31 de qualquer
							<br />
							telefone
						</p>
					</div>
				</div>

				<div className="contentWrapper">
					<Icon type="product_fixoB" colorGradient1="#f8562c" colorGradient2="#e92555" width="30px" />
					<div>
						<p className="subtitulo">Fixo</p>
						<p className="text-info">
							103 31 de qualquer
							<br />
							telefone
						</p>
					</div>
				</div>
			</div>

			<style jsx>{`
				section.telefonesContato {
					font-family: SimplonBP-Regular;
					margin-bottom: 50px;
				}

				.container {
					display: flex;
					justify-content: space-between;
				}

				.contentWrapper {
					display: flex;
					flex-direction: column;
				}

				.contentWrapper div {
					margin: 40px 0 0 0;
				}

				.titulo {
					color: #000;
					font-size: 32px;
					margin-bottom: 35px;
				}

				.subtitulo {
					margin: 0 0 10px 0;
					font-size: 1.25rem;
				}

				.text-info {
					margin: 0;
					color: #6b6b6b;
					font-size: 16px;
					line-height: 1.5rem;
				}
				
				@media only screen and (max-width: 520px) {
					.container {
						flex-direction: column;
					}

					.contentWrapper {
						flex-direction: row;
						margin-bottom: 30px;
					}

					.contentWrapper div {
						margin: 0 0 0 20px;
					}
				}
			`}</style>
		</section>
	);
};

export default moAtendimentoSession5;
