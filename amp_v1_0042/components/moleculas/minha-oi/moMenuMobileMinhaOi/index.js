// layout de Documentoscopia - Projeto Piloto
import React from 'react';
//import Img from '../atoms/atImg/index.js';
//import BtLink from '../../../atoms/atBtLink/index.js';
import * as Util from '../../../../controller/util.js';
import Icon from '../../../atoms/atIcon/index.js'
import MenuMobileItens from './moMenuMobileItens.js'
import MenuMobileItens2 from './moMenuMobileIntens2'
import Logo from '../../../atoms/atLogo/index.js'

const MenuMobileminhavvc = props => {
  var modo = Util.validaProps(props.modo,"html");
  
  if(modo=="html"||modo=="HTML"){
    function fechalightboxMenu(){
      document.getElementById("contMenuMobiles").style.display = "none";
    }
    function abrirlightboxMenu(){
      document.getElementById("contMenuMobiles").style.display = "block";
    }
    return(
      <div>
        <div className="contMenuMobile" id="contMenuMobiles">
              <div id="lightboxMenu" className="lightboxMenu" >
                <span className="close"  role="button" tabindex="0">
                  <a onClick={() => {fechalightboxMenu()}}>
                    <svg width="30" height="30" viewBox="0 0 30 30">
                      <path fill="#9B9B9B" fill-rule="evenodd" d="M13.106 15.09L8.227 19.85l1.625 2.035 5.119-4.976 5.099 4.976 1.882-1.83-5.109-4.966 5.109-4.967-1.882-1.83-5.1 4.976-5.118-4.976-1.625 2.035 4.879 4.762zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"></path>
                    </svg>
                  </a>
                </span>
                <MenuMobileItens2 modo={modo}/>
              </div>
          </div>
        <div>
            <a onClick={() => {abrirlightboxMenu()}}>
              <Icon type="menu" color="#D82482" width="25px"/>
            </a>
        </div>
        <style jsx>{`
             

            .contMenuMobile{
              position: fixed;
              z-index: 1000;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background: rgba(0,0,0,0.6) none repeat scroll 0% 0%;
              display:none;
            }
            .lightboxMenu {
              height: 100vh;
              width: 86vw;
              position:relative;
              box-shadow: rgba(0, 0, 0, 1.3) 0px 0px 15px;
              background: white;
              transition: all 0.3s ease 0s;
              overflow-y: scroll;
            }
            .closeMenu {
              position:absolute;
              right:5px;
              top:5px;
              font-family: arial;    
              font-size: 25px;
              justify-content: space-between;
              position: relative;
              flex-direction: row;
              display: flex;
              padding: 0px 15px;
            }
        `}</style>
      </div>
    )
  }else{
    //if(modo=="amp"||modo=="AMP")
    return(
      <div>
          <amp-lightbox id="PopupMenu" layout="nodisplay">
            <div className="lightboxMenu" >
              <span className="closeMenu" on="tap:PopupMenu.close" role="button" tabindex="0">
                <Logo type="minhavvc"/>
                <Icon type="close" color="#D82482" />
              </span>
              <MenuMobileItens2 modo={modo}/>
            </div>
          </amp-lightbox>
          <div className="ampstart-btn caps m2" on="tap:PopupMenu" role="button" tabindex="0">
            <div>
              <Icon type="menu" color="#D82482" width="25px"/>
            </div>
          </div>
        <style jsx>{`

            #PopupMenu{
              background: rgba(0, 0, 0, 0.6) none repeat scroll 0% 0%;
            }
            .lightboxMenu {
              height: 100vh;
              width: 86vw;
              position:relative;
              box-shadow: rgba(0, 0, 0, 1.3) 0px 0px 15px;
              background: white;
              transition: all 0.3s ease 0s;
              overflow-y: scroll;
             
            }
            .closeMenu {
              position:absolute;
              right:5px;
              top:5px;
              font-family: arial;    
              font-size: 25px;
              justify-content: space-between;
              position: relative;
              flex-direction: row;
              display: flex;
              padding: 0px 15px;
            }
        `}</style>
      </div>
      )
  }
};


export default MenuMobileminhavvc

