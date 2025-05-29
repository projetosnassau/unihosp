import React from "react";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <section id="contato" className={styles.contatoSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <p className={styles.sectionSubtitle}>
          Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
        </p>
        <div className={styles.contatoWrapper}>
          <div className={styles.contatoInfo}>
            <h3>UniHosp</h3>
            <p>Sua plataforma de hospedagem universitária.</p>
            <p>
              Email:{" "}
              <a href="mailto:contato@unihosp.com">contato@unihosp.com</a>
            </p>
            <p>Telefone: (XX) XXXXX-XXXX</p>
            <p>Maceió, Alagoas - Brasil</p>
          </div>
          <form className={styles.contatoForm}>
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
