import express from "express"
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api", userRoutes)

app.listen(4000, () => {
    console.log("Servidor iniciou na porta 4000")
})
