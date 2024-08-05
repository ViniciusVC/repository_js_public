

export const validaProps = (X,Y) => {
  if(X!=undefined){
    return X;
  }else{
    return Y;
  };
}

export const apenasNumeros = (varBodySend) => {
    var numsStr = varBodySend.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

export const fontesCSS = () => {
  return ' ' + fontesCSS1()+fontesCSS2()+fontesCSS3()+fontesCSS4()+fontesCSS5();
}

export const fontesCSS1 = () => {
  return ' @font-face { font-family:"SimplonBP-Regular"; src:url("https://www.vvcestudio.com.br/publicV2/fonts/simplonbp-regular-webfont.woff"); } ';
}

export const fontesCSS2 = () => {
  return ' @font-face { font-family:"Simplon-Headline"; src:url("https://www.vvcestudio.com.br/publicV2/fonts/simplonvvc-headline-webfont.woff"); } ';
}

export const fontesCSS3 = () => {
  return ' @font-face { font-family:"Simplon-bold"; src:url("https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-bold-webfont.woff"); } ';
}

export const fontesCSS4 = () => {
  return ' @font-face { font-family: "Simplon-medium"; src: url("https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-medium-webfont.woff"); } ';
}

export const fontesCSS5 = () => {
  return ' @font-face { font-family: "Simplon-light"; src: url("https://minhavvc-cliente.vvcestudio.com.br/meuvvc/assets/fonts/simplonbp-light-webfont.woff"); } ';
}