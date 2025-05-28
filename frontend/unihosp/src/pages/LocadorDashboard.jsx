import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./LocadorDashboard.module.css";
import DashboardHeader from "./hospede/DashboardHeader";
import LocadorProfileSummary from "./locador/LocadorProfileSummary";
import GerenciadorCasasLocador from "./locador/GerenciadorCasasLocador";
import GerenciadorReservasLocador from "./locador/GerenciadorReservasLocador";
import HistoricoReservasLocador from "./locador/HistoricoReservasLocador";

function LocadorDashboard() {
  const { userType, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [viewReservas, setViewReservas] = useState("ativas");

  useEffect(() => {
    if (isAuthenticated && userType !== "locador") {
      navigate("/");
    }
  }, [isAuthenticated, userType, navigate]);

  if (userType === null && !isAuthenticated) {
    return <div className={styles.loading}>Carregando dashboard...</div>;
  }
  if (isAuthenticated && userType !== "locador") {
    return <div className={styles.loading}>Redirecionando...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />
      <div className={styles.dashboardContent}>
        <LocadorProfileSummary />
        <GerenciadorCasasLocador />

        <section className={styles.dashboardSection}>
          <div className={styles.sectionHeaderWithToggle}>
            <h3>Gerenciamento de Reservas</h3>
            <div>
              <button
                onClick={() => setViewReservas("ativas")}
                className={
                  viewReservas === "ativas"
                    ? styles.toggleButtonActive
                    : styles.toggleButton
                }
              >
                Ativas
              </button>
              <button
                onClick={() => setViewReservas("historico")}
                className={
                  viewReservas === "historico"
                    ? styles.toggleButtonActive
                    : styles.toggleButton
                }
              >
                Histórico
              </button>
            </div>
          </div>
          {isAuthenticated && userType === "locador" ? (
            viewReservas === "ativas" ? (
              <GerenciadorReservasLocador />
            ) : (
              <HistoricoReservasLocador />
            )
          ) : (
            <p>Você precisa estar logado como locador.</p>
          )}
        </section>

        <section className={styles.dashboardSection}>
          <h3>Configurações do Perfil</h3>
          <p>Mantenha seus dados de locador atualizados.</p>
          <button
            className={styles.actionButton}
            onClick={() => navigate("/locador/perfil/editar")}
          >
            Editar Meu Perfil de Locador
          </button>
        </section>
      </div>
    </div>
  );
}
export default LocadorDashboard;
