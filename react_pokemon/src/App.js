// APP React Pokemmon
import {useState} from "react";
import './App.css'; // Estilo do APP
import api from "./services/api"; // Importar configurações do Axios
import Header from './comp/header'; // Importar componente header.
import Footer from './comp/footer'; // Importar componente footer.
import AlertPopUp from './comp/alertPopUp'; // Importar componente AlertPopUp.

function App() {



  // Tratando o Pop-Up de Alerta-----------------------------------------------
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

  // Lista-cacheada-de-pokemmons------------------------------------------------
  const [cachePokemmons, setCachePokemmons] = useState([]); 
    
  const addCachePokemmons = (newItem) => {
    console.log("addCachePokemmons(newItem)");
    console.log("addCachePokemmons(id="+newItem.id+"nome="+newItem.name+",index="+newItem.index+")");
    console.log(newItem);
    // // tentativa 1
    //setCachePokemmons((prevItems) => [...prevItems, newItem]);
    
    // tentativa 3
    let tempcachePokemmons =  cachePokemmons;
    tempcachePokemmons.push(newItem);
    setCachePokemmons(tempcachePokemmons);

    // // tentativa 2
    //cachePokemmons.push(newItem);
    
  };



  // Tratando o Formulario------------------------------------------------------
  const [input, setInput] = useState('');
  const [indexPokemonAtual, setIndexPokemonAtual] = useState(0);

  function showPokemmon(num){
    showAlert("Busca repetida.");
    setIndexPokemonAtual(0);
  }

  async function handleSerch(){
  
    if (input ===''){
      showAlert("Preencha o id do Pokemon. ex.:900");
      return;
    }    
      
    try{
      
      var idPoke = parseInt(input)

      if(idPoke > 920){
        showAlert("Digite um numero menor.");  
        return;
      }
      
      if(idPoke < 1){
        showAlert("Digite um numero maior que 0.");  
        return;
      }
    
      let indexTemp = cachePokemmons.findIndex(item => item.id === idPoke);

      if(indexTemp !== -1){
        showAlert("Busca repetida.");
        setIndexPokemonAtual(indexTemp);
        return;
      }
      
      //showAlert("Buscando...");
      console.log("Buscando...");
      const response = await api.get(input);
        
      if(response.data.erro){
        showAlert("Pokemon ID:"+idPoke+" não encontrado.");
        
      }else{
        setIndexPokemonAtual(cachePokemmons.length)

        console.log("  indexPokemonAtual=" + indexPokemonAtual);
        console.log("|____Antes___________|length="+cachePokemmons.length);
          
        addCachePokemmons({
            "index" : indexPokemonAtual,
            "id" : idPoke,
            "order" : response.data.order,
            "name" : response.data.name,
            "sprites" : response.data.sprites.other.showdown.front_shiny,
            "shiny" : response.data.sprites.front_shiny,
            "vida" : response.data.stats[0].base_stat,
            "ataque" : response.data.stats[1].base_stat,
            "defesa" : response.data.stats[2].base_stat,
            "superAtaque" : response.data.stats[3].base_stat,
            "superDefesa" : response.data.stats[4].base_stat,
            "velocidade" : response.data.stats[5].base_stat
        })
          
        //console.log("|____Depois___________|length="+cachePokemmons.length);
        //console.log("OK! "+ (indexPokemonAtual+1) + "ª busca - ID:"+ idPoke +" "+ cachePokemmons[indexPokemonAtual].name +". ");  
        //showAlert("OK! "+ (indexPokemonAtual+1) + "ª busca - ID:"+ idPoke +" "+ cachePokemmons[indexPokemonAtual].name +". ");  
        setInput("");
      }
    }catch{
      showAlert("Ocorreu um erro.");
      setInput("");
    }
    
}
  

  return (
    <div className="App">
      <Header/>

      <div className="containerInput Janelinha">
              <p>Digite um id:</p>
              <input 
              type="number"
              placeholder="Digite o id do Pokemon"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              />
              <div className="center-buton">
                <button className="button" onClick={handleSerch}>
                  Busca
                </button>
              </div>
      </div>

      <div>
        

            { Object.keys(cachePokemmons).length > 0 && ( 
              <div>

                <div className="cenario">
                  <img src={cachePokemmons[indexPokemonAtual].sprites} className="App-Imagem" alt="personagem animado" />
                </div>
                
                <div className="Janelinha Justificado">
                  <div>
                    <h1>
                      {cachePokemmons[indexPokemonAtual].name}
                    </h1>
                    <img src={cachePokemmons[indexPokemonAtual].shiny} className="App-Imagem" alt="mini personagem" />
                  </div>
                  <div>
                    Nome : {cachePokemmons[indexPokemonAtual].name} <br/>
                    Id : {cachePokemmons[indexPokemonAtual].id} <br/>
                    Order : {cachePokemmons[indexPokemonAtual].order} <br/>
                    vida : {cachePokemmons[indexPokemonAtual].vida} <br/>
                    Ataque : {cachePokemmons[indexPokemonAtual].ataque} <br/>
                    Defesa : {cachePokemmons[indexPokemonAtual].defesa} <br/>
                    Super-Ataque : {cachePokemmons[indexPokemonAtual].superAtaque} <br/>
                    Super-Defesa : {cachePokemmons[indexPokemonAtual].superDefesa} <br/>
                    Velocidade : {cachePokemmons[indexPokemonAtual].velocidade} <br/>
                    Busca : {cachePokemmons[indexPokemonAtual].index}
                  </div>
                </div>

              </div>
            )}

      </div>

      {showPopUp && <AlertPopUp message={popUpMessage} onClose={closePopUp} />}

      <div className="Janelinha">
        <h3>Historico de busca:</h3>
        
          {cachePokemmons.map((item, indice) => (
                <button className="Link-Lista" onClick={()=>setIndexPokemonAtual(indice)}>
                  <b>{"["+indice+"]"+item.id+"-"+item.name+"."}</b>
                </button>
          ))}
   
      </div>

      <Footer/>
    </div>
  );
}

export default App;
