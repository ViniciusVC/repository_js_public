import Image from 'next/image'
import styles from './index.module.css'
//import ImgVVC from '../../atoms/atImg'
import DivHorizontal from '../atDiv/horizontal'
import BtLink from '../atBtLink'

export default function moHeaderCode({
  regiao,
  url,
}: {
  regiao: string; url: string
}) {

  //console.log('moRegiao - Code - server component')
 
  function lingua(X:string,Y:string){
    if(regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }

  function linguaNum(X:number,Y:number){
    if(regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }

//<div className={styles.TitulodoSite}></div>
  return (   

    <div>
      <div>{ }</div>
      <div className={styles.ClassRegiaoflags}>
        <DivHorizontal>  
          <BtLink href={"/en"+url} estilo="">
            <Image 
              src="/ico_en_usa.jpg"
              width={linguaNum(25,32)}
              height={linguaNum(25,32)}
              alt={lingua("língua inglesa (Bandeira USA)","English language (USA flag)")}
            />
          </BtLink>
          <span className={styles.ClassEspaceRegiao}> </span>
          <BtLink href={"/pt"+url} estilo="">
            <Image 
              src="/ico_pr_br.jpg"
              width={linguaNum(32,25)}
              height={linguaNum(32,25)}
              alt={lingua("Língua português (Bandeira Brasil)","Portuguese language (Brazil flag)")}
            />
          </BtLink>
        </DivHorizontal>   
      </div>
    </div>
    
  )
}
