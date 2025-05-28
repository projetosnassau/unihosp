/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
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
        `http://localhost:5000/api/hospede/favoritos`, // Certifique-se que a porta está correta
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
    try {
      const response = await fetch(
        `http://localhost:5000/api/favoritos/${casaId}`, // Certifique-se que a porta está correta
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const responseText = await response.text();
      if (!response.ok) {
        let errData = { error: `Erro HTTP ${response.status}` };
        try {
          errData = JSON.parse(responseText);
        } catch (e) {}
        throw new Error(errData.error || "Falha ao remover favorito.");
      }
      alert("Casa removida dos favoritos!");
      fetchFavoritos();
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
            // Usaremos a classe .casaCard para um visual similar, mas com conteúdo diferente
            <div key={favorito.id} className={styles.casaCard}>
              <div className={styles.casaImagePlaceholder}>
                <img
                  src={`https://placehold.co/300x180/A8D5E2/333?text=${encodeURIComponent(
                    favorito.casa?.endereco?.substring(0, 15) || "Casa Favorita"
                  )}`}
                  alt={favorito.casa?.endereco || "Casa Favorita"}
                  className={styles.favoritoImagem} // Pode usar a mesma classe ou uma nova
                />
              </div>
              <div className={styles.casaInfo}>
                {" "}
                {/* Reutilizando .casaInfo */}
                <h3>
                  {favorito.casa?.endereco || "Endereço Indisponível"},{" "}
                  {favorito.casa?.numero || ""}
                </h3>
                <p className={styles.cidadeEstado}>
                  {favorito.casa?.cidade || "Cidade Indisponível"}
                  {favorito.casa?.estado ? `, ${favorito.casa.estado}` : ""}
                </p>
                {/* Não mostrar check-in/out, locador, status para favoritos */}
                <div className={styles.favoritoActions}>
                  {" "}
                  {/* Usando .favoritoActions */}
                  <button
                    className={styles.detailsButton} // Reutilizando .detailsButton
                    onClick={() =>
                      alert(
                        `Navegar para detalhes da casa ID: ${favorito.casaId}`
                      )
                    }
                    // onClick={() => navigate(`/casas/${favorito.casaId}`)} // Futuramente
                  >
                    Ver Detalhes
                  </button>
                  <button
                    className={styles.actionButtonDeleteSmall} // Botão menor para remover
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
