import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import LoginModal from "../../utils/LoginModal";
import EscolhaModal from "../../utils/EscolhaModal";
import RegisterHospedeModal from "../../utils/RegisterHospedeModal";
import RegisterLocadorModal from "../../utils/RegisterLocadorModal";

function Header() {
  const { isAuthenticated, userType, logoutAction } = useAuth();
  const navigate = useNavigate();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserTypeChoiceModalOpen, setIsUserTypeChoiceModalOpen] =
    useState(false);
  const [isRegisterHospedeModalOpen, setIsRegisterHospedeModalOpen] =
    useState(false);
  const [isRegisterLocadorModalOpen, setIsRegisterLocadorModalOpen] =
    useState(false);

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsUserTypeChoiceModalOpen(false);
    setIsRegisterHospedeModalOpen(false);
    setIsRegisterLocadorModalOpen(false);
  };

  const openLoginModal = () => {
    closeAllModals();
    setIsLoginModalOpen(true);
  };

  const handleNavigateToUserTypeChoice = () => {
    closeAllModals();
    setIsUserTypeChoiceModalOpen(true);
  };

  const handleSelectHospede = () => {
    closeAllModals();
    setIsRegisterHospedeModalOpen(true);
  };

  const handleSelectLocador = () => {
    closeAllModals();
    setIsRegisterLocadorModalOpen(true);
  };

  const handleNavigateToLogin = () => {
    closeAllModals();
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    logoutAction();
    navigate("/");
  };

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    if (
      isLoginModalOpen ||
      isUserTypeChoiceModalOpen ||
      isRegisterHospedeModalOpen ||
      isRegisterLocadorModalOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalBodyOverflow;
    }
    return () => {
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [
    isLoginModalOpen,
    isUserTypeChoiceModalOpen,
    isRegisterHospedeModalOpen,
    isRegisterLocadorModalOpen,
  ]);

  const navigateToPath = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <header className={styles.header}>
        <h1
          className={styles.title}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          UniHosp
        </h1>
        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <a href="/" onClick={(e) => navigateToPath(e, "/")}>
              Home
            </a>
          </li>
          <li className={styles.list}>
            <a href="/sobre" onClick={(e) => navigateToPath(e, "/sobre")}>
              Sobre
            </a>
          </li>
          <li className={styles.list}>
            <a href="/servicos" onClick={(e) => navigateToPath(e, "/servicos")}>
              Serviços
            </a>
          </li>
          <li className={styles.list}>
            <a href="/contato" onClick={(e) => navigateToPath(e, "/contato")}>
              Contato
            </a>
          </li>

          {isAuthenticated ? (
            <>
              {userType === "admin" && (
                <li className={styles.list}>
                  <a href="/admin" onClick={(e) => navigateToPath(e, "/admin")}>
                    Painel Admin
                  </a>
                </li>
              )}
              {userType === "hospede" && (
                <li className={styles.list}>
                  <a
                    href="/hospede/dashboard"
                    onClick={(e) => navigateToPath(e, "/hospede/dashboard")}
                  >
                    Meu Painel
                  </a>
                </li>
              )}
              {userType === "locador" && (
                <li className={styles.list}>
                  <a
                    href="/locador/dashboard"
                    onClick={(e) => navigateToPath(e, "/locador/dashboard")}
                  >
                    Meu Painel
                  </a>
                </li>
              )}
              <li className={styles.listLogin}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li className={styles.listLogin}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openLoginModal();
                }}
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </header>

      {!isAuthenticated && (
        <>
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeAllModals}
            onSwitchToRegister={handleNavigateToUserTypeChoice}
          />
          <EscolhaModal
            isOpen={isUserTypeChoiceModalOpen}
            onClose={closeAllModals}
            onSelectHospede={handleSelectHospede}
            onSelectLocador={handleSelectLocador}
            onSwitchToLogin={handleNavigateToLogin}
          />
          <RegisterHospedeModal
            isOpen={isRegisterHospedeModalOpen}
            onClose={closeAllModals}
            onSwitchToLogin={handleNavigateToLogin}
          />
          <RegisterLocadorModal
            isOpen={isRegisterLocadorModalOpen}
            onClose={closeAllModals}
            onSwitchToLogin={handleNavigateToLogin}
          />
        </>
      )}
    </>
  );
}

export default Header;
