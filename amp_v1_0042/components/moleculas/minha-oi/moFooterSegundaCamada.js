import React from "react";
import * as Util from '../../../controller/util.js';

import BtLink from '../../atoms/atBtLink/index.js';
import Link from '../../atoms/atLink/index.js';
import Icon from '../../atoms/atIcon/index.js';
import Logo from '../../atoms/atLogo/index.js';


const footerSegundaCamada = props => {
    var modo = Util.validaProps(props.modo,"html");
    
    /*<Div display="justificado">*/
    return (
        <div>  
        <div className="footerSegundaCamada">
            <div className="footerLogo">
                <Logo type="minhavvc"/>
            </div>
            <div className="footerNav">
                <Link 
                href="https://www.vvc.com.br/empresas/"
                value="Empresas" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link 
                href="https://www.vvc.com.br/ri/default_pt.asp?idioma=0&conta=28" 
                value="Investidores" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link 
                href="http://vvc.com.br/oi/sobre-a-oi" 
                value="Sobre a Oi" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link 
                href="http://vvc.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi" 
                value="Lojas da Oi" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link
                href="http://www.vvc.com.br/oi/celular-legal/" 
                value="Celular Legal" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link
                href="http://www.vvc.com.br/outras-operadoras/" 
                value="Outras Operadoras" 
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNav">
                <Link
                href="http://www.vvc.com.br/oi/sobre-a-oi/regulamentacao/informacoes/conselho-de-usuarios/2017-2019/"
                value="Conselho de Usuários"
                estilo="LinkFooterNavminhavvc"/>
            </div>
            <div className="footerNavSocial">
                <a href="https://pt-br.facebook.com/OiOficial/">
                    <Icon type="facebook" width="23px" color="#D82482" />
                </a>
            </div>
            <div className="footerNavSocial">
                <a href="http://www.twitter.com/digaoi">
                    <Icon type="twitter" width="23px" color="#D82482" />
                </a>
            </div>
            <div className="footerNavSocial">
                <a href="https://www.youtube.com/user/oi">
                    <Icon type="youtube" width="23px" color="#D82482" />
                </a>
            </div>

            <div className="footerOideAaX">
                <BtLink href="https://www.vvc.com.br" value="Oi de A a Z" estilo="rosa"/>
            </div>
        </div>
        
        <div className="footerTerceiraCamada">
            <div className="footerNavC">
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Empresas" estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Investidores" estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Sobre a Oi" estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Lojas da Oi" estilo="LinkFooterNavminhavvc"/>
                </div>
            </div>
            <div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Celular Legal" estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Outras Operadoras" estilo="LinkFooterNavminhavvc"/>
                </div>
                <div className="footerNav2">
                    <Link href="https://www.vvc.com.br/empresas/" value="Conselho de Usuários" estilo="LinkFooterNavminhavvc"/>
                </div>
            </div>
        </div>
        <style jsx>{`
            .footerNavC{
                width: 50%;
                padding-top:10px;
                margin-bottom:40px;
            }
            .footerNav2{
                padding:10px;
                padding-left:20px;
                /*margin-bottom:40px;*/
            }

            .footerSegundaCamada{
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding-top:10px;
                margin-bottom:40px;
            }
            .footerNav{
                font-family: Simplon-light;
                margin-top:20px;
            }
            @media only screen and (min-width : 1000px) {
                .footerNavMobileV{
                    visibility: hidden;
                    display: none;
                }
                .footerOideAaX{
                    margin-right:40px;
                }
               .footerTerceiraCamada{
                    visibility: hidden;
                    display: none;
                }
            }
            @media only screen and (max-width : 1000px) {
                .footerNav{
                    visibility: hidden;
                    display: none;
                }
                .footerLogo{
                    visibility: hidden;
                    display: none;
                }
                .footerNavMobileV{
                    visibility: visible;
                    display: block;
                }
                .footerOideAaX{
                    width:50%;
                    margin-right:10px;
                    
                }
                .footerTerceiraCamada{
                    display: inline-flex;
                    flex-wrap: wrap;
                    /*display: flex;
                    justify-content: space-between;*/
                    width: 100%;
                }

            }
            .footerNavSocial{
                font-family: Simplon-light;
                margin-top:20px;
            }
            .footerLogo{
                margin-left:40px;
            }

        `}</style>
    </div>
    )
}

export default footerSegundaCamada

