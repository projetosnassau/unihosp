-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mensagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conversaId" INTEGER NOT NULL,
    "remetenteHospedeId" INTEGER,
    "remetenteLocadorId" INTEGER,
    "lidaPeloHospede" BOOLEAN NOT NULL DEFAULT false,
    "lidaPeloLocador" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "mensagens_conversaId_fkey" FOREIGN KEY ("conversaId") REFERENCES "conversas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "mensagens_remetenteHospedeId_fkey" FOREIGN KEY ("remetenteHospedeId") REFERENCES "Hospede" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "mensagens_remetenteLocadorId_fkey" FOREIGN KEY ("remetenteLocadorId") REFERENCES "locadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_mensagens" ("conteudo", "conversaId", "createdAt", "id", "remetenteHospedeId", "remetenteLocadorId") SELECT "conteudo", "conversaId", "createdAt", "id", "remetenteHospedeId", "remetenteLocadorId" FROM "mensagens";
DROP TABLE "mensagens";
ALTER TABLE "new_mensagens" RENAME TO "mensagens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
