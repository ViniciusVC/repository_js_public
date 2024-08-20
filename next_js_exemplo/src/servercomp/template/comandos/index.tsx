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
      <h1>{lingua("Projeto exemplo next","Example project next")}</h1>
      <br/>
      This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).<br/>
      <br/>
      <h2>Getting Started</h2><br/>
      <br/>
      First, run the development server:<br/>
      <br/>
      bash<br/>
      npm run dev<br/>
      # or<br/>
      yarn dev<br/>
      # or<br/>
      pnpm dev<br/>
      # or<br/>
      bun dev<br/>
      <br/>
      <br/>
      Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.<br/>
      <br/>
      You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.<br/>
      <br/>
      This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.<br/>
      <br/>
      <h2>Learn More</h2><br/>
      <br/>
      To learn more about Next.js, take a look at the following resources:<br/>
      <br/>
      - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.<br/>
      - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.<br/>
      <br/>
      You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!<br/>
      <br/>
      <h2>Deploy on Vercel</h2><br/>
      <br/>
      The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.<br/>
      <br/>
      Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.<br/>

  </>    
  )
}
