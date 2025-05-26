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
        throw new Error(errData.error || "Erro ao buscar suas reservas.");
      }
      const data = JSON.parse(responseText);
      if (Array.isArray(data)) {
        setReservas(data);
      } else {
        setReservas([]);
        throw new Error("Formato de dados de reservas inesperado.");
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

  const handleCancelarReserva = async (reservaId) => {
    if (
      !window.confirm(
        "Tem certeza que deseja solicitar o cancelamento desta reserva?"
      )
    )
      return;
    if (!token) {
      alert("Erro de autenticação.");
      return;
    }
    // Para cancelar, o backend pode ter uma rota PUT específica para mudar o status
    // Ex: PUT /api/reservas/:reservaId/status com body { status: "CANCELADA_PELO_HOSPEDE" }
    // Ou uma rota DELETE se o cancelamento for uma exclusão.
    // Vamos simular uma mudança de status para "CANCELADA_PELO_HOSPEDE"
    console.log(`Tentando cancelar reserva ID: ${reservaId} (simulação)`);
    try {
      // A rota PUT /api/reservas/:reservaId/status que criamos espera "admin" ou "locador"
      // Para o hóspede cancelar, precisaríamos de uma rota específica ou ajuste na permissão.
      // Por agora, vamos apenas dar um alerta e atualizar a UI localmente (simulação).
      // NO FUTURO: Chamar a API real aqui.
      // Ex:
      // const response = await fetch(`http://localhost:5000/api/reservas/${reservaId}/cancelar`, {
      //   method: 'PUT', // ou POST, dependendo da sua API
      //   headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: "CANCELADA_PELO_HOSPEDE" }) // Exemplo
      // });
      // if (!response.ok) throw new Error("Falha ao cancelar reserva.");
      // alert("Reserva cancelada com sucesso!");
      // fetchReservas(); // Re-busca para atualizar a lista

      setReservas((prevReservas) =>
        prevReservas.map((r) =>
          r.id === reservaId ? { ...r, status: "CANCELADA_PELO_HOSPEDE" } : r
        )
      );
      alert(
        `Solicitação de cancelamento para reserva ID ${reservaId} enviada (simulação).`
      );
    } catch (err) {
      alert(`Erro ao tentar cancelar reserva: ${err.message}`);
    }
  };

  const formatarData = (dataISO) => {
    if (!dataISO) return "N/A";
    return new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  if (loading)
    return <p className={styles.loading}>Carregando suas reservas...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reservasContainer}>
      {reservas.length === 0 ? (
        <p>Você ainda não possui reservas.</p>
      ) : (
        <ul className={styles.reservasList}>
          {reservas.map((reserva) => (
            <li
              key={reserva.id}
              className={`${styles.reservaCard} ${
                styles["reservaStatus" + reserva.status?.replace(/\s+/g, "")]
              }`}
            >
              <h4>
                {reserva.casa?.endereco || "Endereço não disponível"},{" "}
                {reserva.casa?.numero || ""}
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
                    styles["status" + reserva.status?.replace(/\s+/g, "")]
                  }`}
                >
                  {reserva.status || "N/A"}
                </span>
              </p>
              <div className={styles.reservaActions}>
                <button
                  className={styles.actionButtonSecondary}
                  onClick={() => navigate(`/casas/${reserva.casaId}`)} // Assumindo uma rota de detalhes da casa
                >
                  Ver Detalhes da Casa
                </button>
                {(reserva.status === "PENDENTE" ||
                  reserva.status === "CONFIRMADA") && ( // Exemplo de condição para cancelar
                  <button
                    className={styles.actionButtonDelete}
                    onClick={() => handleCancelarReserva(reserva.id)}
                  >
                    Cancelar Reserva
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MinhasReservas;
