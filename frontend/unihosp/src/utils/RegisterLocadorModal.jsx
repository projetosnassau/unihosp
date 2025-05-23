import React from "react";
import styles from "./RegisterLocadorModal.module.css";

const UserIcon = () => <span className={styles.icon}>&#128100;</span>; // 👤
const EmailIcon = () => <span className={styles.icon}>&#128231;</span>; // 📧
const LockIcon = () => <span className={styles.icon}>&#128274;</span>; // 🔒
const CpfIcon = () => <span className={styles.icon}>&#128196;</span>; // 📄
const AddressIcon = () => <span className={styles.icon}>&#127968;</span>; // 🏠 (Casa)
const CepIcon = () => <span className={styles.icon}>&#128230;</span>; // 📫
const CityIcon = () => <span className={styles.icon}>&#127961;</span>; // 🏙️
const StateIcon = () => <span className={styles.icon}>&#127463;&#127479;</span>; // 🇧🇷

function RegisterLocadorModal({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modalOverlay} ${styles.open}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className={styles.modalBody}>
          <div className={styles.illustrationContainer}>
            <img
              src="https://placehold.co/280x280/E0F2F7/007B8A?text=Ilustração"
              alt="Ilustração Cadastro Locador"
              className={styles.illustration}
            />
          </div>

          <div className={styles.formContainer}>
            <div className={styles.inputGroup}>
              <UserIcon />
              <input
                type="text"
                placeholder="Nome Completo"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <EmailIcon />
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <LockIcon />
              <input
                type="password"
                placeholder="Senha"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <CpfIcon />
              <input
                type="text"
                placeholder="CPF (somente números)"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <AddressIcon />
              <input
                type="text"
                placeholder="Endereço Completo (Rua, N°, Bairro)"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <CepIcon />
              <input
                type="text"
                placeholder="CEP (somente números)"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <CityIcon />
              <input
                type="text"
                placeholder="Cidade"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <StateIcon />
              <input
                type="text"
                placeholder="Estado (UF)"
                className={styles.inputField}
              />
            </div>
            <button type="button" className={styles.confirmButton}>
              Confirmar Cadastro
            </button>
            <p className={styles.alternativeLink}>
              Já tem uma conta?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSwitchToLogin) onSwitchToLogin();
                }}
              >
                Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLocadorModal;
