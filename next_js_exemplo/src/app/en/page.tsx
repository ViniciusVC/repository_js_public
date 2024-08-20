import styles from "./page.module.css";
import LayoutVVC from '../../servercomp/layoutvvc';
import TemplateBackup from '../../servercomp/template/home'

export default function Backup() {
  return (
    <main className={styles.main}>
      <LayoutVVC regiao="en" titulo="Home" url="/">
        <TemplateBackup regiao="en"/>
      </LayoutVVC>
    </main>
  );
}
