/*
  Warnings:

  - A unique constraint covering the columns `[companyId,name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."roles_name_key";

-- AlterTable
ALTER TABLE "public"."roles" ADD COLUMN     "companyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "legalName" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "gstNumber" TEXT,
    "panNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "pincode" TEXT,
    "logo" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_users" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "company_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_gstNumber_key" ON "public"."companies"("gstNumber");

-- CreateIndex
CREATE UNIQUE INDEX "company_users_companyId_userId_key" ON "public"."company_users"("companyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "roles_companyId_name_key" ON "public"."roles"("companyId", "name");

-- AddForeignKey
ALTER TABLE "public"."company_users" ADD CONSTRAINT "company_users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_users" ADD CONSTRAINT "company_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_users" ADD CONSTRAINT "company_users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
