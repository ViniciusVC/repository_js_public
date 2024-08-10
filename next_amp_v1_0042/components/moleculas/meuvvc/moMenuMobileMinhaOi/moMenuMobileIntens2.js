import React from "react";

import Div from '../../../atoms/atDiv/index.js'
import * as Util from "../../../../controller/util"
import path from "path"
import Icon from "../../../atoms/atIcon/index"


const MenuMobileItens2 = props => {
    var modo = Util.validaProps(props.modo,"html");

    if(modo=="html"||modo=="HTML"){
        function menuMobile(){
            if( document.querySelector(".MenuMobileItem-sub").style.display==="none"){
                document.querySelector(".MenuMobileItem-sub").style.display = "flex";
            }else{
                document.querySelector(".MenuMobileItem-sub").style.display = "none"
            }
        }
        function menuMobile2(){
            if( document.querySelector(".MenuMobileItem-sub2").style.display==="none"){
                document.querySelector(".MenuMobileItem-sub2").style.display = "flex";
            }else{
                document.querySelector(".MenuMobileItem-sub2").style.display = "none"
            }
        }
        function menuMobile3(){
            if( document.querySelector(".MenuMobileItem-sub3").style.display==="none"){
                document.querySelector(".MenuMobileItem-sub3").style.display = "flex";
            }else{
                document.querySelector(".MenuMobileItem-sub3").style.display = "none"
            }
        }
    return (
        <>
            <div className="MenuMobileItem">
                <div className="MenuMobileItem-ini">
                    <a href="teste">INÍCIO</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">CONTAS E PAGAMENTOS</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">MEUS PRODUTOS</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">RECARGA</a>
                </div>
               
                    <div className="MenuMobileItem-ini"  onClick={()=>{menuMobile()}} >
                            <div className= "dropdownMobile">
                                <a>AJUDA E SUPORTE </a>
                                <div className="dropdownIcon1" >
                                    <Icon type="arrowdown" color="#D82482" width="15px" />
                                </div>
                            </div>
                            <div className="MenuMobileItem-sub">
                                <h3>AJUDA</h3>
                                <a href="#">Dúvidas frequentes</a>
                                <h3>ATENDIMENTO</h3>
                                <a href="#">Consulta de protocolo</a>
                                <a href="#">Encontre sua loja</a>
                                <a href="#">Telefones e postos</a>
                                <a href="#">Consultar documentos</a>
                                <h3>SUPORTE TÉCNICO</h3>
                                <a href="#">Técnico Virtual</a>
                                <a href="#">Acompanhamento de instalação Fixo</a>
                                <a href="#">Estou sem serviço</a>
                            </div>
                    </div>
                    <div className="MenuMobileItem-ini" onClick={()=>{menuMobile2()}}>
                            <div className= "dropdownMobile">
                                <a>+ VANTAGENS </a>
                                <div className="dropdownIcon2" >
                                     <Icon type="arrowdown" color="#D82482" width="15px" />
                                </div>
                               
                            </div>
                           
                        <div className="MenuMobileItem-sub2">
                            <a href="#">Oi Pontos</a>
                            <a href="#">Oi Wifi</a>
                            <a href="#">VVC Play</a>
                            <a href="#">Conteúdo pra você</a>
                            
                        </div>
                    </div>
                    <div className="MenuMobileItem-ini">
                            <a href="">QUERO SER FIBRA</a>
                    </div>
                    <div className="MenuMobileItem-ini"onClick={()=>{menuMobile3()}}>
                        <div className= "dropdownMobile">
                            <a>PARA ASSINAR </a>
                            <div className="dropdownIcon2" >
                                    <Icon type="arrowdown" color="#D82482" width="15px" />
                            </div>
                            
                        </div>
                        
                        <div className="MenuMobileItem-sub3">
                            <a href="#">Combo</a>
                            <a href="#">TV HD</a>
                            <a href="#">Celular</a>
                            <a href="#">Internet</a>
                            <a href="#">Fixo</a>
                            
                        </div>
                    </div>
            </div>

                <style jsx>{`
                
                .MenuMobileItem{
                            margin-top:50px;
                            font-weight: bold;
                        }
                        .MenuMobileItem-ini{
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                            display: flex;
                        }
                        .MenuMobileItem a{
                            text-decoration: none;
                            color: rgb(34, 34, 34);
                            font-weight: bold;
                            font-size: 1.125rem;
                            padding: 1rem 0px;
                            padding-left: 20px;
                        }
                        .MenuMobileItem-sub{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }

                        .MenuMobileItem-sub2{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub2 h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub2 a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }
                        .MenuMobileItem-sub3{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub3 h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub3 a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }

                        .dropdownMobile{
                            display:flex;
                            justify-content:space-between; 
                        }
                        .dropdownIcon1{
                            margin-top:15px;
                            padding-right:15px;
                        }
                        .dropdownIcon2{
                            margin-top:15px;
                            padding-right:15px;
                        }
                `}</style>

            </>
        )
     }else{

        return (
            <>
                <div className="MenuMobileItem">
                    <div className="MenuMobileItem-ini">
                        <a href="teste">INÍCIO</a>
                    </div>
                    
                    <div className="MenuMobileItem-ini">
                        <a href="teste">CONTAS E PAGAMENTOS</a>
                    </div>
                    <div className="MenuMobileItem-ini">
                        <a href="teste">MEUS PRODUTOS</a>
                    </div>
                    <div className="MenuMobileItem-ini">
                        <a href="teste">RECARGA</a>
                    </div>
                    
                  
                    <amp-script layout="container" src='https://meusdocumentos.vvcestudio.com.br/static/assetsv5/js/menumobile.js'>
                        <div className="MenuMobileItem-ini" id="ampscript">
                            <div className= "dropdownMobile">
                                <a>AJUDA E SUPORTE </a>
                                <div className="dropdownIcon1" >
                                     <Icon type="arrowdown" color="#D82482" width="15px" />
                                </div>
                            </div>
                           
                            <div className="MenuMobileItem-sub">
                                <h3>AJUDA</h3>
                                <a href="#">Dúvidas frequentes</a>
                                <h3>ATENDIMENTO</h3>
                                <a href="#">Consulta de protocolo</a>
                                <a href="#">Encontre sua loja</a>
                                <a href="#">Telefones e postos</a>
                                <a href="#">Consultar documentos</a>
                                <h3>SUPORTE TÉCNICO</h3>
                                <a href="#">Técnico Virtual</a>
                                <a href="#">Acompanhamento de instalação Fixo</a>
                                <a href="#">Estou sem serviço</a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="MenuMobileItem-ini" id="ampscript2">
                            <div className= "dropdownMobile">
                                <a>+ VANTAGENS </a>
                                <div className="dropdownIcon2" >
                                     <Icon type="arrowdown" color="#D82482" width="15px" />
                                </div>
                               
                            </div>
                           
                            <div className="MenuMobileItem-sub2">
                                <a href="#">Oi Pontos</a>
                                <a href="#">Oi Wifi</a>
                                <a href="#">VVC Play</a>
                                <a href="#">Conteúdo pra você</a>
                               
                            </div>
                        </div>
                        <div className="MenuMobileItem-ini">
                             <a href="">QUERO SER FIBRA</a>
                        </div>
                        <div className="MenuMobileItem-ini" id="ampscript3">
                            <div className= "dropdownMobile">
                                <a>PARA ASSINAR </a>
                                <div className="dropdownIcon2" >
                                     <Icon type="arrowdown" color="#D82482" width="15px" />
                                </div>
                               
                            </div>
                           
                            <div className="MenuMobileItem-sub3">
                                <a href="#">Combo</a>
                                <a href="#">TV HD</a>
                                <a href="#">Celular</a>
                                <a href="#">Internet</a>
                                <a href="#">Fixo</a>
                               
                            </div>
                        </div>
                   
                        
                    </amp-script>
                    
                </div>
    
                    <style jsx>{`
                    
                        .MenuMobileItem{
                            margin-top:50px;
                            font-weight: bold;
                        }
                        .MenuMobileItem-ini{
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                            display: flex;
                        }
                        .MenuMobileItem a{
                            text-decoration: none;
                            color: rgb(34, 34, 34);
                            font-weight: bold;
                            font-size: 1.125rem;
                            padding: 1rem 0px;
                            padding-left: 20px;
                        }
                        .MenuMobileItem-sub{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }

                        .MenuMobileItem-sub2{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub2 h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub2 a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }
                        .MenuMobileItem-sub3{
                            display:none;  
                            border-bottom: 1px solid rgb(206, 206, 206);
                            flex-direction: column;
                        }
                        
                        .MenuMobileItem-sub3 h3{
                            font-size: 1rem;
                            color: rgb(144, 144, 144);
                            margin: 15px 23px -11px 23px;
                        }
                        .MenuMobileItem-sub3 a{
                            color: rgb(216, 36, 130);
                            font-size: 1rem;
                            font-weight: normal;
                            margin-bottom:-14px;
                        }

                        .dropdownMobile{
                            display:flex;
                            justify-content:space-between; 
                        }
                        .dropdownIcon1{
                            margin-top:15px;
                            padding-right:15px;
                        }
                        .dropdownIcon2{
                            margin-top:15px;
                            padding-right:15px;
                        }
                        
                    `}</style>
    
                </>
            )


     }
}

export default MenuMobileItens2;