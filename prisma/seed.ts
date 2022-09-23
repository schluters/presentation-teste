import { Prisma, PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config(); // Load the environment variables
console.log(`The connection URL is ${process.env.DATABASE_URL}`);

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    name: "Fake Product",
    description: "Fake Description Product",
    sku: "FAKE_SKU",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const item of productData) {
    const product = await prisma.product.create({
      data: item,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
