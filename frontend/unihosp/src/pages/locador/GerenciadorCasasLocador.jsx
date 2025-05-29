import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../LocadorDashboard.module.css";
import formStyles from "../../pages/AdminPage.module.css";
import CasaLocadorForm from "./CasaLocadorForm";

function GerenciadorCasasLocador() {
  const { token, userId } = useAuth();
  const [minhasCasas, setMinhasCasas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCasa, setEditingCasa] = useState(null);

  const fetchMinhasCasas = useCallback(async () => {
    if (!token || !userId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/locador/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error || "Erro ao buscar dados do locador e suas casas."
        );
      }
      setMinhasCasas(data.casas || []);
    } catch (err) {
      console.error("GerenciadorCasasLocador: Falha ao buscar casas:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, userId]);

  useEffect(() => {
    if (token && userId) {
      fetchMinhasCasas();
    }
  }, [fetchMinhasCasas, token, userId]);

  const handleAddClick = () => {
    setEditingCasa(null);
    setShowForm(true);
    setError("");
  };

  const handleEditClick = (casa) => {
    setEditingCasa(casa);
    setShowForm(true);
    setError("");
  };

  const handleDeleteClick = async (casaId) => {
    if (
      !window.confirm(
        "Tem certeza que deseja deletar esta casa? Todas as reservas associadas (se não tratadas com onDelete: SetNull no schema) também podem ser afetadas."
      )
    )
      return;
    if (!token) {
      alert("Token de autenticação não encontrado.");
      return;
    }

    setLoading(true);
    setError("");
    console.log(`GerenciadorCasasLocador: Tentando deletar casa ID: ${casaId}`);
    try {
      const response = await fetch(`http://localhost:5000/api/casa/${casaId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errData = await response
          .json()
          .catch(() => ({ error: `Erro HTTP ${response.status} ao deletar.` }));
        throw new Error(errData.error || "Falha ao deletar casa.");
      }
      alert("Casa deletada com sucesso!");
      fetchMinhasCasas();
    } catch (err) {
      console.error("GerenciadorCasasLocador: Erro ao deletar casa:", err);
      setError(err.message);
      alert(`Erro ao deletar: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCasa = async (formDataFromForm, casaIdParaEditar) => {
    setLoading(true);
    setError("");
    const method = casaIdParaEditar ? "PUT" : "POST";
    const url = casaIdParaEditar
      ? `http://localhost:5000/api/casa/${casaIdParaEditar}`
      : "http://localhost:5000/api/casa";

    const payload = { ...formDataFromForm, locadorId: parseInt(userId) };
    if (
      casaIdParaEditar &&
      formDataFromForm.locadorId &&
      parseInt(formDataFromForm.locadorId) !== parseInt(userId)
    ) {
      alert("Erro: Tentativa de salvar casa para locador incorreto.");
      setLoading(false);
      return;
    }

    console.log(
      `GerenciadorCasasLocador: Tentando salvar casa. Método: ${method}, URL: ${url}`
    );
    console.log(
      "GerenciadorCasasLocador: Dados enviados para o backend:",
      JSON.stringify(payload)
    );

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        console.error(
          "GerenciadorCasasLocador: Erro ao salvar casa, Status:",
          response.status,
          "Resultado:",
          result
        );
        throw new Error(
          result.error ||
            `Falha ao ${casaIdParaEditar ? "atualizar" : "criar"} casa.`
        );
      }

      console.log("GerenciadorCasasLocador: Casa salva com sucesso:", result);
      alert(`Casa ${casaIdParaEditar ? "atualizada" : "criada"} com sucesso!`);
      setShowForm(false);
      setEditingCasa(null);
      fetchMinhasCasas();
    } catch (err) {
      console.error(
        `GerenciadorCasasLocador: Erro na operação de salvar casa (${method}):`,
        err
      );
      setError(
        `Erro ao salvar casa: ${err.message}. Verifique os dados e tente novamente.`
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading && !showForm && minhasCasas.length === 0)
    return <p className={styles.loading}>Carregando suas casas...</p>;

  return (
    <section className={styles.dashboardSection}>
      <h3>Minhas Casas Cadastradas ({minhasCasas.length})</h3>
      {error && <p className={formStyles.errorMessage}>{error}</p>} {}
      {!showForm && (
        <button
          className={styles.actionButton}
          style={{ marginBottom: "20px" }}
          onClick={handleAddClick}
          disabled={loading}
        >
          Adicionar Nova Casa
        </button>
      )}
      {showForm && (
        <CasaLocadorForm
          casaAtual={editingCasa}
          onSave={handleSaveCasa}
          onCancel={() => {
            setShowForm(false);
            setEditingCasa(null);
            setError("");
          }}
          isLoading={loading}
          locadorId={userId}
        />
      )}
      {!showForm && minhasCasas.length === 0 && !loading ? (
        <p>Você ainda não cadastrou nenhuma casa.</p>
      ) : (
        !showForm &&
        minhasCasas.length > 0 && (
          <table className={formStyles.dataTable}>
            {" "}
            {}
            <thead>
              <tr>
                <th>ID</th>
                <th>Endereço</th>
                <th>Número</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {minhasCasas.map((casa) => (
                <tr key={casa.id}>
                  <td>{casa.id}</td>
                  <td>{casa.endereco}</td>
                  <td>{casa.numero}</td>
                  <td>{casa.cidade || "N/A"}</td>
                  <td>{casa.estado || "N/A"}</td>
                  <td>
                    <button
                      className={formStyles.actionButton}
                      onClick={() => handleEditClick(casa)}
                      disabled={loading}
                    >
                      Editar
                    </button>
                    <button
                      className={formStyles.actionButtonDelete}
                      onClick={() => handleDeleteClick(casa.id)}
                      disabled={loading}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </section>
  );
}

export default GerenciadorCasasLocador;
