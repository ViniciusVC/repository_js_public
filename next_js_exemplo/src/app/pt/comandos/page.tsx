import Image from "next/image";
import styles from "./page.module.css";
import LayoutVVC from '../../../servercomp/layoutvvc';
import TemplateComandos from '../../../servercomp/template/comandos'

export default function Comandos() {
  return (
    <main className={styles.main}>
      <LayoutVVC regiao="pt" titulo="Comandos" url="/comandos/">
        <TemplateComandos regiao="pt"/>
      </LayoutVVC>
    </main>
  );
}
