/*
  Warnings:

  - The primary key for the `Categoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Categoria` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `categoriaId` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Categoria" DROP CONSTRAINT "Categoria_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "categoriaId",
ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
