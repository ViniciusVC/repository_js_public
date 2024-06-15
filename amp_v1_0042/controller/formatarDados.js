
//Função CONTROLLER que roda apois receber todos os dados do formulário.

exports.apenasNumeros = function(varBodySend){
    var numsStr = varBodySend.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

exports.formatTipoDocumento = function(tipoDocumento){
    // Selfie, RG, RG, Outros
    // Selfie, CNH
    // Selfie, Outros
    if(tipoDocumento=="RG"){
        return ["Selfie", "RG", "RG", "Outros"]
    }else{
        return ["Selfie", tipoDocumento]
    }    
}

exports.formatarDados = function(tipoDocumento,arquivos){
    if(tipoDocumento=="RG"){
        return [
                        {
                            value: arquivos[0].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[1].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[2].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[3].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        }
                    ]
    
                }else{
                    return [
                    {
                        value: arquivos[0].buffer,
                        options: {
                        filename: "download",
                        contentType: "image/jpeg"
                        }
                    },
                    {
                        value: arquivos[1].buffer,
                        options: {
                        filename: "download",
                        contentType: "image/jpeg"
                        }
                    }
                ]
            }
}