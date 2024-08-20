import styles from './index.module.css'

export default function atDivHorizontal(
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  //"horizontal"
  return (
    <div className={styles.atDivHorizontal}>
      {children}
    </div>
  )
}
