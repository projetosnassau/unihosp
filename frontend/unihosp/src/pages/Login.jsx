import { useState } from "react";
import api from "../services/api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("admin"); // admin, locador ou hospede

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        tipo === "admin"
          ? "/login/admin"
          : tipo === "locador"
          ? "/locador/login"
          : "/login/hospede";
      const res = await api.post(endpoint, { email, senha });
      localStorage.setItem("token", res.data.token); // já salva o token
      localStorage.setItem("tipo", tipo);
      alert("Login realizado!");
      onLogin(tipo); // chama função para redirecionar
    } catch (err) {
      alert("Erro no login");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="locador">Locador</option>
        <option value="hospede">Hóspede</option>
      </select>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        type="password"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
