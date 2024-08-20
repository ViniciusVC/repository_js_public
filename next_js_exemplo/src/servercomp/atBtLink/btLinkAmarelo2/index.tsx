import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkAmarelo2({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkAmarelo2}>
        {children}
      </div>
    </Link>    
  )
}
