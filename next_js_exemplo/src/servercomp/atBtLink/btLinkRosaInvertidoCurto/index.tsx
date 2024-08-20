import Link from 'next/link'
import styles from './index.module.css'

//var varWidth = props.width;
//var varWidthMobile = props.mobilewidth;

export default function btLinkRosaInvertido({
  href,
  children,
  }: {
    href: string; children: React.ReactNode
  }) {
  return (
      // Botao Rosa Invertido Curto (Não esta sendo usado neste projeto).
      <Link href={href}>
        <div className={styles.btLinkRosaInvetidoCurto}>
          {children}{" "}
        </div>
      </Link>     
  )
}
