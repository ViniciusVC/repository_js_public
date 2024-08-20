import Image from 'next/image'
import styles from './index.module.css'

export default function moHeaderCode({
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
        <h1>{lingua("Projeto exemplo next","Example project next")}</h1>
      </div>     
      <div className={styles.center}>
        <p>
          {lingua("Este é um projeto exemplo com Next.","This is an example project with Next.")}<br/>
          {lingua("Algumas páginas e opção e troca de lingua.","Some pages and language switching options.")}
        </p>
      </div>
    </>
  )
}
