import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext"; // Ajuste o caminho se necessário
import styles from "../LocadorDashboard.module.css"; // Ajuste o caminho se necessário
import { useNavigate } from "react-router-dom";

function GerenciadorReservasLocador() {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);
  const [loadingReservas, setLoadingReservas] = useState(true);
  const [errorReservas, setErrorReservas] = useState("");
  const [operationLoading, setOperationLoading] = useState(null);
  const [pendingStatusUpdate, setPendingStatusUpdate] = useState(null);

  const fetchReservasLocador = useCallback(async () => {
    if (!token || !userId) {
      setLoadingReservas(false);
      return;
    }
    setLoadingReservas(true);
    setErrorReservas("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/locador/reservas`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar reservas");
      }
      if (Array.isArray(data)) {
        setReservas(data);
      } else {
        setReservas([]);
        console.warn(
          "GerenciadorReservasLocador: Dados de reservas não são um array:",
          data
        );
      }
    } catch (err) {
      console.error(
        "GerenciadorReservasLocador: Falha ao buscar reservas:",
        err
      );
      setErrorReservas(err.message);
    } finally {
      setLoadingReservas(false);
    }
  }, [token, userId]);

  useEffect(() => {
    if (token && userId) {
      fetchReservasLocador();
    }
  }, [fetchReservasLocador, token, userId]);

  const handleAtualizarStatusReserva = async (
    reservaId,
    novoStatus,
    mensagemConfirmacao
  ) => {
    if (!token) {
      alert("Autenticação necessária.");
      return;
    }
    if (mensagemConfirmacao && !window.confirm(mensagemConfirmacao)) return;

    setOperationLoading(reservaId);
    setPendingStatusUpdate(novoStatus.toUpperCase());
    setErrorReservas("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/reservas/${reservaId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: novoStatus.toUpperCase() }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Falha ao atualizar status.");
      }
      alert(
        `Status da reserva atualizado para ${novoStatus.toUpperCase()} com sucesso!`
      );
      fetchReservasLocador();
    } catch (err) {
      alert(`Erro ao atualizar status: ${err.message}`);
      console.error("Erro ao atualizar status da reserva:", err);
      setErrorReservas(
        `Erro ao atualizar reserva ${reservaId}: ${err.message}`
      );
    } finally {
      setOperationLoading(null);
      setPendingStatusUpdate(null);
    }
  };

  const formatarData = (dataISO) => {
    if (!dataISO) return "N/A";
    return new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  if (loadingReservas && reservas.length === 0)
    return <p className={styles.loading}>Carregando reservas...</p>;

  if (errorReservas && reservas.length === 0)
    return <p className={styles.error}>{errorReservas}</p>;

  return (
    <section className={styles.dashboardSection}>
      <h3>Reservas para Suas Casas ({reservas.length})</h3>
      {errorReservas && <p className={styles.error}>{errorReservas}</p>}
      {reservas.length === 0 && !loadingReservas ? (
        <p>Nenhuma reserva encontrada para suas casas no momento.</p>
      ) : (
        <ul className={styles.reservasList}>
          {reservas.map((reserva) => {
            const isCurrentOperation = operationLoading === reserva.id;
            const podeConfirmarRejeitar = reserva.status === "PENDENTE";
            const podeCancelarLocador =
              reserva.status === "PENDENTE" || reserva.status === "CONFIRMADA";

            // ***** LÓGICA ATUALIZADA PARA podeArquivarLocador *****
            const podeArquivarLocador = [
              "CONCLUIDA",
              "CANCELADA_PELO_HOSPEDE", // Agora o locador PODE arquivar se o hóspede já cancelou/arquivou
              "CANCELADA_PELO_LOCADOR",
              "REJEITADA",
              "ARQUIVADA_PELO_HOSPEDE", // Adicionado para permitir que o locador também arquive da sua visão
            ].includes(reserva.status);

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
                  Casa: {reserva.casa?.endereco || "N/A"},{" "}
                  {reserva.casa?.cidade || "N/A"} (ID Casa: {reserva.casaId})
                </h4>
                <p>
                  <strong>Hóspede:</strong> {reserva.hospede?.name || "N/A"} (
                  {reserva.hospede?.email || "N/A"})
                </p>
                <p>
                  <strong>Check-in:</strong> {formatarData(reserva.dataCheckIn)}{" "}
                  | <strong>Check-out:</strong>{" "}
                  {formatarData(reserva.dataCheckOut)}
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
                    onClick={() => {
                      alert(
                        `Redirecionar para detalhes da Casa ID: ${reserva.casaId} (rota a ser criada)`
                      );
                    }}
                    disabled={isCurrentOperation}
                  >
                    Ver Casa
                  </button>

                  {podeConfirmarRejeitar && (
                    <>
                      <button
                        className={styles.actionButtonConfirm}
                        onClick={() =>
                          handleAtualizarStatusReserva(
                            reserva.id,
                            "CONFIRMADA",
                            "Confirmar esta reserva?"
                          )
                        }
                        disabled={isCurrentOperation}
                      >
                        {isCurrentOperation &&
                        pendingStatusUpdate === "CONFIRMADA"
                          ? "Aprovando..."
                          : "Aprovar"}
                      </button>
                      <button
                        className={styles.actionButtonRejeitar}
                        onClick={() =>
                          handleAtualizarStatusReserva(
                            reserva.id,
                            "REJEITADA",
                            "Rejeitar esta reserva?"
                          )
                        }
                        disabled={isCurrentOperation}
                      >
                        {isCurrentOperation &&
                        pendingStatusUpdate === "REJEITADA"
                          ? "Rejeitando..."
                          : "Rejeitar"}
                      </button>
                    </>
                  )}
                  {podeCancelarLocador && (
                    <button
                      className={styles.actionButtonDelete}
                      onClick={() =>
                        handleAtualizarStatusReserva(
                          reserva.id,
                          "CANCELADA_PELO_LOCADOR",
                          "Cancelar esta reserva (como locador)?"
                        )
                      }
                      disabled={isCurrentOperation}
                    >
                      {isCurrentOperation &&
                      pendingStatusUpdate === "CANCELADA_PELO_LOCADOR"
                        ? "Cancelando..."
                        : "Cancelar"}
                    </button>
                  )}
                  {podeArquivarLocador && (
                    <button
                      className={styles.actionButtonArchive}
                      onClick={() =>
                        handleAtualizarStatusReserva(
                          reserva.id,
                          "ARQUIVADA_PELO_LOCADOR",
                          "Arquivar esta reserva? Ela não será mais exibida na sua lista principal."
                        )
                      }
                      disabled={isCurrentOperation}
                    >
                      {isCurrentOperation &&
                      pendingStatusUpdate === "ARQUIVADA_PELO_LOCADOR"
                        ? "Arquivando..."
                        : "Arquivar"}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default GerenciadorReservasLocador;
