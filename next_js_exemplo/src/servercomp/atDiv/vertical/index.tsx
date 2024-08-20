import styles from './index.module.css'

export default function AtByVercel(
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  // Div Vertical
  return (
    <div className={styles.atDivVertical}>
      {children}
    </div>
  )
}
