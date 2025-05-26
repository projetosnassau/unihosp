import React, { useState, useEffect, useCallback } from "react";
import styles from "./BuscarCasasPage.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReservaModal from "../../utils/ReservaModal";

function CasaCard({
  casa,
  onFavoritar,
  onAbrirModalReserva,
  isFavorito,
  isHospedeLogado,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.casaCard}>
      <div className={styles.casaImagePlaceholder}>
        <img
          src={`https://placehold.co/300x180/A8D5E2/333?text=${encodeURIComponent(
            casa.endereco.substring(0, 15)
          )}`}
          alt={`Foto da casa ${casa.endereco}`}
        />
      </div>
      <div className={styles.casaInfo}>
        <h3>
          {casa.endereco}, {casa.numero}
        </h3>
        <p className={styles.cidadeEstado}>
          {casa.cidade}
          {casa.estado ? `, ${casa.estado}` : ""}{" "}
          {casa.cep ? `- CEP: ${casa.cep}` : ""}
        </p>
        <p className={styles.diretrizes}>
          <strong>Diretrizes:</strong> {casa.diretrizes.substring(0, 100)}
          {casa.diretrizes.length > 100 ? "..." : ""}
        </p>
        {casa.complemento && (
          <p>
            <strong>Complemento:</strong> {casa.complemento}
          </p>
        )}
        {casa.locador && (
          <p className={styles.locadorInfo}>
            <strong>Locador:</strong> {casa.locador.name}
          </p>
        )}
        <div className={styles.casaActions}>
          <button
            className={styles.detailsButton}
            onClick={() =>
              alert(
                `Navegar para detalhes da casa ID: ${casa.id} (implementar rota)`
              )
            }
          >
            Ver Detalhes
          </button>
          {isHospedeLogado && (
            <>
              <button
                className={`${styles.actionButton} ${
                  isFavorito ? styles.favoritedButton : styles.favoriteButton
                }`}
                onClick={() => onFavoritar(casa.id, isFavorito)}
                title={
                  isFavorito
                    ? "Remover dos Favoritos"
                    : "Adicionar aos Favoritos"
                }
              >
                {isFavorito ? "❤️ Favorito" : "🤍 Favoritar"}
              </button>
              <button
                className={styles.actionButton}
                onClick={() => onAbrirModalReserva(casa)}
              >
                Reservar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function BuscarCasasPage() {
  const { token, userId, userType, isAuthenticated } = useAuth();
  const [casas, setCasas] = useState([]);
  const [favoritosHospede, setFavoritosHospede] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCidade, setFilterCidade] = useState("");

  const [isReservaModalOpen, setIsReservaModalOpen] = useState(false);
  const [selectedCasaParaReserva, setSelectedCasaParaReserva] = useState(null);

  const isHospedeLogado = isAuthenticated && userType === "hospede";

  const fetchCasasEFavoritos = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const promessas = [
        fetch("http://localhost:5000/api/casa").then((res) => res.json()),
      ];
      if (isHospedeLogado && token) {
        promessas.push(
          fetch("http://localhost:5000/api/hospede/favoritos", {
            headers: { Authorization: `Bearer ${token}` },
          }).then((res) => res.json())
        );
      } else {
        promessas.push(Promise.resolve([]));
      }
      const [casasData, favoritosData] = await Promise.all(promessas);
      if (Array.isArray(casasData)) setCasas(casasData);
      else {
        setCasas([]);
        console.error("Dados de casas não são array:", casasData);
      }
      if (Array.isArray(favoritosData))
        setFavoritosHospede(favoritosData.map((fav) => fav.casaId));
      else {
        setFavoritosHospede([]);
        console.error("Dados de favoritos não são array:", favoritosData);
      }
    } catch (err) {
      console.error(
        "BuscarCasasPage: Falha ao buscar casas ou favoritos:",
        err
      );
      setError(err.message || "Erro ao carregar dados.");
    } finally {
      setLoading(false);
    }
  }, [token, isHospedeLogado]);

  useEffect(() => {
    fetchCasasEFavoritos();
  }, [fetchCasasEFavoritos]);

  const handleFavoritar = async (casaId, jaEFavorito) => {
    if (!isHospedeLogado || !token) {
      alert("Você precisa estar logado como hóspede para favoritar casas.");
      return;
    }
    const method = jaEFavorito ? "DELETE" : "POST";
    const url = jaEFavorito
      ? `http://localhost:5000/api/favoritos/${casaId}`
      : `http://localhost:5000/api/favoritos`;
    const body = !jaEFavorito
      ? JSON.stringify({ casaId: parseInt(casaId) })
      : null;
    const headers = { Authorization: `Bearer ${token}` };
    if (body) headers["Content-Type"] = "application/json";
    try {
      const response = await fetch(url, { method, headers, body });
      const responseText = await response.text();
      if (!response.ok) {
        let errData = { error: `Erro HTTP ${response.status}` };
        try {
          errData = JSON.parse(responseText);
        } catch (e) {}
        throw new Error(
          errData.error ||
            `Falha ao ${jaEFavorito ? "desfavoritar" : "favoritar"} casa.`
        );
      }
      fetchCasasEFavoritos();
    } catch (err) {
      console.error("Erro ao favoritar/desfavoritar:", err);
      alert(`Erro: ${err.message}`);
    }
  };

  const handleAbrirModalReserva = (casa) => {
    if (!isHospedeLogado) {
      alert("Você precisa estar logado como hóspede para fazer uma reserva.");
      return;
    }
    setSelectedCasaParaReserva(casa);
    setIsReservaModalOpen(true);
  };

  const handleCloseReservaModal = () => {
    setIsReservaModalOpen(false);
    setSelectedCasaParaReserva(null);
  };

  const handleReservaSucesso = (novaReserva) => {
    console.log("Reserva criada com sucesso no BuscarCasasPage:", novaReserva);
  };

  const cidadesUnicas = [
    ...new Set(casas.map((casa) => casa.cidade).filter(Boolean)),
  ].sort();
  const filteredCasas = casas.filter((casa) => {
    const searchLower = searchTerm.toLowerCase();
    const cidadeMatch = filterCidade ? casa.cidade === filterCidade : true;
    const searchTermMatch =
      casa.endereco.toLowerCase().includes(searchLower) ||
      (casa.cidade && casa.cidade.toLowerCase().includes(searchLower)) ||
      (casa.estado && casa.estado.toLowerCase().includes(searchLower)) ||
      (casa.locador && casa.locador.name.toLowerCase().includes(searchLower));
    return cidadeMatch && searchTermMatch;
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <header className={styles.pageHeader}>
          <h1>Encontre Sua Acomodação Ideal</h1>
          <p>Explore as opções disponíveis para universitários.</p>
        </header>
        <div className={styles.filtersContainer}>
          <input
            type="text"
            placeholder="Buscar por endereço, cidade, locador..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className={styles.cityFilter}
            value={filterCidade}
            onChange={(e) => setFilterCidade(e.target.value)}
          >
            <option value="">Todas as Cidades</option>
            {cidadesUnicas.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className={styles.loading}>Carregando acomodações...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && filteredCasas.length === 0 && (
          <p className={styles.noResults}>
            Nenhuma casa encontrada com os filtros atuais.
          </p>
        )}
        {!loading && !error && filteredCasas.length > 0 && (
          <div className={styles.casasList}>
            {filteredCasas.map((casa) => (
              <CasaCard
                key={casa.id}
                casa={casa}
                onFavoritar={handleFavoritar}
                onAbrirModalReserva={handleAbrirModalReserva}
                isFavorito={favoritosHospede.includes(casa.id)}
                isHospedeLogado={isHospedeLogado}
              />
            ))}
          </div>
        )}
      </div>
      {selectedCasaParaReserva && (
        <ReservaModal
          isOpen={isReservaModalOpen}
          onClose={handleCloseReservaModal}
          casaId={selectedCasaParaReserva.id}
          casaEndereco={`${selectedCasaParaReserva.endereco}, ${selectedCasaParaReserva.numero}`}
          onReservaSucesso={handleReservaSucesso}
        />
      )}
    </div>
  );
}

export default BuscarCasasPage;
