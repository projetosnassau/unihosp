/*
  Warnings:

  - You are about to drop the `Casa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Host` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Morador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Casa";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Host";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Morador";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "casas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "diretrizes" TEXT NOT NULL,
    "complemento" TEXT,
    "locadorId" INTEGER NOT NULL,
    CONSTRAINT "casas_locadorId_fkey" FOREIGN KEY ("locadorId") REFERENCES "locadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "locadores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT
);

-- CreateTable
CREATE TABLE "Hospede" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "matricula" TEXT NOT NULL,
    "universidade" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "locadores_email_key" ON "locadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "locadores_cpf_key" ON "locadores"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Hospede_email_key" ON "Hospede"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hospede_cpf_key" ON "Hospede"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Hospede_matricula_key" ON "Hospede"("matricula");
