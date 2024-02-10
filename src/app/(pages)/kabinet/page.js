import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import { Auth } from "./components/Auth";

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

      <Auth />

    </main>
  );
}
