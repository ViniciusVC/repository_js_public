
import React from 'react';
import Captcha from './index.js';

export const atCaptcha = (modo) => (
    <div>
      <h2>atCaptcha</h2>
      <Captcha/>
      <p className="p">
        Codigo : {'<Captcha/>'}<br/>
        modo={modo}
      </p>
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
);

export default atCaptcha;
