import { prisma } from "../../database/client";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class PrismaProductsRepository implements IProductsRepository {
  async exists(sku: string): Promise<boolean> {
    const product = await prisma.product.findUnique({
      where: {
        sku,
      },
    });
    return !!product;
  }

  async create({ name, description, sku }: Product): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        sku,
      },
    });
    console.log("Create Product", { product });
    return product;
  }
}

export { PrismaProductsRepository };
