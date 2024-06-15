import React from 'react'
import CardBemVindo from '../../moleculas/vvc-play/cardBemVindovvcplay'
import CardCapitaMarvel from '../../moleculas/vvc-play/cardCapitaMarvel'
import Linksvvcplay from '../../moleculas/vvc-play/linksvvcplay'
import CardPlanosvvcplay from '../../moleculas/vvc-play/cardPlanosvvcplay'
import ListaBotoesUpgrade from '../../moleculas/vvc-play/listaBotoesUpgrade'
import * as Util from '../../../controller/util.js'

const bodyvvcplay = props => {
    var modo = Util.validaProps(props.modo, "html")
    return (
        <>
            <div className="container-body">
                <CardBemVindo />
                <div className="capita-marvel"></div>
                <CardCapitaMarvel modo={modo} />
                <ListaBotoesUpgrade />
                <CardPlanosvvcplay modo={modo} />
                <Linksvvcplay modo={modo} />
            </div>
            <style jsx>{`
            .body {
                margin: 0;
                padding: 0;
            }
            
            .container-body {
                margin-left: 1.12rem;
                margin-right: 1.12rem;
            }
            
            @media screen and (min-width:734px) {
                .container-body {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 44rem
                }
            }
            
            @media screen and (min-width:1024px) {
                .container-body {
                    max-width: 60rem
                }
            }
            
            @media screen and (min-width:1250px) {
                .container-body {
                    max-width: 73.125rem
                }
            }
            .capita-marvel {
                background-image: url("/static/assetsv5/img/vvc-play/capita-marvel.png");
                width: 726px;
                height: 821px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                margin 0 auto;
                
            }
            @media(max-width:520px) {
                .capita-marvel {
                    width: 320px;
                    height: 415px;
                }
            }
            `}</style>
        </>
    )
}

export default bodyvvcplay