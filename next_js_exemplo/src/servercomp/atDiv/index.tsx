import styles from './index.module.css'

export default function AtByVercel(
  {
    display,
    children,
  }: {
    display: string; children: React.ReactNode
  }
) {
  if(display == "vertical") {
    return (
      <div className={styles.atDivVertical}>
        {children}
      </div>
    )
  } else if(display == "justificado") {
    return (
      <div className={styles.atDivJustificado}>
        {children}
      </div>
    )
  } else if(display == "horizontal") {
    return (
      <div className={styles.atDivHorizontal}>
        {children}
      </div>
    )
  }else if(display == "DivLinhaResponsivo"){
    return(
      <div className={styles.atDivlinha}>
        {children}
      </div>
    )
  }else{
    //display=="responsivo"
    return (
      <div className={styles.atDivResponsivo}>
        {children}
      </div>
    )
  }
}
