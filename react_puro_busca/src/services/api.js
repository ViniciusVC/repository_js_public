import axios from "axios";

// Ex.: de URL https://viacep.com.br/ws/01310930/json/
const api = axios.create({
   baseURL: "https://viacep.com.br/ws/",
    timeout: 2000
});

export default api;