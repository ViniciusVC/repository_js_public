import * as Util from '../../../controller/util.js';

const MenuDropDown1 = props => {
    var modo = Util.validaProps(props.modo,"html");
    if(modo=="html"||modo=="HTML"){
        function fechalightBoxLogin(){
          document.getElementById("lightboxLogin").style.display = "none";
        }
        function abrirlightBoxLogin(){
          document.getElementById("lightboxLogin").style.display = "flex";
        }
        return(
             <>
              <div id="lightboxLogin" className="lightboxLogin" >
                <div className="lightboxLoginPreto"></div>
                <div className="lightboxLoginBranco" >  
                    <span className="close" on="tap:PopupLogin.close" role="button" tabindex="0">
                    <a onClick={() => {fechalightBoxLogin()}}>
                        <svg width="30" height="30" viewBox="0 0 30 30">
                        <path fill="#9B9B9B" fill-rule="evenodd" d="M13.106 15.09L8.227 19.85l1.625 2.035 5.119-4.976 5.099 4.976 1.882-1.83-5.109-4.966 5.109-4.967-1.882-1.83-5.1 4.976-5.118-4.976-1.625 2.035 4.879 4.762zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"></path>
                        </svg>
                    </a>
                    </span>
                    <iframe
                    className="lightboxLoginIframe"
                    width="430"
                    height="480"
                    title="Login meuvvc"
                    src="https://login.vvcestudio.com.br/nidp/idff/sso?id=loginsegurancasso&sid=0&option=credential&sid=0&with_iframe=true&target=https://minha.vvcestudio.com.br/minhavvc/api/processarlogin">
                    </iframe>
                </div>
          
        </div>
                <div className="dropdown-subcontent">
                    <div className="Drop">
                        <h3>AJUDA</h3>
                        <a href="http://faq.vvcestudio.com.br/">Dúvidas frequentes</a>
                        
                    </div>
                    <div className="Drop2">
                        <h3>ATENDIMENTO</h3>
                        <a  href="#" onClick={()=>{abrirlightBoxLogin()}}>Consulta de protocolo</a>
                        <a href="http://www.vvcestudio.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi">Encontre sua loja</a>
                        <a href="http://www.vvcestudio.com.br/meuvvc/fale-com-a-oi/">Telefones e postoso</a>
                        <a href="#"> Consultar documentos</a>
                       
                       
                    </div>
                    <div className="Drop">
                        <h3 id="dropH3">SUPORTE TÉCNICO</h3>
                        <a href="http://www.vvcestudio.com.br/app/tecnico-virtual/"> Técnico Virtual</a>
                        <a href="http://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo/"> Acompanhamento de instalação Fixo</a>
                        <a href="http://www.vvcestudio.com.br/meuvvc/religar-servico/"> Estou sem serviço</a>
                    </div>
                </div>                     
            
              <style jsx>{`

                .dropdown-subcontent {
                    display:flex;
                    flex:1;
                }
                .Drop{
                    width:200px;
                }
                .Drop2{
                    width:200px;
                }
                .Drop a{
                    text-decoration: none;
                    color: black;
                    padding: 12px 16px;
                    display:flex;
                    flex-direction:row;
                    font-size: 0.890rem;
                    text-align:left;
                }
                .Drop2 a{
                    text-decoration: none;
                    color: black;
                    padding: 12px 16px;
                    display:flex;
                    flex-direction:row;
                    text-align:left;
                    font-size: 0.890rem;
                }
                .Drop2{
                    padding:20px auto;
                    border-right: 2px solid lightgrey;
                    border-left: 2px solid lightgrey;
                 }
                .Drop H3{
                    text-align:left;
                    padding: 0px 16px;

                }
                .Drop2 H3{
                    text-align:left;
                    padding: 0px 16px;

                 }  
                 
                .Drop a:hover {
                     text-decoration:underline;
                     background-color: #f1f1f1;
                     color: rgb(216, 36, 130);
                }
                 .Drop2 a:hover {
                     text-decoration:underline;
                     background-color: #f1f1f1;
                     color: rgb(216, 36, 130);  
                }

                .lightboxLogin{
                    width: 100%;
                    height: 400px;
                    margin:0px;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    display : none;
                    flex-direction: row;
                    justify-content: center;
                    text-align: center;
                    z-index:4;
                }
                .lightboxLoginBranco{
                    width: 430px;
                    height: 500px;
                    margin-top: 30px;
                    position: relative;
                    box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 25px;
                    background: white;
                    border-radius: 4px;
                    padding: 2.5rem 2.7rem 2.7rem;          
                    transition: all 0.3s ease 0s;
                    animation: abreLogin 1s ease 0s 1 normal none running;
                }
                    @keyframes abreLogin{
                        0% {
                            top: -500px;
                            opacity: 0;
                        }
                        100% {
                            top: 0px;
                            opacity: 1;
                        }
                    }
                .lightboxLoginPreto{
                    width: 100%;
                    height: 900px;
                    margin:0px;
                    top: 0px;
                    left: 0px;
                    position: absolute;
                    background-color: #000000;
                    opacity: 0.6;
                    }
                    .close {
                    position:absolute;
                    right:25px;
                    top:25px;
                    font-family: arial;    
                    font-size: 25px;
                    }
                .btEntrar {
                    padding: 10px ;
                    transition: all 0.8s;
                    font-family: oiTextRegular, sans-serif;
                    background-color: #D82482;
                    border-radius:3px;
                    color: #ffffff;
                    font-size: 1rem; /*16px*/
                    text-align: center;
                    text-decoration: none;
                    border: solid 2px #D82482;
                    cursor: pointer;
                    outline: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-style: normal;
                    width: 100%;
                    max-width:500px;
                }
                .btEntrar:hover{
                    transition: all 0.8s;
                    -webkit-transition: all 0.8s;
                    -moz-transition: all 0.8s;
                    -o-transition: all 0.8s;
                    color: #D82482;
                    background-color: #ffffff;
                    border: solid 1px #D82482;
                }
                .lightboxLoginIframe{
                    border: 0px;
                }
                

              `}</style>
          </>
       )
    }else{
        return(
                <>
                <amp-lightbox id="PopupLogin" layout="nodisplay">
                    <div className="lightboxLogin" >
                    <div className="lightboxLoginPreto"></div>
                    <div className="lightboxLoginBranco" >
                        <span className="close" on="tap:PopupLogin.close" role="button" tabindex="0">
                        <svg width="30" height="30" viewBox="0 0 30 30">
                            <path fill="#9B9B9B" fill-rule="evenodd" d="M13.106 15.09L8.227 19.85l1.625 2.035 5.119-4.976 5.099 4.976 1.882-1.83-5.109-4.966 5.109-4.967-1.882-1.83-5.1 4.976-5.118-4.976-1.625 2.035 4.879 4.762zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"></path>
                        </svg>
                        </span>
                        <amp-iframe
                        width="580"
                        height="600"
                        title="Login meuvvc"
                        layout="responsive"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        frameborder="0"
                        src="https://login.vvcestudio.com.br/nidp/idff/sso?id=loginsegurancasso&sid=0&option=credential&sid=0&with_iframe=true&target=https://minha.vvcestudio.com.br/minhavvc/api/processarlogin">
                            <amp-img 
                            layout="fill"
                            src="carregando.png"
                            placeholder
                            width="40px" height="40px"
                            >
                            </amp-img>
                        </amp-iframe>
                    </div>
                    </div>
                </amp-lightbox>   
                        <div className="dropdown-subcontent">
                            <div className="Drop">
                                <h3>AJUDA</h3>
                                <a href="http://faq.vvcestudio.com.br/">Dúvidas frequentes</a>
                                
                            </div>
                            <div className="Drop2">
                                <h3>ATENDIMENTO</h3>
                                <a href="#" className="ampstart-btn caps m2" on="tap:PopupLogin" role="button" tabindex="0">Consulta de protocolo</a>
                                <a href="http://www.vvcestudio.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi">Encontre sua loja</a>
                                <a href="http://www.vvcestudio.com.br/meuvvc/fale-com-a-oi/">Telefones e postoso</a>
                                <a href="#" className="ampstart-btn caps m2" on="tap:PopupLogin" role="button" tabindex="0" > Consultar documentos</a>
                            
                            
                            </div>
                            <div className="Drop">
                                <h3 id="dropH3">SUPORTE TÉCNICO</h3>
                                <a href="http://www.vvcestudio.com.br/app/tecnico-virtual/"> Técnico Virtual</a>
                                <a href="http://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo/"> Acompanhamento de instalação Fixo</a>
                                <a href="http://www.vvcestudio.com.br/meuvvc/religar-servico/"> Estou sem serviço</a>
                            
                            
                            </div>

                        </div>    
                        <style jsx>{`

                            .dropdown-subcontent {
                            display:flex;
                            flex:1;
                            }
                            .Drop{
                                width:200px;
                            }
                            .Drop2{
                                width:200px;
                            }
                            .Drop a{
                                text-decoration: none;
                                color: black;
                                padding: 12px 16px;
                                display:flex;
                                flex-direction:row;
                                font-size: 0.890rem;
                                text-align:left;
                            }
                            .Drop2 a{
                                text-decoration: none;
                                color: black;
                                padding: 12px 16px;
                                display:flex;
                                flex-direction:row;
                                text-align:left;
                                font-size: 0.890rem;
                            }
                            .Drop2{
                                    padding:20px auto;
                                    border-right: 2px solid lightgrey;
                                    border-left: 2px solid lightgrey;
                            }
                            .Drop H3{
                                text-align:left;
                                padding: 0px 16px;

                            }
                            .Drop2 H3{
                                text-align:left;
                                padding: 0px 16px;

                            }  
                            

                            .Drop a:hover {
                                text-decoration:underline;
                                background-color: #f1f1f1;
                                color: rgb(216, 36, 130);
                            }
                            .Drop2 a:hover {
                                text-decoration:underline;
                                background-color: #f1f1f1;
                                color: rgb(216, 36, 130);  
                            }
                            .lightboxLogin{
                                width: 100%;
                                height: 400px;
                                margin:0px;
                                top: 0px;
                                left: 0px;
                                flex-direction: row;
                                justify-content: center;
                                text-align: center;
                                }
                            .lightboxLoginBranco{
                                width: 430px;
                                height: 500px;
                                margin:30px auto;
                                position: relative;
                                box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 25px;
                                background: white;
                                border-radius: 4px;
                                padding: 2.5rem 2.7rem 2.7rem;          
                                transition: all 0.3s ease 0s;
                                animation: abreLogin 1s ease 0s 1 normal none running;
                                }
                            @keyframes abreLogin{
                                0% {
                                    top: -500px;
                                    opacity: 0;
                                }
                                100% {
                                    top: 0px;
                                    opacity: 1;
                                }
                                }
                            .lightboxLoginPreto{
                                width: 100%;
                                height: 900px;
                                margin:0px;
                                top: 0px;
                                left: 0px;
                                position: absolute;
                                background-color: #000000;
                                opacity: 0.6;
                                }
                            .close {
                                position:absolute;
                                right:22px;
                                top:25px;
                                font-family: arial;    
                                font-size: 25px;
                                }
                            .btEntrar {
                                padding: 10px ;
                                transition: all 0.8s;
                                font-family: oiTextRegular, sans-serif;
                                background-color: #D82482;
                                border-radius:3px;
                                color: #ffffff;
                                font-size: 1rem; /*16px*/
                                text-align: center;
                                text-decoration: none;
                                border: solid 2px #D82482;
                                cursor: pointer;
                                outline: 0;
                                margin: 0;
                                box-sizing: border-box;
                                font-style: normal;
                                width: 100%;
                                max-width:500px;
                                }
                            .btEntrar:hover{
                                transition: all 0.8s;
                                -webkit-transition: all 0.8s;
                                -moz-transition: all 0.8s;
                                -o-transition: all 0.8s;
                                color: #D82482;
                                background-color: #ffffff;
                                border: solid 1px #D82482;
                                }

                            

                        `}</style>
                    </>
                 )
    }
   
}

export default MenuDropDown1;