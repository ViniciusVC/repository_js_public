import styles from './index.module.css';
//import { Inter } from 'next/font/google'
//import Image from 'next/image'

import DivVertical from '../atDiv/vertical';
import Header from '../moHeader';
import Footer from '../moFooter';
//import GTM from '../../atoms/atGTM';
//import GoogleAnalytics from '../../../clientcomp/atoms/atGoogleAnalytics';

export default function HomeLayout({
  regiao,
  titulo,
  url,
  children,
}: {
  regiao:string,
  titulo:string,
  url:string,
  children: React.ReactNode
}) {

  function lingua(X:string,Y:string){
    if(regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }

  return (
            <DivVertical>
              <Footer regiao={regiao} url={url}/>
              <div className={styles.ClassBody}>
                <div className={styles.ClassBodyInter}>
                  {children}
                </div>    
              </div>
              <Footer regiao={regiao} url={url}/>
            </DivVertical>
  )
}
