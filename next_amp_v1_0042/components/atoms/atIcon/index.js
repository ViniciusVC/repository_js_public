import React from "react";
import * as icons from "./iconfiles";
import * as Util from "../../../controller/util.js";

const getIcon = function(type, fillColor, ColorGradient1, ColorGradient2) {
  var id=" ";
  if(ColorGradient2!=""){
    id="gradient"+type;
    fillColor="url(#"+id+")";
  }
  return icons[type](id, fillColor, ColorGradient1, ColorGradient2);
};

const Icons = props => {

  //type, color
  // var varBg = "background-color: white;";
  // if (props.bg != undefined) {
  //   varBg = props.bg + ";";
  // }

  var varType = Util.validaProps(props.type, "alert");
  var varWidth  = Util.validaProps(props.width, "20px");
  var varHeight = Util.validaProps(props.height, varWidth);
  //var varBorder = Util.validaProps(props.border, "none");
  var fillColor = Util.validaProps(props.color, "#000");
  var ColorGradient2 = Util.validaProps(props.colorGradient2,"");
  var ColorGradient1 = Util.validaProps(props.colorGradient1,ColorGradient2);
  
  //var varMarginRight = Util.validaProps(props.marginRight, "");
  if (props.height != undefined) {
    varHeight = "height:" + props.height + ";";
  }

  return (
    <div className="divIcon">
      {getIcon(varType, fillColor, ColorGradient1, ColorGradient2)}
      <style jsx>{`
				.divIcon {
					justify-content: center;
					align-items: center;
          width: ${varWidth};
          height: ${varHeight};
				}
			`}</style>
    </div>
  );
};

// .divIcon {
//   ${varBg}
//   width: ${varWidth};
//   height:${varHeight}
//   border-style:${varBorder}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 3px;
//   margin-right: ${varMarginRight};
// }

export default Icons;
export { Icons };
