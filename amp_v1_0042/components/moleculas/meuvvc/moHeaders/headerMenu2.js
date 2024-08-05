import React from 'react';
import Icon from '../../../atoms/atIcon/index';
import MenuDropDown1  from "../moMenuDropdown1"
import * as Util from '../../../../controller/util.js';

// import { Container } from './styles';

const header2 = props => {

    var modo = Util.validaProps(props.modo,"html");
    return(
        <>
          <ul className ="navminhavvc">
              <li>
                  <a href="">INICIO</a>
              </li>
              <li>
                  <a href="">CONTAS E PAGAMENTOS</a>
              </li>
              <li>
                  <a href="">MEUS PRODUTOS</a>
              </li>
              <li >
                  <a href="">RECARGA</a>
              </li>
              <li className="dropdown">
                  <a href="" className="dropbtn">AJUDA E SUPORTE&nbsp;&nbsp;
                        <span>
                            <svg viewBox="0 0 320 512" width="10px" >
                                <path fill="#d82482" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                            </svg>
                        </span>
                   </a>
                    <div className="dropdown-content2">
                        <MenuDropDown1 modo={modo} />
                    </div>        
              </li>
              <li className="dropdown">
                    <a href="" className="dropbtn">+VANTAGENS&nbsp;&nbsp; 
                        <span>
                            <svg viewBox="0 0 320 512" width="10px" >
                                <path fill="#d82482" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                            </svg>
                        </span>
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Oi Pontos</a>
                        <a href="#">Oi Wifi</a>
                        <a href="#">VVC Play</a>
                        <a href="#">Conteúdo pra você</a>
                    </div>
               </li>
               <li>
                  <a href="https://www.vvcestudio.com.br/lp/clientebl-aumente-bandalarga?origem=minhavvc30_prelogin&pagina=clientebl-aumente-bandalarga" target="_blank">QUERO SER FIBRA</a>
              </li>
          </ul>

          <style jsx>{`
          
                .navminhavvc{
                    display:flex;
                    margin: 0 auto;
                    max-width: 1481px;
                    position: relative;
                }
                .navminhavvc li{                
                    flex:1;
                    list-style: none;
                    margin: 20px 0;
                    text-align:center;
                    padding: 0px;
             
                }
                .navminhavvc a{
                    display: block;
                    color: rgb(34, 34, 34);
                    text-decoration: none;
                    font-size: 0.875rem;
                   
                }

                .navminhavvc a:hover{
                    color: rgb(216, 36, 130);
                    font-weight: bold;
                    font-size: 0.890rem;
                    display:block;
                    
                }
                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    rigth:0px;
                    
                    
                }
                .dropdown-content2 {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    right: 250px;          
                }

                .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                }
                .dropdown-content2 a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                }

                .dropdown-content a:hover {background-color: #f1f1f1;text-decoration:underline;}

                .dropdown:hover .dropdown-content  {
                    display: block;
                }
                .dropdown:hover .dropdown-content2{
                    display: block;
                }
                .dropbtn{
                    color: rgb(216, 36, 130);
                    margin-top: -4px;
                }

                @media(max-width:1167px){

                    .navminhavvc{
                        display:none;
                    }
                }
                

          `}</style>
        </>
    )
}


export default header2;