
import React from 'react';
import * as Util from '../../../controller/util.js';

const Line = props => {
  var css= Util.validaProps(props.css,'');
  if(css=="linhaDivisao"){
    return (
      <div className="linhaDivisao">
          <style jsx>{`
          .linhaDivisao {
              display: block;
              width: 100%;
              height: 1px;
              position: static;
              bottom: unset;
              height: 1px;
              background-color: #d7d7d7;
              margin: 0;
              padding: 0;
              direction: horizontal
          }
          `}</style>
      </div>
    )
  }else{
    var position= Util.validaProps(props.position,'relative');
    var display= Util.validaProps(props.display,'block');
    var width= Util.validaProps(props.width,'100%');
    var height= Util.validaProps(props.height,'1px');
    var color= Util.validaProps(props.color,'#d7d7d7');
    var margin= Util.validaProps(props.margin,[15, 0]);
    var padding= Util.validaProps(props.padding,[0]);
    var top= Util.validaProps(props.top,'initial');
    var bottom= Util.validaProps(props.bottom,'initial');
    var left= Util.validaProps(props.left,'initial');
    var right= Util.validaProps(props.right,'initial');
    var shrink= Util.validaProps(props.shrink,0);
    var alignSelf= Util.validaProps(props.alignSelf,'initial');
    return(
      <div className="Line">
      <style jsx>{`
        .Line{ 
          display: ${display};
          width: ${width}:
          height: ${height};
          color: ${color};
          margin: ${margin};
          padding: ${padding};
          position: ${position};
          top: ${top};
          bottom: ${bottom},
          left: ${left},
          right: ${right},
          shrink: ${shrink},
          alignSelf: ${alignSelf}
        }
      `}</style>
      </div>
    )
  }
}

export default Line;
export {Line};