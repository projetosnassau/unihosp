import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "../HospedeDashboard.module.css";

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
    return "/";
  };

  return (
    <header className={styles.dashboardHeader}>
      <h1
        onClick={() => navigate(getDashboardHomePath())}
        style={{ cursor: "pointer" }}
      >
        UniHosp{" "}
        {userType && userType.charAt(0).toUpperCase() + userType.slice(1)}
      </h1>
      <nav>{}</nav>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </header>
  );
}

export default DashboardHeader;
