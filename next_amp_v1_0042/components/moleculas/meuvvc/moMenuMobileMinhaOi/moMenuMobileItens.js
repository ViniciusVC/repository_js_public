import React from "react"
import Logo from '../../../atoms/atLogo/index.js'
import Icon from '../../../atoms/atIcon/index.js'
//import Menu from './moMenuMobileminhavvc/index.js'
import Line from '../../../atoms/atLine/index.js'
import Link from '../../../atoms/atLink/index.js';
import Div from '../../../atoms/atDiv/index.js'

function setaMaisOpcoes(jsonSub){
    if(jsonSub.mais=="true"){
        return(<Icon type="arrowdown" color="#D82482" width="10px"/>)
    }
}

function itensMaisOpcoes(jsonSub){
    if(jsonSub.mais=="true"){
        return(
                <li>
                    <Link href={jsonSub.submenu[0].link} value={jsonSub.submenu[0].subitem} estilo="LinkFooterNavminhavvc"/>
                    <Link href={jsonSub.submenu[1].link} value={jsonSub.submenu[1].subitem} estilo="LinkFooterNavminhavvc"/>
                </li>
        )
    }
}

const MenuMobileItens = props => {
    
    const jsonProps = { Menu:[
        {
            link: "#",
            item: "INÍCIO",
            mais: "true",
            submenu:[
            {link: "#",
            subitem:"teste"},
            {link: "#",
            subitem:"teste"},
            ]
        },
        {
            link: "#",
            item: "CONTAS E PAGAMENTOS"},
        {
            link: "#",
            item: "MEUS PRODUTOS"},
        {
            link: "#",
            item: "RECARGA"},
        {
            link: "#",
            item: "AJUDA E SUPORTE"},
        {   
            link: "#",
            item: "VANTAGENS",
            mais: "true",
            submenu:[
                {link: "#",
                subitem:"Oi Pontos"},
                {link: "#",
                subitem:"Oi Wifi"},
                {link: "#",
                subitem:"VVC Play"},
                {link: "#",
                subitem:"Conteúdo pra você"},
                ]
        },
        {
            link: "#",
            item: "PARA ASSINAR",
            mais: "true",
            submenu:[
                {link: "#",
                subitem:"Combo"},
                {link: "#",
                subitem:"TV HD"},
                {link: "#",
                subitem:"Celular"},
                {link: "#",
                subitem:"Internet"},
                {link: "#",
                subitem:"Fixo"}
                ]
        }
        ]}

    return (
        <Div display="vertical">
            <ul>
            <li className="MenuMobileItem">
                <Logo type="minhavvc"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[0].link} value={jsonProps.Menu[0].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[0])}
                <ul className="MenuMobileItensUL">{itensMaisOpcoes(jsonProps.Menu[0])}</ul> 
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[1].link} value={jsonProps.Menu[1].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[1])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[1])}
                </ul>
            </li>
            <li className="MenuMobileItem">    
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[2].link} value={jsonProps.Menu[2].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[2])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[2])}
                </ul>
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[3].link} value={jsonProps.Menu[3].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[3])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[3])}
                </ul>
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[4].link} value={jsonProps.Menu[4].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[4])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[4])}
                </ul>
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[5].link} value={jsonProps.Menu[5].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[5])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[5])}
                </ul>
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            <li className="MenuMobileItem">
                <Link href={jsonProps.Menu[6].link} value={jsonProps.Menu[6].item} estilo="LinkFooterNavminhavvc"/>
                {setaMaisOpcoes(jsonProps.Menu[6])}
                <ul className="MenuMobileItensUL">
                    {itensMaisOpcoes(jsonProps.Menu[6])}
                </ul> 
            </li>
            <li className="MenuMobileItem">
                <Line css="linhaDivisao"/>
            </li>
            </ul>
            <style jsx>{`
            	.MenuMobileItem ul{
                    display: none;
                    transition: display 0.6 ease-out 0s;
                }
                
                .MenuMobileItem{
                    text-decoration: none;
                    /*display: inline-flex;
                    flex-wrap: wrap;*/
                    margin:10px;
                    font-family: SimplonBP-Regular;
                    font-weight: bold;
                    color:#000;
                    

                }
                .MenuMobileItensa{
                    font-family: SimplonBP-Regular;
                    margin-right: 15px;
                }
                .MenuMobileItem:active ul {
                        display: block;
                        transition-delay: 7s;
                    }
            `}</style>
        </Div>
    )
}

export default MenuMobileItens