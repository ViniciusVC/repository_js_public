import React from "react"
import Logo from '../../../atoms/atLogo/index.js'
//import Icon from '../../atoms/atIcon/index.js'
import Menu from '../moMenuMobileminhavvc/index.js'
//import Div from '../../atoms/atdiv/index.js'
import * as Util from '../../../../controller/util.js';

const headerLogo = props => {
    var modo = Util.validaProps(props.modo,"html");

    return (
        <div>
            <div className="headerLogoMobile">
                <div>
                    <Menu modo={modo}/>
                </div>
                <div className="headerLogoMobileItem">
                    <Logo type="minhavvc3" color="#000" width="90px" height="20px"/>
                </div>
            </div>
            <div className="headerLogo">
                <a className="headerLogoA" href="https://www.vvcestudio.com.br/meuvvc/">
                    <Logo type="minhavvc2"/>
                </a>
            </div>
            <style jsx>{`
                .headerLogoMobileItem{
                    margin: 5px 0 0 16px;
                }
                .headerLogoMobile{
                    display: none;
                }
                .headerLogo{
                    display: inline-flex;
                    flex-wrap: wrap;
                    width:250px;
                }
                .headerLogoA{
                    font-family: SimplonBP-Regular;
                    margin-right: 15px;
                }
                @media only screen and (max-width : 1169px) {
                    .headerLogo{
                        display: none;
                    }
                    .headerLogoMobile{
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </div>
    )
}

export default headerLogo