import React from "react";
import Loginminhavvc from '../moLoginminhavvc/index.js';
import Link from "../../../atoms/atLink";
import * as Util from '../../../../controller/util.js';

const headerEntrar = props => {
    var modo = Util.validaProps(props.modo,"html");

    return (
        <div className="headerEntrar">
            <div className="divHeaderCadastrese">
                <Link href="https://minha.vvc.com.br/minhavvc/cadastro/#/cadastro/cpf/" value="Cadastre-se agora" estilo="LinkHeaderminhavvc"/>
            </div>
            <div className="divHeaderCadastreseMobile">
                <Link href="https://minha.vvc.com.br/minhavvc/cadastro/#/cadastro/cpf/" value="Cadastrar" estilo="LinkHeaderminhavvc"/>
            </div>
            <div className="divHeaderEntrar">
                <Loginminhavvc modo={modo}/>
            </div>
            <style jsx>{`
                .headerEntrar{
                    display: inline-flex;
                    flex-wrap: wrap;
                    font-family: SimplonBP-Regular;
                }
                .divHeaderEntrar{
                    
                }
                .divHeaderCadastrese{
                    margin-right: 30px;
                }
                .divHeaderCadastreseMobile{
                    display: none;
                }
                @media only screen and (max-width : 1000px) {
                    .divHeaderCadastreseMobile{
                        font-size: 0.875rem; /*14px*/
                        display:block;
                        margin: 7px 20px 0 0 ;
                    }
                    .divHeaderCadastrese{
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

export default headerEntrar


//<a className="LinkHeaderCadastrese" href="https://minha.vvc.com.br/minhavvc/cadastro/#/cadastro/cpf/">Cadastre-se agora</a>
// .LinkHeaderCadastrese {
//     color: #d82482;
//     background: transparent;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     display: inline-block;
//     border-radius: 0;
//     text-align: left;
//     padding: 0;
//     border: 0;
//     font: inherit;
//     font-weight: inherit;
//     line-height: 1em;
//     -webkit-transition: 0.3s ease;
//     transition: 0.3s ease;
//     white-space: nowrap;
// }