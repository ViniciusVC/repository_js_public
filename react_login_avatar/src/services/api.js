import axios from "axios";

/****************************************************************
 
 VVCDotNetAPILogin.API

 https://github.com/ViniciusVC/dotnet/tree/main/VVCDotNetAPILogin

 / [GET]
 /logado [GET]
 /register [POST]
 /login [POST]
 /logout [POST]

*****************************************************************/

const api = axios.create({
    baseURL: "http://localhost:5192/apilogin",
    timeout: 2000
});

export default api;



/*

/ [GET]

try{
    const response = await api.get("");
    if(response.data.erro){
        alert("Erro1: Erro na API.");  
    }else{
        alert("API OK!");
    }
}catch{
    alert("Erro2: Erro na API.");
}

/logado [GET]

try{
    const response = await api.get("logado");
    if(response.data.erro){
        alert("Erro1: Ocorreu um erro.");  
    }else{
        alert("Logado.");
    }
}catch{
    alert("Erro2: Ocorreu um erro.");
}

/register [POST]


/login [POST]

try{
    const response = await api.post("login", {
      email,
      password,
    });
    if(response.data.erro){
        alert("Erro1: Ocorreu um erro ao logar. Tente novamente.");  
    }else{
        alert("Logado.");
    }
}catch{
    alert("Erro2: Ocorreu um erro ao logar. Tente novamente.");
}

 /logout [POST]

try{
    const response = await api.post("logout", {});
    if(response.data.erro){
        alert("Erro1: Ocorreu um erro ao deslogar.");  
    }else{
        alert("Logado.");
    }
}catch{
    alert("Erro2: Ocorreu um erro ao deslogar.");  
}



 
*/