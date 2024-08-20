import styles from "./page.module.css";
import LayoutVVC from '../../../servercomp/layoutvvc';
import TemplateBackup from '../../../servercomp/template/backup'

export default function Backup() {
  return (
    <main className={styles.main}>
      <LayoutVVC regiao="pt" titulo="Comandos" url="/backup/">
        <TemplateBackup regiao="pt"/>
      </LayoutVVC>
    </main>
  );
}
