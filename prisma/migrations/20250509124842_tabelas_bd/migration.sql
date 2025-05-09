/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Casa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "qnt_tot" INTEGER NOT NULL,
    "diretrizes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Host" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Morador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "matricula" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Host_email_key" ON "Host"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Host_cpf_key" ON "Host"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Morador_email_key" ON "Morador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Morador_cpf_key" ON "Morador"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Morador_matricula_key" ON "Morador"("matricula");
