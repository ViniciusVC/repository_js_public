import React,{useState} from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css'; // Estilo do APP
import api from "./services/api"; // Importar configurações do Axios
import Footer from "./comp/footer"; // Importar componente footer.
import AlertPopUp from './comp/alertPopUp'; // Importar componente AlertPopUp.

function App() {

  // Tratando o Pop-Up de Alerta-------------------------------------
  const [showPopUp, setShowPopUp] = useState(false); // Pop-Up inicia fechado.
  const [popUpMessage, setPopUpMessage] = useState(''); // Mensagem do Pop-Up

  const showAlert = (message) => {
    console.log("showAlert("+message+")");
    setPopUpMessage(message); // Mudar mensagem do Pop-up.
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
    setPopUpMessage('');
  };

  // Tratando o Formulario------------------------------------- 
  const [input, setInput] = useState(''); // input : Pegar o valor do estado
  const [cep, setCep] = useState({}); // setInput : Pasar valor para estado.

  async function handleSerch(){

    if (input ===''){
      showAlert("Preencha o campo CEP.");
      return;
    }    
    
    try{
      const response = await api.get(input+"/json/");
      console.log(response.data);
      if(response.data.erro){
        showAlert("CEP não encontrado.");
      }else{
        showAlert("OK!");
        setCep(response.data);
        setInput("");
      }    
    }catch{
      showAlert("Ocorreu um erro.");
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
      

      {showPopUp && <AlertPopUp message={popUpMessage} onClose={closePopUp} />}

      <Footer></Footer>

    </div>
  );
}

export default App;
