import express from 'express';
import { PrismaClient } from "../../generated/prisma/index.js"; 

const router = express.Router()

const prisma = new PrismaClient()