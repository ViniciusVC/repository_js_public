
//href=""" value="" estilo=""
import BtLink from './btLink';
import BtLink8bit from './btLink8bits';
import BtLinkAmarelo1 from './btLinkAmarelo1';
import BtLinkAmarelo2 from './btLinkAmarelo2';
import BtLinkAmarelo3 from './btLinkAmarelo3';
import BtLinkGrafite from './btLinkGrafite';
import BtLinkGrafiteInvertido from './btLinkGrafiteInvertido';
import BtLinkAzul from './btLinkAzul';
import BtLinkAzulLink from './btLinkAzulLink';
import BtLinklaranja from './btLinkLaranja';
import BtLinkItemLuzVerde from './btLinkItemLuzVerde';
import BtLinkLuz from './btLinkLuz';
import BtLinkCinza from './btLinkCinza';
import BtLinkRosa from './btLinkRosa';
import BtLinkRosaInvertido from './btLinkRosaInvertido';
import BtLinkRosaInvertidoCurto from './btLinkRosaInvertidoCurto';
import BtLinkLaranjaDegrade from './btLinkLaranjaDegrade';    
import BtLinkNeon from './btLinkNeon';
import BtLinkNeonItem from './btLinkNeonItem';
import BtLinkNeonLink from './btLinkNeonLink';
import BtLinkPurple1 from './btLinkPurple1';
import BtLinkPurple2 from './btLinkPurple2';
import BtLinkBranco from './btLinkBranco';


export default function AtBtLink({
  estilo,
  href,
  value,
  }: {
    estilo: string; href: string; value:string
  }) {
  //console.log('rodando atBlLink '+estilo+' - server component');

  function validaProps(X:string,Y:string){
    if(X!=undefined){
      return X;
    }else{
      return Y;
    };
  }

  const varHref = validaProps(href, "");
  const varEstilo = validaProps(estilo, "");
  const children = validaProps(value, "");
  //const varWidth = validaProps(width, "100");
  //const varWidthMobile = validaProps(mobilewidth, "50");
  

  if (varEstilo == "laranja") {
      return (<BtLinklaranja  href={varHref}>{children}</BtLinklaranja>);
  } else if (varEstilo == "8bit") {
      return (<BtLink8bit  href={varHref}>{children}</BtLink8bit>);
  } else if (varEstilo == "amarelo1") {
      return (<BtLinkAmarelo1  href={varHref}>{children}</BtLinkAmarelo1>);
  } else if (varEstilo == "amarelo2") { 
      return (<BtLinkAmarelo2  href={varHref}>{children}</BtLinkAmarelo2>);
  } else if (varEstilo == "grafite") {
      return (<BtLinkGrafite  href={varHref}>{children}</BtLinkGrafite>);
  }else if (varEstilo == "grafiteInvertido") {
      return (<BtLinkGrafiteInvertido  href={varHref}>{children}</BtLinkGrafiteInvertido>);
  }else if (varEstilo == "azul") {
      return (<BtLinkAzul  href={varHref}>{children}</BtLinkAzul>);
  } else if (varEstilo == "azulLink") {
      return (<BtLinkAzulLink  href={varHref}>{children}</BtLinkAzulLink>);
  } else if (varEstilo == "amarelo3") {
      return (<BtLinkAmarelo3  href={varHref}>{children}</BtLinkAmarelo3>);
  } else if (varEstilo == "branco") {
      return (<BtLinkBranco  href={varHref}>{children}</BtLinkBranco>);
  } else if (varEstilo == "cinza") {
      return (<BtLinkCinza  href={varHref}>{children}</BtLinkCinza>);
  } else if (varEstilo == "itemLuzVerde") {
      return (<BtLinkItemLuzVerde  href={varHref}>{children}</BtLinkItemLuzVerde>);
  } else if (varEstilo == "luz") {
      return (<BtLinkLuz  href={varHref}>{children}</BtLinkLuz>);
  } else if (varEstilo == "neon") {
      return (<BtLinkNeon href={varHref}>{children}</BtLinkNeon>);
  } else if (varEstilo == "neonItem") {
      return (<BtLinkNeonItem href={varHref}>{children}</BtLinkNeonItem>);
  } else if (varEstilo == "neonLink") {
      return (<BtLinkNeonLink href={varHref}>{children}</BtLinkNeonLink>);
  } else if (varEstilo == "Purple1") {
      return (<BtLinkPurple1  href={varHref}>{children}</BtLinkPurple1>);
  } else if (varEstilo == "Purple2") {
      return (<BtLinkPurple2  href={varHref}>{children}</BtLinkPurple2>);
  } else if (varEstilo == "rosa") {
      return (<BtLinkRosa  href={varHref}>{children}</BtLinkRosa>);
  } else if (varEstilo == "rosa-invetido") {
    //return (<BtLinkRosaInvertido  href={varHref} width={varWidth}>{children}</BtLinkRosaInvertido>);
    return (<BtLinkRosaInvertido href={varHref}>{children}</BtLinkRosaInvertido>);
  } else if (varEstilo == "rosa-invetido-curto") {
    //return (<BtLinkRosaInvertidoCurto  href={varHref} width={varWidth} mobilewidth={varWidthMobile}>{children}</BtLinkRosaInvertidoCurto>);  
    return (<BtLinkRosaInvertidoCurto href={varHref}>{children}</BtLinkRosaInvertidoCurto>);
  } else if (varEstilo == "laraja-degrade") {
      return (<BtLinkLaranjaDegrade  href={varHref}>{children}</BtLinkLaranjaDegrade>);    
  } else {
      return (<BtLink href={varHref}>{children}</BtLink>);
  }

}





 


