import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkItemLuzVerde({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return ( 
    <Link href={href}>
      <div className={styles.btLuzA}>
        <div className={styles.btLuz}>
          <div className={styles.btLuz1}></div>
          <div className={styles.btLuz2}>{children}</div>
          <div className={styles.btLuz3}></div>
        </div>
      </div>
    </Link>
  )
}
