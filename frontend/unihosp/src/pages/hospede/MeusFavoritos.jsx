import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../HospedeDashboard.module.css";
import { useNavigate } from "react-router-dom";

function MeusFavoritos() {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFavoritos = useCallback(async () => {
    if (!token || !userId) {
      setError("Autenticação necessária para ver seus favoritos.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/hospede/favoritos`,
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
        throw new Error(errData.error || "Erro ao buscar seus favoritos.");
      }
      const data = JSON.parse(responseText);
      if (Array.isArray(data)) {
        setFavoritos(data);
      } else {
        setFavoritos([]);
        throw new Error("Formato de dados de favoritos inesperado.");
      }
    } catch (err) {
      console.error("MeusFavoritos: Falha ao buscar favoritos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    fetchFavoritos();
  }, [fetchFavoritos]);

  const handleRemoverFavorito = async (casaId) => {
    if (!window.confirm("Remover esta casa dos seus favoritos?")) return;
    if (!token) {
      alert("Erro de autenticação.");
      return;
    }
    console.log(`Tentando remover favorito da casa ID: ${casaId}`);
    try {
      const response = await fetch(
        `http://localhost:5000/api/favoritos/${casaId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const responseText = await response.text();
      console.log(
        `MeusFavoritos: handleRemoverFavorito - Status: ${response.status}, Resposta: ${responseText}`
      );
      if (!response.ok) {
        let errData = { error: `Erro HTTP ${response.status}` };
        try {
          errData = JSON.parse(responseText);
        } catch (e) {}
        throw new Error(errData.error || "Falha ao remover favorito.");
      }
      alert("Casa removida dos favoritos!");
      fetchFavoritos(); // Re-busca para atualizar a lista
    } catch (err) {
      console.error("MeusFavoritos: handleRemoverFavorito - Falha:", err);
      alert(`Erro ao remover favorito: ${err.message}`);
    }
  };

  if (loading)
    return <p className={styles.loading}>Carregando seus favoritos...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.favoritosContainer}>
      {favoritos.length === 0 ? (
        <p>Você ainda não adicionou nenhuma casa aos favoritos.</p>
      ) : (
        <div className={styles.favoritosGrid}>
          {favoritos.map((favorito) => (
            <div key={favorito.id} className={styles.favoritoCard}>
              <img
                src={`https://placehold.co/300x180/A8D5E2/333?text=${encodeURIComponent(
                  favorito.casa?.endereco || "Casa Favorita"
                )}`}
                alt={favorito.casa?.endereco || "Casa Favorita"}
                className={styles.favoritoImagem}
              />
              <div className={styles.favoritoInfo}>
                <h4>
                  {favorito.casa?.endereco || "N/A"},{" "}
                  {favorito.casa?.numero || ""}
                </h4>
                <p>
                  {favorito.casa?.cidade || "N/A"}
                  {favorito.casa?.estado ? `, ${favorito.casa.estado}` : ""}
                </p>
                <div className={styles.favoritoActions}>
                  <button
                    className={styles.actionButtonSmall}
                    onClick={() => navigate(`/casas/${favorito.casaId}`)} // Assumindo rota de detalhes da casa
                  >
                    Ver Detalhes
                  </button>
                  <button
                    className={styles.actionButtonDeleteSmall}
                    onClick={() => handleRemoverFavorito(favorito.casaId)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MeusFavoritos;
