import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPage.module.css";

const GerenciarHospedes = ({ token }) => {
  const [hospedes, setHospedes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError("");
    fetch("http://localhost:4000/api/hospede", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Erro ao buscar hóspedes: ${res.statusText} (${res.status})`
          );
        }
        return res.json();
      })
      .then((data) => {
        setHospedes(data);
      })
      .catch((err) => {
        console.error("Falha ao buscar hóspedes:", err);
        setError(err.message || "Não foi possível carregar os hóspedes.");
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <p>Carregando hóspedes...</p>;
  if (error) return <p className={styles.errorMessage}>{error}</p>;

  return (
    <div className={styles.crudSection}>
      <h3>Hóspedes Cadastrados ({hospedes.length})</h3>
      {hospedes.length === 0 ? (
        <p>Nenhum hóspede encontrado.</p>
      ) : (
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Universidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {hospedes.map((hospede) => (
              <tr key={hospede.id}>
                <td>{hospede.id}</td>
                <td>{hospede.name}</td>
                <td>{hospede.email}</td>
                <td>{hospede.cpf}</td>
                <td>{hospede.universidade}</td>
                <td>
                  <button
                    className={styles.actionButton}
                    onClick={() => alert(`Editar ${hospede.name}`)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.actionButtonDelete}
                    onClick={() => alert(`Deletar ${hospede.name}`)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className={styles.addButton}>Adicionar Novo Hóspede</button>
    </div>
  );
};

const GerenciarLocadores = ({ token }) => (
  <div className={styles.crudSection}>
    <h3>Gerenciar Locadores</h3>
    <p>Conteúdo para gerenciar locadores (CRUD completo a ser implementado).</p>
    <button className={styles.addButton}>Adicionar Novo Locador</button>
  </div>
);
const GerenciarCasas = ({ token }) => (
  <div className={styles.crudSection}>
    <h3>Gerenciar Casas</h3>
    <p>Conteúdo para gerenciar casas (CRUD completo a ser implementado).</p>
    <button className={styles.addButton}>Adicionar Nova Casa</button>
  </div>
);
const GerenciarAdmins = ({ token }) => (
  <div className={styles.crudSection}>
    <h3>Gerenciar Administradores</h3>
    <p>Conteúdo para gerenciar admins (CRUD completo a ser implementado).</p>
    <button className={styles.addButton}>Adicionar Novo Admin</button>
  </div>
);
const VerGraficos = () => (
  <div className={styles.crudSection}>
    <h3>Gráficos e Estatísticas</h3>
    <p>
      Área para visualização de gráficos (a ser implementada com bibliotecas
      como Chart.js, Recharts, etc.).
    </p>
  </div>
);

function AdminPage() {
  const { token, userType, logoutAction } = useAuth();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("hospedes");

  useEffect(() => {
    if (userType !== "admin") {
      navigate("/");
    }
  }, [userType, navigate]);

  const handleLogout = () => {
    logoutAction();
    navigate("/");
  };

  const renderView = () => {
    switch (currentView) {
      case "hospedes":
        return <GerenciarHospedes token={token} />;
      case "locadores":
        return <GerenciarLocadores token={token} />;
      case "casas":
        return <GerenciarCasas token={token} />;
      case "admins":
        return <GerenciarAdmins token={token} />;
      case "graficos":
        return <VerGraficos />;
      default:
        return <GerenciarHospedes token={token} />;
    }
  };

  return (
    <div className={styles.adminPageContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>UniHosp Admin</h2>
        <nav>
          <ul>
            <li
              onClick={() => setCurrentView("hospedes")}
              className={currentView === "hospedes" ? styles.active : ""}
            >
              Gerenciar Hóspedes
            </li>
            <li
              onClick={() => setCurrentView("locadores")}
              className={currentView === "locadores" ? styles.active : ""}
            >
              Gerenciar Locadores
            </li>
            <li
              onClick={() => setCurrentView("casas")}
              className={currentView === "casas" ? styles.active : ""}
            >
              Gerenciar Casas
            </li>
            <li
              onClick={() => setCurrentView("admins")}
              className={currentView === "admins" ? styles.active : ""}
            >
              Gerenciar Admins
            </li>
            <li
              onClick={() => setCurrentView("graficos")}
              className={currentView === "graficos" ? styles.active : ""}
            >
              Ver Gráficos
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.contentHeader}>
          <h1>Painel de Gerenciamento do Sistema</h1>
          <p>Bem-vindo, Administrador!</p>
        </header>
        {renderView()}
      </main>
    </div>
  );
}

export default AdminPage;
