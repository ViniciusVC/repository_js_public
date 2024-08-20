import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkPurple1({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkPurple1}>
        {children}{" "}
      </div>
    </Link>    
  )
}
