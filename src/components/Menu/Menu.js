import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.link}>
            <Link href={'/'}>Домашняя</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/kabinet'}>Кабинет</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/contacts'}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
