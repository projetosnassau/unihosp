-- AlterTable
ALTER TABLE "casas" ADD COLUMN "precoPorNoite" REAL;

-- AlterTable
ALTER TABLE "reservas" ADD COLUMN "statusPagamento" TEXT;
ALTER TABLE "reservas" ADD COLUMN "valorTotalCalculado" REAL;
