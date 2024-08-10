
import React from 'react';
import * as logos from './logofiles';
import * as Util from '../../../controller/util.js';

const getLogo = function(type,fillColor){
  return logos[type](fillColor);
}

const Logo = props => {
  //type, color
  var varType = Util.validaProps(props.type,"oi");
  var varWidth = Util.validaProps(props.width,"20px");
  var varHeight = "height:"+varWidth;
  if( props.height!=undefined){varHeight="height:"+props.height+";"};
  var fillColor = Util.validaProps(props.color,"#D82482");
  return(
    <React.Fragment>
    <div className="divLogo">
    {getLogo(varType,fillColor)}
    <style jsx>{`
      .divLogo{ 
        width: ${varWidth};
        ${varHeight}
      }
    `}</style>
    </div>
    </React.Fragment>
  )

}

export default Logo;
export {Logo};