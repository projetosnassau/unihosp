import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../HospedeDashboard.module.css"; // Reutilize os estilos
import { useNavigate } from "react-router-dom";

function HistoricoReservasHospede() {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHistorico = useCallback(async () => {
    if (!token || !userId) {
      setError("Autenticação necessária.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/hospede/reservas/historico`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Erro ao buscar histórico de reservas.");
      if (Array.isArray(data)) setHistorico(data);
      else {
        setHistorico([]);
        console.warn("HistóricoReservas: Dados não são array:", data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    fetchHistorico();
  }, [fetchHistorico]);

  const formatarData = (dataISO) =>
    new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });

  if (loading)
    return (
      <p className={styles.loading}>Carregando histórico de reservas...</p>
    );
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reservasContainer}>
      {historico.length === 0 ? (
        <p>Você não possui reservas no seu histórico.</p>
      ) : (
        <ul className={styles.reservasList}>
          {historico.map((reserva) => (
            <li
              key={reserva.id}
              className={`${styles.reservaCard} ${
                styles["reservaStatus" + reserva.status?.replace(/\s+/g, "")] ||
                ""
              }`}
            >
              <h4>
                {reserva.casa?.endereco || "N/A"}, {reserva.casa?.numero || ""}
              </h4>
              <p>
                <strong>Cidade:</strong> {reserva.casa?.cidade || "N/A"}
              </p>
              <p>
                <strong>Check-in:</strong> {formatarData(reserva.dataCheckIn)} |{" "}
                <strong>Check-out:</strong> {formatarData(reserva.dataCheckOut)}
              </p>
              <p>
                <strong>Locador:</strong> {reserva.casa?.locador?.name || "N/A"}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`${styles.status} ${
                    styles["status" + reserva.status?.replace(/\s+/g, "")] || ""
                  }`}
                >
                  {reserva.status || "N/A"}
                </span>
              </p>
              <div className={styles.reservaActions}>
                <button
                  className={styles.actionButtonSecondary}
                  onClick={() => navigate(`/casas/${reserva.casaId}`)}
                >
                  Ver Detalhes da Casa
                </button>
                {/* Aqui não há ações de cancelar ou arquivar, pois já estão no histórico */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoricoReservasHospede;
