-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_casas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "diretrizes" TEXT NOT NULL,
    "complemento" TEXT,
    "locadorId" INTEGER NOT NULL,
    CONSTRAINT "casas_locadorId_fkey" FOREIGN KEY ("locadorId") REFERENCES "locadores" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_casas" ("cep", "cidade", "complemento", "diretrizes", "endereco", "estado", "id", "locadorId", "numero") SELECT "cep", "cidade", "complemento", "diretrizes", "endereco", "estado", "id", "locadorId", "numero" FROM "casas";
DROP TABLE "casas";
ALTER TABLE "new_casas" RENAME TO "casas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
