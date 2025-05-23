import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const headerHeight = "80px";
  return (
    <section
      className={styles.heroSection}
      style={{ paddingTop: headerHeight }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.mainHeading}>
          BEM <br />
          VINDO <br />A UNIHOSP!
        </h1>
        <p className={styles.subHeading}>
          Aqui você vai encontrar o que você tanto aguarda!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://placehold.co/500x450/CCCCCC/4A4A4A?text=Imagem+Ilustrativa"
          alt="Ilustração de boas-vindas da UniHosp"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default HeroSection;
