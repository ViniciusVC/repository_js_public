import {useState} from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from "./services/api";
import Footer from "./comp/footer";

function App() {

  // input : Pegar o valor do estado
  // setInput : Pasar valor para estado.
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSerch(){

    if (input ===''){
      alert("Preencha o campo CEP.");
      return;
    }    
    
    try{
      const response = await api.get(input+"/json/");
      console.log(response.data);
      if(response.data.erro){
        alert("CEP não encontrado.");  
      }else{
        alert("OK!");

        setCep(response.data);
        setInput("");
      }    
    }catch{
      alert("Ocorreu um erro.");
      setInput("");
    }
    
  }

  return (
    <div className="container">
      <h1 className="title">Teste ReactJS Puro</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite o seu CEP"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSerch}>
          <FiSearch size={25} color="#000"/>
        </button>
      </div>
      
      {Object.keys(cep).length > 0 && (
              <main className="main">
              <h2>CEP : {cep.cep}</h2>
              <span>{cep.logradouro}</span>
              <span>Complemento : {cep.complemento}</span>
              <span>Bairro : {cep.bairro}</span>
              <span>{cep.localidade} - {cep.uf}</span>
            </main>
      )}

      <Footer></Footer>

    </div>
  );
}

export default App;
