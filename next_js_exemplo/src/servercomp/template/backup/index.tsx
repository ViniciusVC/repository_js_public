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
      <div className={styles.description}>
      <p>
        {lingua("Comece editando ","Get started by editing ")}&nbsp;
        <code className={styles.code}>src/app/page.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          {lingua("Documentos","Docs")} <span>-&gt;</span>
        </h2>
        <p>{lingua("Encontre informações detalhadas sobre os recursos e a API do Next.js. ","Find in-depth information about Next.js features and API.")}</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
        {lingua("Aprender","Learn")}<span>-&gt;</span>
        </h2>
        <p>{lingua("Aprenda sobre Next.js em um curso interativo com","Learn about Next.js in an interactive course with")} &nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
        {lingua("Modelos","Templates")}<span>-&gt;</span>
        </h2>
        <p>{lingua("Explore modelos(Templates) iniciais para Next.js.","Explore starter templates for Next.js.")} </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          {lingua("Implante instantaneamente seu site Next.js em uma URL compartilhável com o Vercel.","Instantly deploy your Next.js site to a shareable URL with Vercel.")}
        </p>
      </a>
    </div>
  </>    
  )
}
