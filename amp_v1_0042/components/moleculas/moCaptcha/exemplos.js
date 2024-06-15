
import React from 'react';
import Captcha from './index.js';

export const moCaptcha = (modo) => (
    <div>
      <h2>moCaptcha</h2>
      {'import Captcha from "./components/moleculas/moCaptcha/index.js";'}
      <Captcha/>
       <div>
        Codigo : {'<Captcha/>'}<br/>
      </div>
      <Captcha modo={modo} sessao="bla"/>
      <div>
        Codigo : {'<Captcha modo={modo} sessao={varsessao}/>'}<br/>
        modo={modo}
      </div>
    </div>
);

export default moCaptcha;
