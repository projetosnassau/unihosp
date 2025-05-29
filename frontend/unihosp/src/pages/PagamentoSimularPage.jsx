import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./PagamentoSimularPage.module.css";

function PagamentoSimularPage() {
  const { reservaId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [reserva, setReserva] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [simulandoPagamento, setSimulandoPagamento] = useState(false);
  const [pagamentoSucesso, setPagamentoSucesso] = useState(false);

  const fetchReservaDetalhes = useCallback(async () => {
    if (!token || !reservaId) {
      setError("Dados da reserva ou autenticação ausentes.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/reservas/${reservaId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errData = await response
          .json()
          .catch(() => ({ error: `Erro HTTP ${response.status}` }));
        throw new Error(
          errData.error || "Falha ao buscar detalhes da reserva."
        );
      }
      const data = await response.json();
      setReserva(data);
    } catch (err) {
      console.error("Erro ao buscar detalhes da reserva:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [reservaId, token]);

  useEffect(() => {
    fetchReservaDetalhes();
  }, [fetchReservaDetalhes]);

  const handleSimularPagamento = async () => {
    setSimulandoPagamento(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch(
        `http://localhost:5000/api/reservas/${reservaId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "CONFIRMADA" }),
        }
      );

      if (!response.ok) {
        const errData = await response
          .json()
          .catch(() => ({ error: "Falha ao atualizar status da reserva." }));
        throw new Error(errData.error);
      }

      setPagamentoSucesso(true);
      setReserva((prev) => ({
        ...prev,
        status: "CONFIRMADA",
        statusPagamento: "PAGO_SIMULADO",
      }));
    } catch (err) {
      console.error("Erro na simulação de pagamento:", err);
      setError(err.message || "Ocorreu um erro ao simular o pagamento.");
      setPagamentoSucesso(false);
    } finally {
      setSimulandoPagamento(false);
    }
  };

  const formatarData = (dataISO) => {
    if (!dataISO) return "N/A";
    return new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Carregando detalhes da reserva...</p>
      </div>
    );
  }

  if (error && !reserva) {
    return (
      <div className={styles.errorContainer}>
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (!reserva) {
    return (
      <div className={styles.errorContainer}>
        <p>Reserva não encontrada ou dados insuficientes.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.paymentCard}>
        <h1 className={styles.title}>Simulação de Pagamento</h1>

        {pagamentoSucesso ? (
          <div className={styles.successMessage}>
            <h2>Pagamento Simulado com Sucesso!</h2>
            <p>Sua reserva para "{reserva.casa?.endereco}" foi confirmada.</p>
            <p>Você será redirecionado para suas reservas em breve.</p>
            <button
              onClick={() =>
                navigate("/hospede/dashboard", { state: { view: "ativas" } })
              }
              className={styles.actionButton}
            >
              Ver Minhas Reservas
            </button>
          </div>
        ) : (
          <>
            <div className={styles.reservaInfo}>
              <h2>Detalhes da Reserva</h2>
              <p>
                <strong>Propriedade:</strong> {reserva.casa?.endereco},{" "}
                {reserva.casa?.numero} - {reserva.casa?.cidade}
              </p>
              <p>
                <strong>Check-in:</strong> {formatarData(reserva.dataCheckIn)}
              </p>
              <p>
                <strong>Check-out:</strong> {formatarData(reserva.dataCheckOut)}
              </p>
              <p>
                <strong>Hóspedes:</strong> {reserva.numeroHospedes}
              </p>
              <p className={styles.valorTotal}>
                <strong>Valor Total:</strong> R${" "}
                {parseFloat(reserva.valorTotalCalculado || 0)
                  .toFixed(2)
                  .replace(".", ",")}
              </p>
              {reserva.status && (
                <p>
                  <strong>Status Atual:</strong>{" "}
                  <span
                    className={`${styles.status} ${
                      styles["status" + reserva.status.replace(/\s+/g, "")]
                    }`}
                  >
                    {reserva.status}
                  </span>
                </p>
              )}
              {reserva.statusPagamento && (
                <p>
                  <strong>Status Pagamento:</strong>{" "}
                  <span
                    className={`${styles.status} ${
                      styles[
                        "status" + reserva.statusPagamento.replace(/\s+/g, "")
                      ]
                    }`}
                  >
                    {reserva.statusPagamento}
                  </span>
                </p>
              )}
            </div>

            {error && <p className={styles.errorMessageGlobal}>{error}</p>}

            <div className={styles.paymentActions}>
              <p>Esta é uma simulação. Nenhum valor real será cobrado.</p>
              <button
                onClick={handleSimularPagamento}
                disabled={simulandoPagamento || reserva.status === "CONFIRMADA"}
                className={styles.actionButton}
              >
                {simulandoPagamento
                  ? "Processando Simulação..."
                  : reserva.status === "CONFIRMADA"
                  ? "Pagamento Confirmado"
                  : "Simular Pagamento Agora"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PagamentoSimularPage;
