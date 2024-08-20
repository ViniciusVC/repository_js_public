import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkAmarelo3({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkAmarelo3}>
        {children}
      </div>
    </Link>    
  )
}
