import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token") || null,
    userType: localStorage.getItem("userType") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  });
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      const userType = localStorage.getItem("userType");
      setAuthState({
        token: token,
        userType: userType,
        isAuthenticated: !!token,
      });
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const loginAction = async (email, senha, loginUserType) => {
    setAuthLoading(true);
    let loginEndpoint = "";
    switch (loginUserType) {
      case "hospede":
        loginEndpoint = "http://localhost:4000/api/login/hospede";
        break;
      case "locador":
        loginEndpoint = "http://localhost:4000/api/locador/login";
        break;
      case "admin":
        loginEndpoint = "http://localhost:4000/api/login/admin";
        break;
      default:
        setAuthLoading(false);
        throw new Error("Tipo de usuário inválido para login.");
    }

    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha no login.");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", loginUserType);

        setAuthState({
          token: data.token,
          userType: loginUserType,
          isAuthenticated: true,
        });
        setAuthLoading(false);
        return { success: true, userType: loginUserType };
      } else {
        throw new Error("Token não retornado pelo servidor.");
      }
    } catch (error) {
      console.error("Erro no loginAction:", error);
      setAuthLoading(false);
      throw error;
    }
  };

  const logoutAction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");

    setAuthState({
      token: null,
      userType: null,
      isAuthenticated: false,
    });
  };

  const value = {
    ...authState,
    authLoading,
    loginAction,
    logoutAction,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
