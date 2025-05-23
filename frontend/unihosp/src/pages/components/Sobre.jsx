import React from "react";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>SOBRE</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img
            src="https://placehold.co/450x300/E0E0E0/7F7F7F?text=Imagem+Sobre"
            alt="Ilustração sobre a Unihosp"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.introText}>A Unihosp surgiu como...</p>
          <p className={styles.paragraphText}>
            Lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
