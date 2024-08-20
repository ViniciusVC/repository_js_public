import Link from 'next/link'
import styles from './index.module.css'

export default function btLuz({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {

    if(href!=""){
      return (
        // Botão luz.
        <Link  href={href}>
          <div className={styles.btLuzA}>
            <div className={styles.btLuz}>
              <div className={styles.btLuz1}></div>
              <div className={styles.btLuz2}>{children}</div>
              <div className={styles.btLuz3}></div>
            </div>
          </div>
        </Link>
      );
    }else{
      return (
        // Botão luz.
        <div className={styles.btLuz}>
            <div className={styles.btLuz1}></div>
            <div className={styles.btLuz2}>{children}</div>
            <div className={styles.btLuz3}></div>
        </div>
      );
    }

}
