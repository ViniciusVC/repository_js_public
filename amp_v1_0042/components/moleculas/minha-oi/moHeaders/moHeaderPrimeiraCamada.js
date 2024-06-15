import React from "react";
import Acessibilidade from "./moHeaderAcessibilidade.js";
import ParaAssinar from "./moHeaderParaAssinar.js";

const headerPrimeiraCamada = props => {
    return (
        <section className="acessibilidade-desktop">
            <div className="atDivHorizontal">
                <Acessibilidade />
                <ParaAssinar />
            </div>
            <style jsx>{`
            .acessibilidade-desktop{
                display: block;
            }
            @media(max-width: 520px) {
                .acessibilidade-desktop{
                    display: none;
                }
            }
            .atDivHorizontal{
                margin-top:13px;
                margin-bottom:30px;
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
        `}</style>
        </section>
    )
}

export default headerPrimeiraCamada