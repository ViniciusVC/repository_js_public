import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkAmarelo1({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkAmarelo1}>
        {children}
      </div>
    </Link>    
  )
}
