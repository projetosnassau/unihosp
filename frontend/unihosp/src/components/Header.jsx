// Header.js - Estrutura CORRIGIDA
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>UniHosp</h1>
        {/* A <ul> agora é filha direta do header, o <li> problemático foi removido */}
        <ul className={styles.listContainer}>
          <li className={styles.list}>Home</li>
          <li className={styles.list}>Sobre</li>
          <li className={styles.list}>Serviços</li>
          <li className={styles.list}>Contato</li>
          <li className={styles.listLogin}>
            <a href="#">Login</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
