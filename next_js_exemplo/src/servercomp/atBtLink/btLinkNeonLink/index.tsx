import Link from 'next/link'
import styles from './index.module.css'

//href="/en/game/" value="game" estilo="

export default function btLinkNeonLink({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
      <Link href={href}>
          <span className={styles.btLinkNeonLink}>
            <strong>
              {children}
            </strong>
          </span>
      </Link>        
  )
}
