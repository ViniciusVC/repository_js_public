import React from 'react'
import * as Util from '../../../controller/util.js';

const Img = props => {
	var varSrc = Util.validaProps(props.src,"/static/assetsv5/img/vvc-logo-cinza.jpg");
	//if(props.src!=undefined){varSrc=props.src};

  var varWidth = Util.validaProps(props.width,varWidth);
  //if(props.width!=undefined){varWidth=props.width};
  var varHeight = Util.validaProps(props.height, varWidth);
  //if( props.height!=undefined){varHeight=props.height};

	var varHeight = Util.validaProps(props.height, varWidth);
	//if( props.height!=undefined){varHeight=props.height};

	var varAlt = Util.validaProps(props.alt,"Imagem Portal Oi");
	//if( props.alt!=undefined){varAlt=props.alt};
	var varTitle = Util.validaProps(props.title,varAlt);
	//if( props.title!=undefined){varTitle=props.title};

	var varClass = Util.validaProps(props.class,"img");
	//if( props.class!=undefined){varClass=props.class};

	var varId = Util.validaProps(props.id,varClass);
	//if(props.id!=undefined){varId=props.id};

	var modo = Util.validaProps(props.modo,"html");
	//if( props.modo!=undefined){modo=props.modo};

	//if(useAmp()){ 
	if (modo=="amp" || modo=="AMP") {
		return (
			<div>
				<amp-img src={varSrc}
					 id={varId}
					 width={varWidth}
					 height={varHeight}
					 alt={varAlt}
					 title={varTitle}
					 className={varClass}>
				</amp-img>
				<style jsx>{`
					.${ varClass} {
						src:${ varSrc}
						width:${ varWidth}
						height=${ varHeight}
						alt=${ varAlt}
						title=${ varTitle}
					}

					@media only screen and (min-width: 521px) {
						.hideOnDesktop {
							display: none;
						}
					}

					@media only screen and (max-width: 520px) {
						.hideOnMobile {
							display: none;
						}
					}
				`}</style>
			</div>
		)
	} else {
		return (
			<div>
				<img src={varSrc}
				     id={varId}
				     width={varWidth}
				     height={varHeight}
				     alt={varAlt}
				     title={varTitle}
				     className={varClass}>
				</img>
				<style jsx>{`
					.${ varClass}{
						src:${ varSrc}
						width:${ varWidth}
						height=${ varHeight}
						alt=${ varAlt}
						title=${ varTitle}
					}

					@media only screen and (min-width: 521px) {
						.hideOnDesktop {
							display: none;
						}
					}

					@media only screen and (max-width: 520px) {
						.hideOnMobile {
							display: none;
						}
					}
				`}</style>
			</div>
		)
	}
};

export default Img
