import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkNeon({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
    if(href!=""){
      return (
        <Link href={href}>
          <div className={styles.btLinkNeon}>
            {children}
          </div>
        </Link>    
      )
    }else{
      return (
        <div>
          <div className={styles.btLinkNeon}>
            {children}
          </div>
        </div>    
      )
    }
  
}
