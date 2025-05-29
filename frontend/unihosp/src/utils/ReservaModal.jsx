import React, { useState, useEffect } from "react";
import styles from "./ReservaModal.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ReservaModal({ isOpen, onClose, casa, onReservaSucesso }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [dataCheckIn, setDataCheckIn] = useState("");
  const [dataCheckOut, setDataCheckOut] = useState("");
  const [numeroHospedes, setNumeroHospedes] = useState(1);
  const [observacoes, setObservacoes] = useState("");
  const [valorCalculado, setValorCalculado] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (dataCheckIn && dataCheckOut && casa?.precoPorNoite) {
      const checkIn = new Date(dataCheckIn);
      const checkOut = new Date(dataCheckOut);
      if (checkOut > checkIn) {
        const diffTime = Math.abs(checkOut - checkIn);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setValorCalculado(diffDays * casa.precoPorNoite);
      } else {
        setValorCalculado(0);
      }
    } else {
      setValorCalculado(0);
    }
  }, [dataCheckIn, dataCheckOut, casa?.precoPorNoite]);

  if (!isOpen || !casa) return null;

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
    const checkInDateObj = new Date(dataCheckIn);
    const checkOutDateObj = new Date(dataCheckOut);

    if (checkOutDateObj <= checkInDateObj) {
      setError("Data de check-out deve ser posterior à data de check-in.");
      setIsLoading(false);
      return;
    }
    if (checkInDateObj < new Date(new Date().setHours(0, 0, 0, 0))) {
      // Comparar apenas a data
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
      casaId: casa.id,
      dataCheckIn: checkInDateObj.toISOString(),
      dataCheckOut: checkOutDateObj.toISOString(),
      numeroHospedes: parseInt(numeroHospedes, 10),
      observacoes,
    };

    try {
      const response = await fetch("http://localhost:5000/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Falha ao criar reserva.");
      }

      console.log("Reserva solicitada com sucesso:", result);
      onClose();
      if (onReservaSucesso) onReservaSucesso(result);

      navigate(`/pagamento/simular/${result.id}`);
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
        <p className={styles.casaEnderecoReserva}>
          {casa.endereco}, {casa.numero}
        </p>
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

          {casa.precoPorNoite > 0 && valorCalculado > 0 && (
            <div className={styles.valorTotalInfo}>
              <p>
                Valor Estimado:{" "}
                <strong>
                  R$ {valorCalculado.toFixed(2).replace(".", ",")}
                </strong>
                (
                {Math.ceil(
                  Math.abs(new Date(dataCheckOut) - new Date(dataCheckIn)) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                noites)
              </p>
            </div>
          )}

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
              {isLoading ? "Enviando..." : "Solicitar Reserva"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservaModal;
