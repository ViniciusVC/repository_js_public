import {useState} from "react";
import './App.css';
import Header from './comp/header';
import Footer from './comp/footer';
import Janela from './comp/janela';
import Responsivo from './comp/divresponsivo';
import AlertPopUp from './comp/alertPopUp'; // Importar componente AlertPopUp.
import api from "./services/api";


function App() {

  const imgAvatar= "/public/img/v0.png";

  // Tratando o Pop-Up de Alerta-------------------------------------
  const [showPopUp, setShowPopUp] = useState(true); // Pop-Up inicia fechado.
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

  // Janela de Login
  const [inpEmailLogin, setInpEmailLogin] = useState('');
  const [inpPassLogin, setInpPassLogin] = useState('');

  const [inpEmailRegister, setInpEmailRegister] = useState('');
  const [inpPassRegister, setInpPassRegister] = useState('');
  const [inpPass2Register, setInpPass2Register] = useState('');

  const [usuario, setUsuario] = useState({});
  const [logged, setLogged] = useState(false);

  const [janelaLogged, setJanelaLogged] = useState(false);
  const [janelaRegister, setJanelaRegister] = useState(false);
  const [janelaLogin, setJanelaLogin] = useState(true);

  function verfLogin(){
    if (inpEmailLogin ===''){
      showAlert("Preencha o campo e-mail.");
      return false;
    }else if (inpPassLogin === ''){
      showAlert("Preencha o campo senha.");
      return false;
    }else if (isWeakPassword(inpPassLogin)) {
      showAlert("Login ou senha incorretos. Tente novamente.");
      return false;
    }else{
      showAlert("verificando dados de login...");
      return true;
    }
    
  }

  function verfRegister(){
    if (inpEmailRegister ===''){
      showAlert("Preencha o campo e-mail.");
      return false;  
    }else if (inpPassRegister === ''){
      showAlert("Preencha o campo senha.");
      return false;
    }else if (inpPass2Register === ''){
      showAlert("Preencha o campo confirmação de senha.");
      return false;
    }else if (inpPass2Register !== inpPassRegister){
      showAlert("Verifique a digitação da senha.");
      return false;
    }else if (isWeakPassword(inpPassRegister)) {
      showAlert("A senha não é forte o suficiente.");
      return false;
    }else{
      showAlert("Salvando dados do registro...");
      return true;
    }
  }

  function isWeakPassword(password) {
    // Verifica se a senha tem pelo menos 6 caracteres
    if (password.length < 6) {
        return true; // Senha fraca
    } 

    // Verifica se a senha contém pelo menos uma letra maiúscula
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
        return true; // Senha fraca
    }

    // Verifica se a senha contém pelo menos uma letra minúscula
    const hasLowerCase = /[a-z]/.test(password);
    if (!hasLowerCase) {
        return true; // Senha fraca
    }

    // Verifica se a senha contém pelo menos um caractere especial
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        return true; // Senha fraca
    }

    // Se todas as condições forem atendidas, a senha é forte
    return false;
  }

  function limpaCapos(){
    console.log(" limpaCapos ");
    setInpEmailLogin("");
    setInpPassLogin("");
    setInpEmailRegister("");
    setInpPassRegister("");
    setInpPass2Register("");
  }
  

  async function openWinCadastro(){
    console.log(" openWinCadastro ");
    limpaCapos();
    setJanelaRegister(true);
    setJanelaLogin(false);
    setJanelaLogged(false);
  }
  
  async function openWinLogin(){
    console.log(" openWinLogin ");
    limpaCapos();
    setJanelaRegister(false);
    setJanelaLogin(true);
    setJanelaLogged(false);
  }

  async function submitCadastro(){
    console.log(" submitCadastro ");
    console.log(" ("+inpEmailRegister +","+inpPassRegister+") ");

    if(verfRegister()){
      try{
        const response = await api.post("register", {
          inpEmailRegister,
          inpPassRegister
        });
        if(response.data.erro){
          showAlert("Erro1: Ocorreu um erro ao enviar cadastro ao servidor. Tente novamente.");  
        }else{
          showAlert("Cadastrado com sucesso.");
          console.log("Cadastrado com sucesso.");
          console.log(response.data);
          openWinLogin();
        }
      }catch{
        showAlert("Erro2: Ocorreu um erro ao enviar cadastro ao servidor. Tente novamente.");
      }
        

    }
  }

  async function submitLogin(){
    console.log("[B1] submitLogin ("+inpEmailLogin +","+inpPassLogin+") ");
    
    if(verfLogin()){
      try{
        //const response = await api.get();
        
        const response = await api.post("login?useCookies=true", {
          "email": inpEmailLogin,
          "password": inpPassLogin,
        });
        
        if(response.data.erro){
            showAlert("Erro1: Ocorreu um erro ao logar. Tente novamente.");  
            console.log("[B1] Erro1: Ocorreu um erro ao logar. Tente novamente.");
            console.log(response.data.erro);
        }else{
            showAlert("Logado.");
            console.log("[B1] Logado.");
            console.log(response.data); //Hello World! Projeto DotNet API com login de usuário, usando o Identity API.
        }
      }catch(e){
          showAlert("Erro2: Ocorreu um erro ao logar. Tente novamente.");
          console.log("[B1] Erro2: Ocorreu um erro ao logar!!!!!!!!!!!!");
          console.log(e);
      }
    }
  }

  async function submitLogout(){
    console.log(" submitLogout ");
    try{
      const response = await api.post("logout", {});
      if(response.data.erro){
        showAlert("Erro1: Ocorreu um erro ao deslogar.");  
      }else{
        showAlert("Deslogado.");
        //setUsuario({});
      }
    }catch{
      showAlert("Erro2: Ocorreu um erro ao deslogar.");  
    }
    openWinLogin();
  }

  return (
    <div className="App">
      <Header/>
      <Janela>
        {janelaLogin && (
        <Responsivo>

          <div className="JanelaEquerda">
            <p className="esconder">Logar</p>
            <h1 className="esconder">BEM VINDO</h1>
            <p className="esconder">Para ter acesso as todas as funcionaliades, <br/>precisa estar logado.</p>    
            <button className="btCriaConta" onClick={openWinCadastro}>
              Não tenho uma conta. Criar uma conta
            </button>
          </div>

          <div className="JanelaDireita">
              <p><br/></p>
              
              e-mail<br/>
              <input type="text"
              placeholder="e-mail"
              value={inpEmailLogin}
              name="email"
              onChange={(e)=> setInpEmailLogin(e.target.value)}/><br/>
              
              senha<br/>
              <input type="password"
              placeholder="senha"
              value={inpPassLogin}
              name="senha"   
              onChange={(e)=> setInpPassLogin(e.target.value)}/><br/>
              
              <button className="btEnviar" onClick={submitLogin}>Entrar</button>
          </div>

        </Responsivo>
        )}

        {janelaRegister && (
          <Responsivo>
            <div className="JanelaEquerda">
              <p className="esconder">Cadastro</p>
              <h1 className="esconder">Cria uma conta.</h1>
              <p className="esconder">Registr-se para ter acesso as todas as funcionaliades.</p>    
              <button className="btCriaConta" onClick={openWinLogin}>
                Ja me registei. Entrar na minha conta agora.
              </button>
            </div>

            <div className="JanelaDireita">
              <p>Cadastro</p>

              e-mail<br/>
              <input type="text"
              placeholder="e-mail"
              value={inpEmailRegister}
              name="email"
              onChange={(e)=> setInpEmailRegister(e.target.value)}/><br/>

              senha<br/>
              <input type="password"
              placeholder="senha"
              value={inpPassRegister}
              name="senha"   
              onChange={(e)=> setInpPassRegister(e.target.value)}/><br/>

              Confirme a senha<br/>
              <input type="password2"
              placeholder="senha"
              value={inpPass2Register}
              name="senha"   
              onChange={(e)=> setInpPass2Register(e.target.value)}/><br/>

<button className="btEnviar" onClick={submitCadastro}>Cadastrar</button>

            </div>
          </Responsivo>
          )}

        {janelaLogged && (
          <Responsivo>
            <div className="JanelaEquerda">
              <h1 className="esconder">LOGADO</h1>
              <p className="esconder">Esta é a sua conta?</p>    
              <button className="btCriaConta" onClick={submitLogout}>
                Trocar de conta agora.
              </button>
            </div>

            <div className="JanelaDireita">          
              <img src={imgAvatar} className="ImgAvatarG" alt="avatar" /><br/>
              <p>Você esta logado como <span>e-mail</span>.</p>
              <br/>
<button className="btEnviar" onClick={submitLogout}>Deslogar</button>

            </div>
          </Responsivo>
          )}

      </Janela>

      {showPopUp && <AlertPopUp message={popUpMessage} onClose={closePopUp} />}

      <Footer/>
    </div>
  );
}

export default App;
