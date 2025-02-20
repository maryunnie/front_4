import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1inicio}>Bem-vindo à clínica Serenity !</h1>
      <p className={styles.p}>Este é o sistema de gerenciamento da clínica, explore as seções acima para saber mais.</p>
      <Image className={styles.img} src="/images/clinicaaa.jpg" alt="imag" width={600} height={450}/>
    </div>
  );
}
