-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "nick" TEXT,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
