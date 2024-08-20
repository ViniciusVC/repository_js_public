import Link from 'next/link'
import styles from './index.module.css'

export default function btLinkRosaInvertido({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
    <Link href={href}>
      <div className={styles.btLinkRosaInvertido}>
        {children}{" "}
      </div>
    </Link>    
  )
}
