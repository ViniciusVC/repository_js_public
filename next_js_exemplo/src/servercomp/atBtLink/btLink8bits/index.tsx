import Link from 'next/link'
import styles from './index.module.css'

export default function btLink8bit({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  // Botão do tetris.
  if(href!=""){
    return (
        <Link href={href}>
        <div className={styles.btLink8bit}>
          {children}
        </div>
      </Link>  
    );
  }else{
    return(
        <div className={styles.btLink8bit}>
            {children}
        </div>
    )
  }

}
