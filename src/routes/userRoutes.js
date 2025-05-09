import express from 'express';
import { PrismaClient } from "../../generated/prisma/index.js"; 

const router = express.Router()

const prisma = new PrismaClient()


router.get("/users", async(req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        console.error("Erro ao buscar usuários: ", error)
        res.status(500).json({ error: "Erro ao buscar usuários"})
    }
})

router.post("/users", async (req, res) => {
    const { email, name} = req.body;

    if (!email) {
        return res.status(400).json({error: "O campo 'email' é obrigatório."})
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
            }
        })
        res.status(201).json(newUser)
    } catch (error) {
            console.error("Erro ao criar usuário: ", error)
            if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
                return res.status(409).json({error: "Este email já está em uso"})
            }
            res.status(500).json({error: "Erro ao criar usuário"})
    }

})

export default router