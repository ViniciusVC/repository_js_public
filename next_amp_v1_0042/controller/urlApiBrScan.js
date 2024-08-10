

// //exports.meusdocumentos = function(varDadosRetorno, arquivos){
exports.funUrlApiBrScan = function(rede, acesso, action){
    //   return urlApiBrScan.funUrlApiBrScan(rede, acesso, action);
       // rede = "Interno"/"Externo"
       // cesso = "Homologação"/"Produção"
       // action = "chave"/"documentos"
       console.log("funUrlApiBrScan(rede="+rede+", acesso="+acesso+", action="+action+")");
       if (action=="chave"){
           if(rede=="Interno"){
               if(acesso=="Homologação"){
                   // stage.apisdigitais.interno:8765/auth/oauth/v2/token // Pegar Chave
                   return "http://stage.apisdigitais.interno:8765/auth/oauth/v2/token"
               }else if (acesso=="Produção"){
                   // apisdigitais.interno:8765/auth/oauth/v2/token // Pegar Chave
                   return "http://apisdigitais.interno:8765/auth/oauth/v2/token"
               }
           }else{    
               if (acesso=="Homologação"){
                    // homologação:
                    //     username : "piloto-certif-cliente"
                    //     password : "piloto-cc-123"   
                    // apimhml.vvc.net.br/auth/oauth/v2/token // Pegar Chave
                   return "https://apimhml.vvc.net.br/auth/oauth/v2/token?grant_type=client_credentials"
               }else if (acesso=="Produção"){
                    // produção:
                    //     username : "piloto-certif-cliente"
                    //     password : "d936Ca997f"
                    // apim.vvc.net.br/auth/oauth/v2/token // Pegar Chave
                   //return "https://apim.vvc.net.br/auth/oauth/v2/token?grant_type=client_credentials"
                   return "https://apim.vvc.net.br/auth/oauth/v2/token?grant_type=client_credentials";
               }
           }
       }else{
           //action=="documentos"
           if(rede=="Interno"){
               if(acesso=="Homologação"){
                   // stage.apisdigitais.interno:8765/api/documentmanagement/v2/documentacao/analise // Enviar dados
                   return "http://stage.apisdigitais.interno:8765/api/documentmanagement/v2/documentacao/analise"
               }else{
                   // apisdigitais.interno:8765/api/documentmanagement/v1/documentacao/analise // Enviar dados
                   return "http://apisdigitais.interno:8765/api/documentmanagement/v1/documentacao/analise"
               }
           }else if(rede=="Externo"){    
               if (acesso=="Homologação"){
                   // apimhml.vvc.net.br/clientes/documentacao/v2/analise/analisedocumentacao/documentacao/analise // Enviar dados
                   //return "http://apimhml.vvc.net.br/v2/analise/analisedocumentacao"+varfimURL
                   return "https://apimhml.vvc.net.br/clientes/documentacao/v1/analise/analisedocumentacao/documentacao/analise"
               }else{
                   // apim.vvc.net.br/clientes/documentacao/v1/analise/analisedocumentacao/documentacao/analise // Enviar dados
                   //return "http://apim.vvc.net.br/v1/analise/analisedocumentacao/documentacao/analise"
                   return "https://apim.vvc.net.br/clientes/documentacao/v1/analise/analisedocumentacao/documentacao/analise";
               }
           }
       }
   }

