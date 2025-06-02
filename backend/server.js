import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import locadorRoutes from "./src/routes/locadorRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import hospedeRoutes from "./src/routes/hospedeRoutes.js";
import casaRoutes from "./src/routes/casaRoutes.js";
import reservaRoutes from "./src/routes/reservaRoutes.js";
import favoritoRoutes from "./src/routes/favoritoRoutes.js";
import conversaRoutes from "./src/routes/conversaRoutes.js";
import avaliacaoRoutes from "./src/routes/avaliacaoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", reservaRoutes);
app.use("/api", favoritoRoutes);
app.use("/api", conversaRoutes);
app.use("/api", avaliacaoRoutes);

app.use("/api", casaRoutes);
app.use("/api", locadorRoutes);
app.use("/api", hospedeRoutes);
app.use("/api", adminRoutes);

app.get("/", (req, res) => {
  console.log("BACKEND SERVER.JS LOG: Rota / foi acessada");
  res.send("Hello World from UniHosp Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor UniHosp iniciou na porta ${PORT}`);
});