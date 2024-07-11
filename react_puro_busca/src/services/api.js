import axios from "axios";


// Ex.: de URL https://viacep.com.br/ws/01310930/json/
const api = axios.create({
   baseURL: "https://viacep.com.br/ws/",
    timeout: 2000
});


/*
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar' }
  });

const baseURL = "https://viacep.com.br/ws/";
*/

/*
function api(valCPF){
    return axios.get(baseURL+valCPF).then((response) => {
        setPost(response.data);
    });
}
*/    



export default api;