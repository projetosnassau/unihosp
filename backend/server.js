import express from "express";
import cors from "cors";
import locadorRoutes from "./src/routes/locadorRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import hospedeRoutes from "./src/routes/hospedeRoutes.js";
import casaRoutes from "./src/routes/casaRoutes.js";
import reservaRoutes from "./src/routes/reservaRoutes.js";
import favoritoRoutes from "./src/routes/favoritoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", locadorRoutes);
app.use("/api", adminRoutes);
app.use("/api", hospedeRoutes);
app.use("/api", casaRoutes);
app.use("/api", reservaRoutes);
app.use("/api", favoritoRoutes);

app.get("/", (req, res) => {
  console.log("BACKEND SERVER.JS LOG: Rota / foi acessada"); // LOG AQUI
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Servidor iniciou na porta 5000");
});
