import styles from './index.module.css'
import Image from 'next/image'

//import ImgVVC from '../../atoms/atImg';
import DivHorizontal from '../atDiv/horizontal';
import DivResponsivo from '../atDiv/responsivo';
import MoRegiao from '../moRegiao'
import BtLink from '../atBtLink'

export default function moNextmoFooterSideDoValenteTestCard({
  regiao,
  url,
}: {
  regiao: string;
  url: string; 
}) {

  function lingua(X:string,Y:string){
    if(regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }

  //console.log('rodando moFooterSideDoValente  - server component')
  return (
    <DivResponsivo>

          <BtLink href={"/"+regiao+"/"} estilo="">
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </BtLink>

          <DivResponsivo>
              <BtLink href={"/"+regiao+"/backup/"} estilo='neon'>Backup</BtLink>
              <BtLink href={"/"+regiao+"/comandos/"} estilo='neon'>{lingua("Comandos","Commands")}</BtLink>
              <BtLink href={"/"+regiao+"/sobre/"} estilo='neon'>{lingua("Sobre","About")}</BtLink>
          </DivResponsivo>

          <MoRegiao 
            regiao={regiao}
            url={url}
          />

    </DivResponsivo>
  )
}
