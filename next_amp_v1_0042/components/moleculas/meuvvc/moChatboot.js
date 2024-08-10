import React from 'react';
import * as Util from '../../../controller/util.js';

const chatBoot= props => {
    var modo = Util.validaProps(props.modo,"html");
    if(modo=="html"||modo=="HTML"){
            return (

                    <>

                        <script src="https://d2c826xns9flnw.cloudfront.net/ChatbotInstall.js"/>     
        
                    </>

                );
            }else{
                return(
                    <>
                       <amp-script layout="container" src="https://d2c826xns9flnw.cloudfront.net/ChatbotInstall.js">
                            <button></button>
                        </amp-script>
                    </>
                )
            }
}

export default chatBoot;

/*
<div className="chatBootConteiner">
        
        <Img
                            // src="https://oidigital.s3.amazonaws.com/chatbot/bot-images/joice_1024x1024%403x-small.png"
                            src="/static/assetsv5/img/minhavvc/chatboot.png"
                            width="60px"
                            height="60px"
                            alt="Compdonente Img exemplo next"
                            title="Componente Img exemplo next"
                            class="ClassImgNext"
                            modo={modo} />
                  
        </div>
            <style jsx>{`

                .chatBootConteiner{
                    position: fixed;
                    right: 30px;
                    bottom: 30px;
                    cursor: pointer;
                    z-index: 500;
                    border-style: none;
             
                }
                 .chatBootConteiner::before{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    transition: box-shadow .2s ease-in-out;
                    content: "";
                    position: relative;
                    display: block;
                    box-shadow: 0 1px 10px 0 rgba(0,0,0,.4);
                } 
                
            `}</style>
            */
