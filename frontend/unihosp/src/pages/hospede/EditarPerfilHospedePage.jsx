/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../HospedeDashboard.module.css";
import formStyles from "../../pages/AdminPage.module.css";
import DashboardHeader from "./DashboardHeader";

const UserIcon = () => <span className={formStyles.icon}>&#128100;</span>;
const EmailIcon = () => <span className={formStyles.icon}>&#128231;</span>;
const LockIcon = () => <span className={formStyles.icon}>&#128274;</span>;
const CpfIcon = () => <span className={formStyles.icon}>&#128196;</span>;
const CepIcon = () => <span className={formStyles.icon}>&#128230;</span>;
const CityIcon = () => <span className={formStyles.icon}>&#127961;</span>;
const StateIcon = () => (
  <span className={formStyles.icon}>&#127463;&#127479;</span>
);
const MatriculaIcon = () => <span className={formStyles.icon}>&#127891;</span>;
const UniversityIcon = () => <span className={formStyles.icon}>&#127979;</span>;

function EditarPerfilHospedePage() {
  const { token, userId, userType } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senha: "",
    cpf: "",
    cep: "",
    cidade: "",
    estado: "",
    matricula: "",
    universidade: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchHospedeData = useCallback(async () => {
    if (!token || !userId) {
      setError("Não autenticado.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/hospede/${userId}`,
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
        throw new Error(errData.error || "Erro ao buscar dados do perfil.");
      }
      const data = JSON.parse(responseText);
      setFormData({
        name: data.name || "",
        email: data.email || "",
        senha: "",
        cpf: data.cpf || "",
        cep: data.cep || "",
        cidade: data.cidade || "",
        estado: data.estado || "",
        matricula: data.matricula || "",
        universidade: data.universidade || "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    fetchHospedeData();
  }, [fetchHospedeData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !userId) {
      setError("Não autenticado. Não é possível salvar.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const payload = { ...formData };
    if (!payload.senha) {
      delete payload.senha;
    } else if (payload.senha.length < 6) {
      setError("A nova senha deve ter pelo menos 6 caracteres.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/hospede/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const responseText = await response.text();
      if (!response.ok) {
        let errData = { error: `Erro HTTP ${response.status}` };
        try {
          errData = JSON.parse(responseText);
        } catch (parseErr) {}
        throw new Error(errData.error || "Erro ao atualizar perfil.");
      }
      const result = JSON.parse(responseText);
      setSuccessMessage("Perfil atualizado com sucesso!");
      console.log("Perfil atualizado:", result);
      setFormData((prev) => ({ ...prev, senha: "" }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />
      <div className={styles.dashboardContent}>
        <section className={styles.dashboardSection}>
          <h3>Editar Meu Perfil</h3>
          {loading && (
            <p className={styles.loading}>Carregando dados do perfil...</p>
          )}
          {error && <p className={formStyles.errorMessage}>{error}</p>}
          {successMessage && (
            <p className={formStyles.successMessage}>{successMessage}</p>
          )}
          {!loading && (
            <form
              onSubmit={handleSubmit}
              className={formStyles.profileEditForm}
            >
              {" "}
              {}
              <div className={formStyles.formGrid}>
                {" "}
                {}
                <div className={formStyles.inputGroupAdmin}>
                  <UserIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <EmailIcon />
                  <input
                    className={formStyles.formInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div
                  className={formStyles.inputGroupAdmin}
                  style={{ gridColumn: "span 2" }}
                >
                  <LockIcon />
                  <input
                    className={formStyles.formInput}
                    type="password"
                    name="senha"
                    placeholder="Nova Senha (deixe em branco para não alterar)"
                    value={formData.senha}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <CpfIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <CepIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="cep"
                    placeholder="CEP"
                    value={formData.cep}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <CityIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <StateIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="estado"
                    placeholder="Estado (UF)"
                    value={formData.estado}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <MatriculaIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="matricula"
                    placeholder="Matrícula"
                    value={formData.matricula}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className={formStyles.inputGroupAdmin}>
                  <UniversityIcon />
                  <input
                    className={formStyles.formInput}
                    type="text"
                    name="universidade"
                    placeholder="Universidade"
                    value={formData.universidade}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className={formStyles.formActions}>
                <button
                  type="button"
                  className={formStyles.cancelButton}
                  onClick={() => navigate("/hospede/dashboard")}
                  disabled={loading}
                >
                  Voltar ao Painel
                </button>
                <button
                  type="submit"
                  className={formStyles.actionButton}
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar Alterações"}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default EditarPerfilHospedePage;
