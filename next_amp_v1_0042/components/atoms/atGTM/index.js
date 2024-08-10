import React from 'react'
import BodyGTM from './bodyGTM.js'
import HeadGTM from './headGTM.js'
import * as Util from '../../../controller/util.js';


function returnScript(codGTM){
  //var stringFunction = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"
  var stringFunction = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","';
  return stringFunction + codGTM + '");'
}

const GTM = props => {
  // var codGTM1 = Util.validaProps(props.cod,'GTM-K89BB78');
  // var codGTM2 = Util.validaProps(props.cod,'GTM-KR9G4JB');
  //console.log('Rodando /componentes/atoms/atGTM/index.js');
  var codGTM = Util.validaProps(props.codGTM,'GTM-K89BB78');
  var modo = Util.validaProps(props.modo,'html');
  //var codGTM2 = Util.validaProps(props.codGTM2,'GTM-KR9G4JB');
  var position = Util.validaProps(props.position,"head");
  if(position=="head"&&modo=="html"){
    //<!-- Google Tag Manager head-->
    //<HeadGTM codGTM={codGTM1}/>
    //<HeadGTM codGTM={codGTM2}/>
    //Não está compilando direito!!!!!!!!!!!!!!!!!!!!!!!!!
    return(
      <script>{`
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${codGTM}');
      `}</script>
    )
  }else if(modo=="html"){
    //<!-- Google Tag Manager body (noscript) -->
    //<BodyGTM codGTM={codGTM1}/>
    //<amp-iframe>
    return(
      <noscript>
        <div className="iframegtm">
          <iframe
            src={codGTM}
            height="0" 
            width="0">
          </iframe>
        </div>
        <style jsx>{`
          .iframegtm {
            display:none;
            visibility:hidden
          }
        `}</style>
      </noscript>
    )
  }else{
    return(
      <noscript></noscript>
    )
  }
}


export default GTM



// HEAD

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-K89BB78');</script>
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-KR9G4JB');</script>
// <!-- End Google Tag Manager -->




// BODY

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K89BB78"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR9G4JB"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->