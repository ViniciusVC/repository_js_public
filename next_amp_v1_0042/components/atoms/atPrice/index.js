//Component atomo Price.js

import React from 'react'
import * as Util from '../../../controller/util.js';

const Price = props => {
    console.log('Rodando /componentes/atoms/atPrice/index.js');
    return (
        <>
            <div>
                <div className="divprice">
                    <div className="divreal">{Util.validaProps(props.divreal, '##')}</div>
                    <div className="divvalor">{Util.validaProps(props.divvalor, "##")}</div>
                    <div className="divcents">
                        <div>{Util.validaProps(props.divcents, '##')}</div>
                        <div className="divmes">{Util.validaProps(props.mes, '##')}</div>
                    </div>
                </div>
                <div className="forma-pagamento">{props.formaPagamento}</div>
            </div>
            <style jsx>{`
            .container-preco {
                align-items: center;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            .divprice {
                margin-top: 1rem;
                font-family: Simplon-Headline,sans-serif;
                display: flex;
                flex-wrap: wrap;
            }
            .divreal {
                padding-top: 35px;
                font-family: Simplon-Headline;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                margin-left: 10px;
            }
            .divvalor {
                font-size: 3.5rem;
            }
            .divmes {
                margin-top: 5px;
            }
            .divcents {
                margin-top: 0.8rem;
                display: block; 
                font-size: 1rem;
            }
            .forma-pagamento {
                font-family: SimplonBP-Regular;
                font-size: 12.5px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
            }
            `}</style>
        </>
    )
}
export default Price
