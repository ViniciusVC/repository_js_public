import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkRosa({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkRosa}>
        {children}{" "}
      </div>
    </Link>    
  )
}
