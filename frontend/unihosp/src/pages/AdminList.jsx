import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function fetchAdmins() {
      try {
        const res = await api.get("/admin");
        setAdmins(res.data);
      } catch (err) {
        alert("Acesso negado ou erro ao buscar admins");
      }
    }
    fetchAdmins();
  }, []);

  return (
    <ul>
      {admins.map((a) => (
        <li key={a.id}>
          {a.name} - {a.email}
        </li>
      ))}
    </ul>
  );
}
