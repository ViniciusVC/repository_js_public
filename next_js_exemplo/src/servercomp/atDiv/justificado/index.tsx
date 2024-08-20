import styles from './index.module.css'

export default function AtByVercel(
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  // Div Justificado
  return (
    <div className={styles.atDivJustificado}>
      {children}
    </div>
  )
}
