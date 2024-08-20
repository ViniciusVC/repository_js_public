import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkbutazulLink({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <span className={styles.btLinkbutazulLink}>
        <strong>
          {children}
        </strong>
      </span>
    </Link>   
  )
}
