
import React from "react";
import Link from '../../atoms/atLink/index.js';
import Icon from '../../atoms/atIcon/index.js';

// import Acessibilidade from "./headerAcessibilidade.js";
// import ParaAssinar from "./headerParaAssinar.js";
// import FooterLogo from "./footerLogo.js"
// import FooterColuna from "./moFooterColuna.js"

const moFooterColuna = props => {
    return (
        <div>
            <div className="moFooterColuna">
                <div className="moFooterColunaTitulo">
                    <Link href={props.links[0]} value={props.itens[0]} estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="moFooterColunaItem">
                    <Link href={props.links[1]} value={props.itens[1]} estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="moFooterColunaItem">
                    <Link href={props.links[2]} value={props.itens[2]} estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="moFooterColunaItem">
                    <Link href={props.links[3]} value={props.itens[3]} estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="moFooterColunaItem">
                    <Link href={props.links[4]} value={props.itens[4]} estilo="LinkFooterNavminhavvc"/>
                </div>
            </div>            
            <div className="moFooterLinhaIcon">
                <Icon type={props.icone} color="#000000" width="30px"/>
                <div className="moFooterLinhaIconCenter">
                    <Link href={props.links[0]} value={props.itens[0]} estilo="LinkFooterNavminhavvc"/>
                </div>
            </div>
        <style jsx>{`
            .moFooterColuna{
                margin-left:40px;
                font-family: SimplonBP-Regular;
            }
            .moFooterColunaTitulo{
                font-weight: bold;
                color:#000;
            }
            .moFooterColunaItem{
                margin-top:20px;
                color:#808080;
            }
            .moFooterLinhaIconCenter{
                padding-left: 20px;
                display: -webkit-flex;
                display: flex;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;
            }
            @media only screen and (min-width : 1000px) {
                .moFooterLinhaIcon{
                    display: none;
                    visibility: hidden;
                }
            }
            @media only screen and (max-width : 1000px) {
                .moFooterColuna{
                    visibility: hidden;
                    display: none;
                }
                .footerLogo{
                    visibility: hidden;
                    display: none;
                }
                .moFooterLinhaIcon{
                    padding: 20px;
                    width: 200px;
                    font-weight: bold;
                    color:#000;
                    visibility: visible;
                    display: inline-flex;
                    flex-wrap: wrap;
                }
            }

        `}</style>
        </div>
    )
}

export default moFooterColuna