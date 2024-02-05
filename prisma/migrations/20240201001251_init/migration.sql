-- CreateTable
CREATE TABLE "blogf" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "blogf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogf_title_key" ON "blogf"("title");

-- CreateIndex
CREATE UNIQUE INDEX "blogf_telefono_key" ON "blogf"("telefono");
