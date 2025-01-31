import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Bem vindo!</h1>
    </div>
  );
}
