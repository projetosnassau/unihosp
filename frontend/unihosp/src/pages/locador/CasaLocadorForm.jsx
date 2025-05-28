import React, { useState, useEffect } from "react";
import formStyles from "../../pages/AdminPage.module.css";
import styles from "../LocadorDashboard.module.css";

const HomeIcon = () => <span className={formStyles.icon}>&#127968;</span>;
const NumberIcon = () => <span className={formStyles.icon}>#</span>;
const CepIcon = () => <span className={formStyles.icon}>&#128230;</span>;
const CityIcon = () => <span className={formStyles.icon}>&#127961;</span>;
const StateIcon = () => (
  <span className={formStyles.icon}>&#127463;&#127479;</span>
);
const RulesIcon = () => <span className={formStyles.icon}>&#128220;</span>;

function CasaLocadorForm({
  casaAtual,
  onSave,
  onCancel,
  isLoading,
  locadorId,
}) {
  const [formData, setFormData] = useState({
    endereco: "",
    numero: "",
    cep: "",
    cidade: "",
    estado: "",
    diretrizes: "",
    complemento: "",
    locadorId: locadorId || "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (casaAtual) {
      setFormData({
        endereco: casaAtual.endereco || "",
        numero: casaAtual.numero?.toString() || "",
        cep: casaAtual.cep || "",
        cidade: casaAtual.cidade || "",
        estado: casaAtual.estado || "",
        diretrizes: casaAtual.diretrizes || "",
        complemento: casaAtual.complemento || "",
        locadorId: casaAtual.locadorId?.toString() || locadorId.toString(),
      });
    } else {
      setFormData({
        endereco: "",
        numero: "",
        cep: "",
        cidade: "",
        estado: "",
        diretrizes: "",
        complemento: "",
        locadorId: locadorId.toString(),
      });
    }
  }, [casaAtual, locadorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    if (!formData.endereco || !formData.numero || !formData.diretrizes) {
      setFormError("Endereço, Número e Diretrizes são obrigatórios.");
      return;
    }
    const payload = {
      ...formData,
      numero: parseInt(formData.numero, 10),
      locadorId: parseInt(formData.locadorId, 10),
    };
    if (!payload.complemento) delete payload.complemento;
    if (!payload.cep) delete payload.cep;
    if (!payload.cidade) delete payload.cidade;
    if (!payload.estado) delete payload.estado;

    if (isNaN(payload.numero) || isNaN(payload.locadorId)) {
      setFormError("Número e ID do Locador devem ser válidos.");
      return;
    }
    onSave(payload, casaAtual?.id);
  };

  return (
    <div className={formStyles.formOverlay}>
      <div
        className={formStyles.formContainerModal}
        style={{ maxWidth: "700px" }}
      >
        <h3>{casaAtual ? "Editar Minha Casa" : "Adicionar Nova Casa"}</h3>
        {formError && <p className={formStyles.errorMessage}>{formError}</p>}
        <form onSubmit={handleSubmit}>
          <div className={formStyles.formGrid}>
            <div
              className={formStyles.inputGroupAdmin}
              style={{ gridColumn: "span 2" }}
            >
              <HomeIcon />
              <input
                className={formStyles.formInput}
                type="text"
                name="endereco"
                placeholder="Endereço (Rua, Av.)"
                value={formData.endereco}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className={formStyles.inputGroupAdmin}>
              <NumberIcon />
              <input
                className={formStyles.formInput}
                type="number"
                name="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                required
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>
            <div
              className={formStyles.inputGroupAdmin}
              style={{ gridColumn: "span 2" }}
            >
              <input
                className={formStyles.formInput}
                type="text"
                name="complemento"
                placeholder="Complemento (Opcional)"
                value={formData.complemento}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div
              className={formStyles.inputGroupAdmin}
              style={{ gridColumn: "span 2" }}
            >
              <RulesIcon />
              <textarea
                className={formStyles.formTextarea}
                name="diretrizes"
                placeholder="Diretrizes da casa"
                value={formData.diretrizes}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <input type="hidden" name="locadorId" value={formData.locadorId} />
          </div>
          <div className={formStyles.formActions}>
            <button
              type="submit"
              className={formStyles.actionButton}
              disabled={isLoading}
            >
              {isLoading ? "Salvando..." : "Salvar Casa"}
            </button>
            <button
              type="button"
              className={formStyles.cancelButton}
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CasaLocadorForm;
