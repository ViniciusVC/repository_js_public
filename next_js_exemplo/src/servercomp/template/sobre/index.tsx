import Image from 'next/image'
import styles from './index.module.css'

export default function Sobre({
  regiao,
}: {
  regiao: string; 
}) {

  function lingua(X:string,Y:string){
    if(regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }


  return (   
    <>
    <div className={styles.center}>
      <h1>{lingua("Sobre este projeto","About this project")}</h1>
      <p>
        {lingua("Este projeto foi desenvolvido por Vinícius Valente Coutinho,",
        "This project was developed by Vinícius Valente Coutinho,")}<br/> 
        {lingua("Analista de Sistemas full Stack,",
        "Full Stack Systems Analyst.")}<br/> 
        {lingua("Estou a mais de 20 anos na áreas de TI.","I have been in the IT field for over 20 years.")}<br/>
        {lingua("Experiência em desenvolvimento com ","Development experience with ")} <a href="https://vvcestudio.com.br/pt/tutorial/javascript/nodejs/">NodeJS</a>, <a href="https://vvcestudio.com.br/pt/tutorial/javascript/reactjs/">React</a>,  <a href="https://vvcestudio.com.br/pt/tutorial/javascript/nextjs/">Nextjs</a>,  <a href="https://vvcestudio.com.br/pt/tutorial/dotnet/">DotNet</a>, APIs REST;<br/>
        {lingua(" Configuração de "," Configuration of ")} CDN {lingua(" Configuração de "," and ")} <a href="https://vvcestudio.com.br/pt/tutorial/apache/">Apache</a>; 
        {lingua("Conhecimento sobre Arquitetura de Solução;","Knowledge of Solution Architecture;")}}<br/>
        {lingua("Banco de dados relacional e ","Relational database and ")}NoSQL (Oracle,  <a href="https://vvcestudio.com.br/pt/tutorial/bancodedados/mysql/">MySQL</a>, MongoDB, BigData  <a href="https://vvcestudio.com.br/pt/tutorial/bancodedados/hadoop/"> Hadoop</a>).<br/>
        {lingua("Trabalhei nas gigantes ","I worked at the giants ")}<b>IRB</b>, <b>Globo</b> e <b>Oi</b>.<br/>
        {lingua("Atuei como líder técnico em vários projeto.","I acted as technical leader on several projects.")}<br/>  
    </p>
    <p>
        {lingua("Veja meu currículo aqui.","See my resume here.")} <a href="https://vvcestudio.com.br/pt/eu/curriculo">https://vvcestudio.com.br/pt/eu/curriculo</a>
    </p>
    </div>

   
  </>    
  )
}
