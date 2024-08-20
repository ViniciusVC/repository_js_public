import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkbutGrafite({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
    if(href!=""){
      return (
        // Botão do Minha Oi na home do site SEO.
        <Link href={href}>
          <div className={styles.btLinkbutGrafite}>
            {children}
          </div>
        </Link>
      );
    }else{
      return(
        <div className={styles.btLinkbutGrafite}>
          {children}
        </div>
      )
    }
}
