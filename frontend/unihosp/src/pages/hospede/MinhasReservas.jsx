import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../HospedeDashboard.module.css";
import { useNavigate } from "react-router-dom";

function MinhasReservas() {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [operationLoading, setOperationLoading] = useState(null);

  const fetchReservas = useCallback(async () => {
    if (!token || !userId) {
      setError("Autenticação necessária para ver suas reservas.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/hospede/reservas`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const responseText = await response.text();
      if (!response.ok) {
        let errData = { error: `Erro HTTP ${response.status}` };
        try {
          errData = JSON.parse(responseText);
        } catch (e) {}
        throw new Error(
          errData.error || "Erro ao buscar suas reservas ativas."
        );
      }
      const data = JSON.parse(responseText);
      if (Array.isArray(data)) setReservas(data);
      else {
        setReservas([]);
        console.warn("MinhasReservas: Dados de reservas não são array:", data);
      }
    } catch (err) {
      console.error("MinhasReservas: Falha ao buscar reservas:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    fetchReservas();
  }, [fetchReservas]);

  const handleCancelarReservaPeloHospede = async (reservaId) => {
    if (!window.confirm("Tem certeza que deseja cancelar esta reserva?"))
      return;
    if (!token) {
      alert("Erro de autenticação.");
      return;
    }

    setOperationLoading(reservaId);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/reservas/${reservaId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "CANCELADA_PELO_HOSPEDE" }),
        }
      );
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || `Falha ao cancelar a reserva.`);
      alert(`Reserva cancelada com sucesso!`);
      fetchReservas();
    } catch (err) {
      alert(`Erro: ${err.message}`);
      setError(`Erro ao cancelar reserva ${reservaId}: ${err.message}`);
    } finally {
      setOperationLoading(null);
    }
  };

  const formatarData = (dataISO) =>
    new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });

  if (loading)
    return <p className={styles.loading}>Carregando suas reservas...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <>
      {reservas.length === 0 && !loading ? (
        <p>Você não possui reservas ativas (pendentes ou confirmadas).</p>
      ) : (
        <ul className={styles.reservasList}>
          {reservas.map((reserva) => {
            const isCurrentOperation = operationLoading === reserva.id;
            const podeCancelar =
              reserva.status === "PENDENTE" || reserva.status === "CONFIRMADA";
            return (
              <li
                key={reserva.id}
                className={`${styles.reservaCard} ${
                  styles[
                    "reservaStatus" + reserva.status?.replace(/\s+/g, "")
                  ] || ""
                }`}
              >
                <h4>
                  {reserva.casa?.endereco || "N/A"},{" "}
                  {reserva.casa?.numero || ""}
                </h4>
                <p>
                  <strong>Cidade:</strong> {reserva.casa?.cidade || "N/A"}
                </p>
                <p>
                  <strong>Check-in:</strong> {formatarData(reserva.dataCheckIn)}{" "}
                  | <strong>Check-out:</strong>{" "}
                  {formatarData(reserva.dataCheckOut)}
                </p>
                <p>
                  <strong>Locador:</strong>{" "}
                  {reserva.casa?.locador?.name || "N/A"}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${styles.status} ${
                      styles["status" + reserva.status?.replace(/\s+/g, "")] ||
                      ""
                    }`}
                  >
                    {reserva.status || "N/A"}
                  </span>
                </p>
                <div className={styles.reservaActions}>
                  <button
                    className={styles.actionButtonSecondary}
                    onClick={() => navigate(`/casas/${reserva.casaId}`)}
                    disabled={isCurrentOperation}
                  >
                    Ver Detalhes da Casa
                  </button>
                  {podeCancelar && (
                    <button
                      className={styles.actionButtonDelete}
                      onClick={() =>
                        handleCancelarReservaPeloHospede(reserva.id)
                      }
                      disabled={isCurrentOperation}
                    >
                      {isCurrentOperation
                        ? "Cancelando..."
                        : "Cancelar Reserva"}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default MinhasReservas;
