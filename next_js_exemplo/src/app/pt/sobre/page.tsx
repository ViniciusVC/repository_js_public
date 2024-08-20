import styles from "./page.module.css";
import LayoutVVC from '../../../servercomp/layoutvvc';
import TemplateSobre from '../../../servercomp/template/sobre'

export default function Comandos() {
  return (
    <main className={styles.main}>
      <LayoutVVC regiao="pt" titulo="Sobre" url="/sobre/">
        <TemplateSobre regiao="pt"/>
      </LayoutVVC>
    </main>
  );
}
