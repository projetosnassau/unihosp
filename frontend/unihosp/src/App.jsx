import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import HospedeDashboard from "./pages/HospedeDashboard";
import BuscarCasasPage from "./pages/hospede/BuscarCasasPage";
import EditarPerfilHospedePage from "./pages/hospede/EditarPerfilHospedePage";
import LocadorDashboard from "./pages/LocadorDashboard";
import PagamentoSimularPage from "./pages/PagamentoSimularPage";

function ProtectedRoute({ children, allowedTypes }) {
  const { isAuthenticated, userType, authLoading } = useAuth();

  if (authLoading && !isAuthenticated) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        Verificando autenticação...
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (allowedTypes && !allowedTypes.includes(userType)) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {}
        <Route path="/buscar-casas" element={<BuscarCasasPage />} /> {}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedTypes={["admin"]}>
              {" "}
              {}
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospede/dashboard"
          element={
            <ProtectedRoute allowedTypes={["hospede"]}>
              {" "}
              {}
              <HospedeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospede/perfil/editar"
          element={
            <ProtectedRoute allowedTypes={["hospede"]}>
              {" "}
              {}
              <EditarPerfilHospedePage />
            </ProtectedRoute>
          }
        />
        {}
        <Route
          path="/pagamento/simular/:reservaId"
          element={
            <ProtectedRoute allowedTypes={["hospede"]}>
              {" "}
              {}
              <PagamentoSimularPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/locador/dashboard"
          element={
            <ProtectedRoute allowedTypes={["locador"]}>
              {" "}
              {}
              <LocadorDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
