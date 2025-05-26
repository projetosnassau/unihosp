-- CreateTable
CREATE TABLE "reservas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataCheckIn" DATETIME NOT NULL,
    "dataCheckOut" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "numeroHospedes" INTEGER,
    "valorTotal" REAL,
    "observacoes" TEXT,
    "hospedeId" INTEGER NOT NULL,
    "casaId" INTEGER NOT NULL,
    "locadorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "reservas_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "Hospede" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "reservas_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "casas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "reservas_locadorId_fkey" FOREIGN KEY ("locadorId") REFERENCES "locadores" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "favoritos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hospedeId" INTEGER NOT NULL,
    "casaId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "favoritos_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "Hospede" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "favoritos_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "casas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_hospedeId_casaId_key" ON "favoritos"("hospedeId", "casaId");
