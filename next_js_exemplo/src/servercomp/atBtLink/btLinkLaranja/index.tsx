import Link from 'next/link'
import styles from './index.module.css'

export default function btLinklaranja({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinklaranja}>
        {children}
      </div>
    </Link>    
  )
}
