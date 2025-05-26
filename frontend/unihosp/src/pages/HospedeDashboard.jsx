import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./HospedeDashboard.module.css";
import ProfileSummary from "./hospede/ProfileSummary";
import DashboardHeader from "./hospede/DashboardHeader";
import MinhasReservas from "./hospede/MinhasReservas";
import MeusFavoritos from "./hospede/MeusFavoritos";

function HospedeDashboard() {
  const { userType, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && userType !== "hospede") {
      navigate("/");
    }
  }, [isAuthenticated, userType, navigate]);

  if (userType === null && !isAuthenticated) {
    return <div className={styles.loading}>Carregando dashboard...</div>;
  }
  if (isAuthenticated && userType !== "hospede") {
    return <div className={styles.loading}>Redirecionando...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />
      <div className={styles.dashboardContent}>
        <ProfileSummary />

        <section className={styles.dashboardSection}>
          <h3>Encontre sua Próxima Acomodação</h3>
          <p>
            Navegue pelas opções disponíveis e encontre o lugar perfeito para
            seus estudos.
          </p>
          <button
            className={styles.actionButton}
            onClick={() => navigate("/buscar-casas")}
          >
            Buscar Casas Agora
          </button>
        </section>

        <section className={styles.dashboardSection}>
          <h3>Minhas Reservas</h3>
          {isAuthenticated && userType === "hospede" ? (
            <MinhasReservas />
          ) : (
            <p>
              Você precisa estar logado como hóspede para ver suas reservas.
            </p>
          )}
        </section>

        <section className={styles.dashboardSection}>
          <h3>Meus Favoritos</h3>
          {isAuthenticated && userType === "hospede" ? (
            <MeusFavoritos />
          ) : (
            <p>
              Você precisa estar logado como hóspede para ver seus favoritos.
            </p>
          )}
        </section>

        <section className={styles.dashboardSection}>
          <h3>Configurações do Perfil</h3>
          <p>Mantenha seus dados atualizados.</p>
          <button
            className={styles.actionButton}
            onClick={() => navigate("/hospede/perfil/editar")}
          >
            Editar Meu Perfil
          </button>
        </section>
      </div>
    </div>
  );
}

export default HospedeDashboard;
