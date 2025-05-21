import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import AdminList from "./pages/AdminList";
// Importe aqui as páginas de CRUD de locador, hospede, casa, etc.

function App() {
  const [page, setPage] = useState("login");
  const [tipo, setTipo] = useState(localStorage.getItem("tipo") || "");

  const handleLogin = (tipoUsuario) => {
    setTipo(tipoUsuario);
    if (tipoUsuario === "admin") setPage("adminDashboard");
    else if (tipoUsuario === "locador") setPage("locadorDashboard");
    else setPage("hospedeDashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tipo");
    setTipo("");
    setPage("login");
  };

  return (
    <div>
      <nav>
        {!tipo && <button onClick={() => setPage("login")}>Login</button>}
        {tipo === "admin" && (
          <>
            <button onClick={() => setPage("adminDashboard")}>
              Dashboard Admin
            </button>
            <button onClick={() => setPage("adminlist")}>
              Lista de Admins
            </button>
            {/* Adicione botões para outros CRUDs */}
          </>
        )}
        {/* Adicione navegação para locador/hospede se quiser */}
        {tipo && <button onClick={handleLogout}>Sair</button>}
      </nav>
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "adminDashboard" && (
        <div>Bem-vindo, Admin! Escolha uma opção no menu.</div>
      )}
      {page === "adminlist" && <AdminList />}
      {/* Adicione aqui as páginas de CRUD de locador, hospede, casa, etc. */}
    </div>
  );
}

export default App;
