import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

import LoginModal from "../../utils/LoginModal";
import EscolhaModal from "../../utils/EscolhaModal";
import RegisterHospedeModal from "../../utils/RegisterHospedeModal";
import RegisterLocadorModal from "../../utils/RegisterLocadorModal";

function Header({ isLandingPage }) {
  const { isAuthenticated, userType, logoutAction } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 70;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (e, pathOrId) => {
    e.preventDefault();
    if (isLandingPage && pathOrId.startsWith("#")) {
      scrollToSection(pathOrId.substring(1));
    } else if (isLandingPage && pathOrId === "/") {
      scrollToSection("inicio");
    } else {
      navigate(pathOrId);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1
          className={styles.title}
          onClick={() =>
            handleNavClick(
              { preventDefault: () => {} },
              isLandingPage ? "#inicio" : "/"
            )
          }
          style={{ cursor: "pointer" }}
        >
          UniHosp
        </h1>
        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <a
              href={isLandingPage ? "#inicio" : "/"}
              onClick={(e) =>
                handleNavClick(e, isLandingPage ? "#inicio" : "/")
              }
            >
              Home
            </a>
          </li>
          <li className={styles.list}>
            <a
              href={isLandingPage ? "#sobre" : "/sobre"}
              onClick={(e) =>
                handleNavClick(e, isLandingPage ? "#sobre" : "/sobre")
              }
            >
              Sobre
            </a>
          </li>
          <li className={styles.list}>
            <a
              href={isLandingPage ? "#servicos" : "/servicos"}
              onClick={(e) =>
                handleNavClick(e, isLandingPage ? "#servicos" : "/servicos")
              }
            >
              Serviços
            </a>
          </li>
          <li className={styles.list}>
            <a
              href={isLandingPage ? "#contato" : "/contato"}
              onClick={(e) =>
                handleNavClick(e, isLandingPage ? "#contato" : "/contato")
              }
            >
              Contato
            </a>
          </li>

          {isAuthenticated ? (
            <>
              {userType === "admin" && (
                <li className={styles.list}>
                  <a href="/admin" onClick={(e) => handleNavClick(e, "/admin")}>
                    Painel Admin
                  </a>
                </li>
              )}
              {userType === "hospede" && (
                <li className={styles.list}>
                  <a
                    href="/hospede/dashboard"
                    onClick={(e) => handleNavClick(e, "/hospede/dashboard")}
                  >
                    Meu Painel
                  </a>
                </li>
              )}
              {userType === "locador" && (
                <li className={styles.list}>
                  <a
                    href="/locador/dashboard"
                    onClick={(e) => handleNavClick(e, "/locador/dashboard")}
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
