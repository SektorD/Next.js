import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: 'Кабинет',
}

export default function kabinet() {
  return (
    <main className={styles.main}>
      <Menu />

      <div className={styles.center}>
        Кабинет
      </div>

      <form className={styles.form}>
        Логин
        <input type="email" className={styles.input}></input>
        Пароль
        <input type="password" className={styles.input}></input>
        <button className={styles.button}>Войти</button>
      </form>
    </main>
  );
}
