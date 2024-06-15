import React from 'react';
import BtLink from '../../atoms/atBtLink/index'
import Icon from '../../atoms/atIcon/index'

// import { Container } from './styles';

const bodyCodigoBarras = function (props) {
    return (

        <div className='codConteiner'>

            <div>
                <h1 className="codBarrash1">Contas e Pagamentos</h1>
                <p className='title'>Selecione o produto e informe os dados pra emitir o código de barras ou boleto.</p>
                <BtLink href="https://www.vvc.com.br/minha-oi/codigo-de-barras/" value="Minha-Oi Codigo de Barras" estilo="rosa" />
                <p className="title informacaoOiTVeFibra">A consulta ao código de barras não se aplica pra Oi TV e Fibra.</p>
                <p className="title formasPagarConta">Veja outras <a href="/minha-oi/formas-de-pagamento/" className="formasPagarContaLink">formas de pagar sua conta.</a></p>
            </div>
            

            <div>
                <p className='title'>Neste acesso rápido, você pode realizar o pagamento de suas contas de forma fácil e simplificada.</p>
                <p className='title'>Pra conferir todas as nossas facilidades, acesse a Minha VVC com CPF e senha.</p>

                <p className='texto'>SOBRE SUAS CONTAS</p>

                <div className='itemTexto'>
                    <Icon type="historico" color="#D82482" />
                    <a className="" href="https://m.vvc.com.br/Portal/splash" >Histórico de contas</a>
                </div>
                <p className="textoOpaco">Consulte suas contas anteriores</p>

                <div className='itemTexto'>
                    <Icon type="power" color="#D82482" />
                    <a className="" href="https://www.vvc.com.br/minha-oi/religar-servico/" >Avisar pagamento</a>
                </div>
                <p className="textoOpaco">Religue o seu serviço bloqueado</p>

                <div className='itemTexto'>
                    <Icon type="invoiceOld" color="#D82482" />
                    <a className="" href="https://m.vvc.com.br/Portal/splash ">PDF da conta</a>
                </div>
                <p className="textoOpaco">2ª via detalhada da sua conta</p>


                <p className='texto'>FACILIDADES PRA VOCÊ</p>
                <div className='itemTexto'>
                    <Icon type="rechargeOld" color="#D82482" />
                    <a className="" href="https://m.vvc.com.br/Portal/splash" >Débito automático</a>
                </div>
                <div className='itemTexto'>
                    <Icon type="contract" color="#D82482" />
                    <a href="https://m.vvc.com.br/Portal/splash" >Conta Digital: sua conta por e-mail</a>
                </div>
                <div className='itemTexto'>
                    <Icon type="calendar" color="#D82482" />
                    <a className="" href="https://m.vvc.com.br/Portal/splash" >Alterar data de vencimento</a>
                </div>

            </div>

            <style jsx>{`
                    @font-face {
                        font-family: 'SimplonBP-Regular';
                        src: url('https://www.vvc.com.br/publicV2/fonts/simplonbp-regular-webfont.woff');
                    } 
                    @font-face {
                        font-family: 'Simplon-Headline';
                        src: url('https://www.vvc.com.br/publicV2/fonts/simplonvvc-headline-webfont.woff');
                    }
                    @font-face {
                        font-family: 'Simplon-bold';
                        src: url('https://minhavvc-cliente.vvc.com.br/minha-oi/assets/fonts/simplonbp-bold-webfont.woff');
                    } 
                    @font-face {
                        font-family: 'Simplon-medium';
                        src: url('https://minhavvc-cliente.vvc.com.br/minha-oi/assets/fonts/simplonbp-medium-webfont.woff');
                    } 
                    @font-face {
                        font-family: 'Simplon-light';
                        src: url('https://minhavvc-cliente.vvc.com.br/minha-oi/assets/fonts/simplonbp-light-webfont.woff');
                    }
                    .codConteiner{
                        margin: 0 auto;
                        max-width: 1280px;
                        width: 100%;
                        display: grid ;
                        grid-template-columns:2.6fr 1fr;
                    }
                    .title{
                        font-size: 0.875rem;
                        line-height: 1em;
                        font-family:'SimplonBP-Regular';
                    }
                    .texto{
                        text-align: left;
                        line-height: 1.2em;
                        color: rgb(34, 34, 34);
                        width: 100%;
                        font-weight: 600;
                        font-size: 1.125rem;
                        margin: 0px;
                        letter-spacing: normal;
                        padding: 0px;
                        margin-top:33px;
                        font-family:'SimplonBP-Regular';
                    }
                    .itemTexto{
                        display:flex;
                        margin-top:20px;
                    }
                    .itemTexto a{
                        color:black;
                        margin-left:20px;
                        text-decoration: none;
                        margin-bottom: 5px ;
                    }
                    .itemTexto a:hover{
                        color:black;
                        margin-left:20px;
                        text-decoration: underline;
                    }
                    .textoOpaco{
                        color: rgb(144, 144, 144);
                        margin-left: 37px;
                        margin-top: 0px;
                    }
                    .contaDigital{
                        padding-left: 20px;
                    }
                    .codBarrash1{
                        font-family: SimplonMedium;
                        font-weight: 400;
                        color: rgb(34, 34, 34);
                        font-family:'Simplon-medium';
                    }
                    .informacaoOiTVeFibra {
                        font-family: Simplon, OiTextRegular, simplon_bpregular, sans-serif;
                        font-weight: 400;
                        font-size: 0.75rem;
                        text-align: left;
                        line-height: 1em;
                        text-transform: none;
                        letter-spacing: normal;
                        color: rgb(144, 144, 144);
                    }
                    .formasPagarConta {
                        font-size: 12px;
                        margin: 0px 0px 5px;
                    }
                    .formasPagarContaLink {
                        color: rgb(216, 36, 130);
                        font-size: 12px;
                        line-height: 1em;
                        text-align: left;
                        white-space: nowrap; 
                        text-decoration: none;
                    }
                    @media (max-width: 600px) {
                        .conteiner{
                            display:flex;
                            flex-direction:column;
                        }
                        .itemTexto{
                            margin-left:20px;
                        }
                        .texto{
                            margin:20px;
                        }
                        .textoOpaco{
                            margin-left:60px;
                        }
                        .title{
                            text-align: justify;
                            margin: 15px 15px;
                        }
                        .codConteiner{
                            display: flex;
                            flex-direction: column;
                        }
                        h1{
                            margin: 15px 15px;
                            font-family:'Simplon-medium';
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default bodyCodigoBarras;
