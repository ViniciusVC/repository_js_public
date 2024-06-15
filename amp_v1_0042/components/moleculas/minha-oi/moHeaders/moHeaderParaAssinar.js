import React from "react";
import Link from "../../../atoms/atLink";

const headerParaAssinar = props => {
    return (
        <div className="headerParaAssinar">
            <span className="headerParaAssinarSpan1">
                Para assinar:
            </span>
            <span className="headerParaAssinarSpan">
                <Link href="https://www.vvc.com.br/combo/" value="Combo" estilo="LinkHeaderminhavvc"/>
            </span>
            <span className="headerParaAssinarSpan">
                |
            </span>
            <span className="headerParaAssinarSpan">
                <Link href="https://www.vvc.com.br/tv-hd/" value="TV HD" estilo="LinkHeaderminhavvc"/>
            </span>
            <span className="headerParaAssinarSpan">
                |
            </span>
            <span className="headerParaAssinarSpan">
                <Link href="https://www.vvc.com.br/celular/" value="Celular" estilo="LinkHeaderminhavvc"/>
            </span>
            <span className="headerParaAssinarSpan">
                |
            </span>
            <span className="headerParaAssinarSpan">
                <Link href="https://www.vvc.com.br/internet/" value="Internet" estilo="LinkHeaderminhavvc"/>
            </span>
            <span className="headerParaAssinarSpan">
                |
            </span>
            <span className="headerParaAssinarSpan">
                <Link href="https://www.vvc.com.br/fixo/" value="Fixo" estilo="LinkHeaderminhavvc"/>
            </span>
        <style jsx>{`
            .headerParaAssinar{
                display: inline-flex;
                flex-wrap: wrap;
                font-family: SimplonBP-Regular;
                color: #d82482;
                font-size: 0.75rem;
                /*width:250px;*/
                padding-right:50px;
            }
            .headerParaAssinarSpan{
                margin-left:10px;
            }
            .headerParaAssinarSpan1{
                color:#000000;
                margin-left:10px;
            }
            @media only screen and (max-width : 1000px) {
                .headerParaAssinar{
                    display: none;
                }
            }
        `}</style>
    </div>
    )
}

export default headerParaAssinar