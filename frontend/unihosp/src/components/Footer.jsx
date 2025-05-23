import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.siteName}>UniHosp</p>
        <div className={styles.contactInfo}>
          <a href="mailto:yanlucas2202@gmail.com" className={styles.emailLink}>
            yanlucas2202@gmail.com
          </a>
        </div>
        <div className={styles.socialLinks}>
          {/* Substitua '#' pelos seus links reais e considere usar ícones */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} UniHosp. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
