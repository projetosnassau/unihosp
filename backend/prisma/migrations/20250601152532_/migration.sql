-- CreateTable
CREATE TABLE "conversas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hospedeId" INTEGER NOT NULL,
    "locadorId" INTEGER NOT NULL,
    "casaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "conversas_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "Hospede" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "conversas_locadorId_fkey" FOREIGN KEY ("locadorId") REFERENCES "locadores" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "conversas_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "casas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mensagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conversaId" INTEGER NOT NULL,
    "remetenteHospedeId" INTEGER,
    "remetenteLocadorId" INTEGER,
    CONSTRAINT "mensagens_conversaId_fkey" FOREIGN KEY ("conversaId") REFERENCES "conversas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "mensagens_remetenteHospedeId_fkey" FOREIGN KEY ("remetenteHospedeId") REFERENCES "Hospede" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "mensagens_remetenteLocadorId_fkey" FOREIGN KEY ("remetenteLocadorId") REFERENCES "locadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "conversas_hospedeId_locadorId_casaId_key" ON "conversas"("hospedeId", "locadorId", "casaId");
