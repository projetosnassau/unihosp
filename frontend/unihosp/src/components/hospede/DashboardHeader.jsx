import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./DashboardHeader.module.css";

function DashboardHeader() {
  const { userType, logoutAction } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate("/");
  };

  const getDashboardHomePath = () => {
    if (userType === "hospede") return "/hospede/dashboard";
    if (userType === "locador") return "/locador/dashboard";
    if (userType === "admin") return "/admin";
    return "/";
  };

  return (
    <header className={styles.dashboardHeader}>
      <h1
        onClick={() => navigate(getDashboardHomePath())}
        className={styles.logoTitle}
        title={`Ir para o painel de ${userType || 'usuário'}`}
      >
        UniHosp
        {userType && (
          <span className={styles.userTypeInTitle}>
            {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </span>
        )}
      </h1>
      
      {}
      <nav className={styles.navLinks}>
        {
}
      </nav>

      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </header>
  );
}

export default DashboardHeader;