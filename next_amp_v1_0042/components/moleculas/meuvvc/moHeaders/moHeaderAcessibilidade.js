import React from "react";
import Link from "../../../atoms/atLink";

const headerAcessibilidade = props => {
    return (
        <div className="headerAcessibilidade">    
                    <div className="divbtAcessibilidade">
                        <button className="btAcessibilidadeA">A+</button>
                    </div>
                    <div className="divbtAcessibilidade">
                        <button className="btAcessibilidadeA">A-</button>
                    </div>
                    <div className="divSeparaAcessibilidade">
                        <span>|</span>
                    </div>
                    <div className="divlinkAcessibilidade">
                        <Link href="https://www.vvcestudio.com.br/acessibilidade/" value="Acessibilidade" estilo="LinkHeaderminhavvc"/>
                    </div>
            <style jsx>{`
                .headerAcessibilidade{
                    display: inline-flex;
                    flex-wrap: wrap;
                    font-family: SimplonBP-Regular;
                    color: #d82482;
                    font-size: 0.75rem;
                    width:250px;
                    padding-left:30px;
                }
                .divbtAcessibilidade{
                    width:1.875rem;
                }
                .divSeparaAcessibilidade{
                    width:10px;
                }
                .divlinkAcessibilidade {
                    width:100px;
                }                
                .btAcessibilidadeA {
                    background: transparent;
                    color: #d82482;
                    -webkit-text-decoration: none;
                    text-decoration: none;
                    display: inline-block;
                    text-align: left;
                    border: 0;
                    font: inherit;
                    font-weight: inherit;
                    line-height: 1em;
                    white-space: nowrap;
                }
                .btAcessibilidadeA:hover {
                    -webkit-text-decoration: underline;
                    text-decoration: underline;
                }    
                .btAcessibilidadeA:disabled,
                .btAcessibilidadeA.disabled {
                    color: #909090;
                }
    
                .btAcessibilidadeA:hover {
                    cursor: pointer;
                }
    
                .btAcessibilidadeA:focus {
                    outline: none;
                }
    
                .btAcessibilidadeA:disabled,
                .btAcessibilidadeA.disabled {
                    cursor: not-allowed;
                    pointer-events: none;
                }
            `}</style>
        </div>
    )
}

export default headerAcessibilidade
