-- CreateTable
CREATE TABLE "bloqueios_disponibilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "motivo" TEXT,
    "casaId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "bloqueios_disponibilidade_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "casas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
