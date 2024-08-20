import styles from "./page.module.css";
import LayoutVVC from '../servercomp/layoutvvc';
import TemplateHome from '../servercomp/template/home'

export default function Home() {

  return (
    <main className={styles.main}>
      <LayoutVVC regiao="pt" titulo="Home" url="/">
        <TemplateHome regiao="pt"/>
      </LayoutVVC>
    </main>
  );
}