import express from "express";
import cors from "cors";
import locadorRoutes from "./src/routes/locadorRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import hospedeRoutes from "./src/routes/hospedeRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", locadorRoutes);
app.use("/api", adminRoutes);
app.use("/api", hospedeRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(4000, () => {
  console.log("Servidor iniciou na porta 4000");
});
