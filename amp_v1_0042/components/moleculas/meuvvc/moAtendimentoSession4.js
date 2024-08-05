import React from "react";
import Div from "../../atoms/atDiv/index.js";
import Icon from "../../atoms/atIcon/index.js";
import Img from "../../atoms/atImg/index.js";
import BtLink from "../../atoms/atBtLink/index.js";
import * as Util from "../../../controller/util.js";

const moAtendimentoSession4 = props => {
	var modo = Util.validaProps(props.modo, "html");

	return (
		<section className="whatsAppContact">
			<div className="sectionContent">
				<h2>WhatsApp da Oi</h2>
				<h3>Fale com a Joice pelo <b>WhatsApp</b></h3>
				<Img src="https://www.vvcestudio.com.br/meuvvc/assets/images/whatsapp.png"
				     width="280px"
				     height="241.9px"
				     alt="Fale com a Joice pelo WhatsApp"
				     title="Fale com a Joice pelo WhatsApp"
				     class="ClassImgNext hideOnDesktop"
				     modo={modo} />
				<p>Joice, a inteligência artificial da Oi, te ajuda a resolver o que precisa pelo WhatsApp. Olha só o que você pode pedir pra ela:</p>
				<ol className="joiceFaz">
					<li>
						<Div display="horizontal">
							<Icon type="check2"
							      color="#D82482"
							      width="15px"
							      marginRight="10px" />
							Código de Barras da sua conta
						</Div>
					</li>
					<li>
						<Div display="horizontal">
							<Icon type="check2"
							      color="#D82482"
							      width="15px"
							      marginRight="10px" />
							Conta detalhada em PDF
						</Div>
					</li>
					<li>
						<Div display="horizontal">
							<Icon type="check2"
							      color="#D82482"
							      width="15px"
							      marginRight="10px" />
							Ativação de Conta Digital
						</Div>
					</li>
					<li>
						<Div display="horizontal">
							<Icon type="check2"
							      color="#D82482"
							      width="15px"
							      marginRight="10px" />
							Ajuda com Suporte Técnico
						</Div>
					</li>
					<li>
						<Div display="horizontal">
							<Icon type="check2"
							      color="#D82482"
							      width="15px"
							      marginRight="10px" />
							Troca de senha e nome da rede Wi-fi
						</Div>
					</li>
				</ol>
				<BtLink href="https://api.whatsapp.com/send?1=pt_BR&phone=553131313131"
					value="Falar com a Joice"
					estilo="rosa-invetido-curto"
					width="300px"
					mobilewidth="100%" />
			</div>
			<Img src="https://www.vvcestudio.com.br/meuvvc/assets/images/whatsapp.png"
			     width="520px"
			     height="449.233px"
			     alt="Fale com a Joice pelo WhatsApp"
			     title="Fale com a Joice pelo WhatsApp"
			     class="ClassImgNext hideOnMobile"
			     modo={modo} />
			<style jsx>{`
				section.whatsAppContact {
					font-family: SimplonBP-Regular;
					width: 100%;
					display: flex;
					justify-content: space-between;
				}

				section.whatsAppContact div.sectionContent {
					width: 50%;
				}

				section.whatsAppContact h2 {
					font-weight: 400px;
					font-style: normal;
					font-size: 1rem;
					line-height: 1.2;
					color: rgb(153, 153, 153);
					text-transform: uppercase;
					margin: 1rem 0px;
					letter-spacing: 1px;
				}

				section.whatsAppContact h3 {
					font-weight: 300;
					font-style: normal;
					line-height: 1.2;
					text-transform: uppercase;
					letter-spacing: -0.2px;
					font-size: 2rem;
					margin: 1rem 0px;
					color: #222;
				}

				section.whatsAppContact h3 b {
					font-weight: 700;
				}

				section.whatsAppContact p {
					font-size: 16px;
					color: rgb(107, 107, 107);
					margin: 1em 0px;
					line-height: 1.2;
					width: 50%;
				}
				 
				ol.joiceFaz {
					list-style-type: none;
					padding: 0;
				}

				ol.joiceFaz li:not(:first-of-type) {
					margin-top: 10px;
				}

				@media only screen and (max-width: 520px) {
					section.whatsAppContact {
						flex-direction: column;
					}

					section.whatsAppContact h3 {
						font-size: 1.5rem;
					}

					section.whatsAppContact div.sectionContent,
					section.whatsAppContact p {
						width: 100%;
					}
				}
			`}</style>
		</section>
	);
};

export default moAtendimentoSession4;
