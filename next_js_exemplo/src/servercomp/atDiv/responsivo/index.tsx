import styles from './index.module.css'

export default function atDivResponsivo(
    {
      children,
    }: {
      children: React.ReactNode
    }
  ) {
  //"responsivo"
  return (
      <div className={styles.atDivResponsivo}>
        {children}
      </div>
  )
}
