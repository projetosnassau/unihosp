import React, { useState } from "react";
import styles from "./ReservaModal.module.css";
import { useAuth } from "../context/AuthContext";

function ReservaModal({
  isOpen,
  onClose,
  casaId,
  casaEndereco,
  onReservaSucesso,
}) {
  const { token } = useAuth();
  const [dataCheckIn, setDataCheckIn] = useState("");
  const [dataCheckOut, setDataCheckOut] = useState("");
  const [numeroHospedes, setNumeroHospedes] = useState(1);
  const [observacoes, setObservacoes] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmitReserva = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!dataCheckIn || !dataCheckOut) {
      setError("Datas de check-in e check-out são obrigatórias.");
      setIsLoading(false);
      return;
    }
    if (new Date(dataCheckOut) <= new Date(dataCheckIn)) {
      setError("Data de check-out deve ser posterior à data de check-in.");
      setIsLoading(false);
      return;
    }
    if (new Date(dataCheckIn) < new Date().setHours(0, 0, 0, 0)) {
      setError("Data de check-in não pode ser no passado.");
      setIsLoading(false);
      return;
    }
    if (parseInt(numeroHospedes, 10) < 1) {
      setError("Número de hóspedes deve ser pelo menos 1.");
      setIsLoading(false);
      return;
    }

    const payload = {
      casaId: parseInt(casaId),
      dataCheckIn,
      dataCheckOut,
      numeroHospedes: parseInt(numeroHospedes, 10),
      observacoes,
    };
    console.log("ReservaModal: Enviando payload para /api/reservas:", payload);

    try {
      const response = await fetch("http://localhost:5000/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log(
        `ReservaModal: handleSubmit - Status: ${response.status}, Resposta Bruta: ${responseText}`
      );
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseErr) {
        if (!response.ok)
          throw new Error(responseText || `Erro ${response.status}`);
        result = { message: "Operação enviada, resposta não JSON." };
      }

      if (!response.ok) {
        throw new Error(result.error || "Falha ao criar reserva.");
      }

      alert(
        "Reserva solicitada com sucesso! Aguarde a confirmação do locador."
      );
      if (onReservaSucesso) onReservaSucesso(result);
      onClose();
    } catch (err) {
      console.error("ReservaModal: Erro ao criar reserva:", err);
      setError(err.message || "Não foi possível solicitar a reserva.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h3>Solicitar Reserva para:</h3>
        <p className={styles.casaEnderecoReserva}>{casaEndereco}</p>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmitReserva} className={styles.reservaForm}>
          <div className={styles.formGroup}>
            <label htmlFor="dataCheckIn">Data de Check-in:</label>
            <input
              type="date"
              id="dataCheckIn"
              value={dataCheckIn}
              onChange={(e) => setDataCheckIn(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dataCheckOut">Data de Check-out:</label>
            <input
              type="date"
              id="dataCheckOut"
              value={dataCheckOut}
              onChange={(e) => setDataCheckOut(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="numeroHospedes">Número de Hóspedes:</label>
            <input
              type="number"
              id="numeroHospedes"
              value={numeroHospedes}
              min="1"
              onChange={(e) => setNumeroHospedes(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="observacoes">Observações (opcional):</label>
            <textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              rows="3"
              disabled={isLoading}
            ></textarea>
          </div>
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButtonModal}
              onClick={onClose}
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.confirmButtonModal}
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Confirmar Solicitação"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservaModal;
