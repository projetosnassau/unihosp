import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../LocadorDashboard.module.css";

function LocadorProfileSummary({ onCasasFetched }) {
  const { token, userId } = useAuth();
  const [locadorData, setLocadorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token || !userId) {
      setError("Informações de autenticação não encontradas.");
      setLoading(false);
      return;
    }
    const fetchLocadorDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:5000/api/locador/${userId}`,
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
          throw new Error(errData.error || `Erro ao buscar dados do locador`);
        }
        const data = JSON.parse(responseText);
        setLocadorData(data);
        if (onCasasFetched && data.casas) {
          onCasasFetched(data.casas);
        } else if (onCasasFetched) {
          onCasasFetched([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLocadorDetails();
  }, [token, userId, onCasasFetched]);

  if (loading)
    return <p className={styles.loading}>Carregando perfil do locador...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!locadorData)
    return (
      <p className={styles.error}>
        Não foi possível carregar os dados do perfil.
      </p>
    );

  return (
    <div className={styles.profileSummary}>
      <h2>Olá, {locadorData.name}!</h2>
      <p>Gerencie suas propriedades e reservas.</p>
      <div className={styles.profileDetails}>
        <p>
          <strong>Email:</strong> {locadorData.email}
        </p>
        <p>
          <strong>CPF:</strong> {locadorData.cpf}
        </p>
        <p>
          <strong>Endereço Principal:</strong> {locadorData.endereco}
        </p>
      </div>
    </div>
  );
}
export default LocadorProfileSummary;
