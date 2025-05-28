import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../LocadorDashboard.module.css";
import { useNavigate } from "react-router-dom";

function HistoricoReservasLocador() {
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
        `http://localhost:5000/api/locador/reservas/historico`,
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
        console.warn("HistóricoReservasLocador: Dados não são array:", data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    if (token && userId) fetchHistorico();
  }, [fetchHistorico, token, userId]);

  const formatarData = (dataISO) =>
    new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });

  if (loading)
    return (
      <p className={styles.loading}>Carregando histórico de reservas...</p>
    );
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reservasContainer}>
      {" "}
      {}
      {historico.length === 0 ? (
        <p>Nenhuma reserva encontrada no seu histórico.</p>
      ) : (
        <ul className={styles.reservasList}>
          {" "}
          {}
          {historico.map((reserva) => (
            <li
              key={reserva.id}
              className={`${styles.reservaCard} ${
                styles["reservaStatus" + reserva.status?.replace(/\s+/g, "")] ||
                ""
              }`}
            >
              <h4>
                Casa: {reserva.casa?.endereco || "N/A"},{" "}
                {reserva.casa?.cidade || "N/A"} (ID: {reserva.casaId})
              </h4>
              <p>
                <strong>Hóspede:</strong> {reserva.hospede?.name || "N/A"} (
                {reserva.hospede?.email || "N/A"})
              </p>
              <p>
                <strong>Check-in:</strong> {formatarData(reserva.dataCheckIn)} |{" "}
                <strong>Check-out:</strong> {formatarData(reserva.dataCheckOut)}
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
                  Ver Casa
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default HistoricoReservasLocador;
