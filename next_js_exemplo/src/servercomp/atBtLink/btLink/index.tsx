import Link from 'next/link'
import styles from './index.module.css'

export default function AtBtLink({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
      //Sem padrão
      <Link href={href}>
        <div className={styles.btLink}>
          {children}
        </div>
      </Link>
  )
}
