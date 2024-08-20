import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkbutazul({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  if(href!=""){
    return (
      <Link href={href}>
      <div className={styles.btLinkbutazul}>
        {children}
      </div>
    </Link>  
    );
  }else{
    return(
      <div className={styles.btLinkbutazul}>
          {children}
      </div>
    )
  }
}
