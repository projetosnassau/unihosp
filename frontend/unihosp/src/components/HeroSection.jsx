import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  // Estima-se a altura do seu Header. Ajuste este valor se necessário.
  // Se o seu header tiver padding: 15px 50px e um título com font-size: 1.8em,
  // a altura pode ser algo em torno de 70px a 90px.
  // Exemplo: (15px padding superior + 15px padding inferior + altura do texto/logo)
  const headerHeight = "80px"; // Ajuste este valor conforme a altura real do seu Header

  return (
    <section
      className={styles.heroSection}
      style={{ paddingTop: headerHeight }} // Adiciona padding no topo igual à altura do header
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
        {/* Use um placeholder. Troque a URL pela sua imagem.
            Você pode gerar placeholders em https://placehold.co/
            Ex: https://placehold.co/600x400/E0E0E0/999999?text=Sua+Imagem+Aqui
            Para a imagem com o fundo circular como no exemplo, você precisará de uma imagem com transparência (PNG)
            e/ou estilização adicional no container da imagem.
        */}
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
