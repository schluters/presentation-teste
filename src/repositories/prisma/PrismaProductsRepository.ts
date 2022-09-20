import { prisma } from "../../database/client";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class PrismaProductsRepository implements IProductsRepository {
  async exists(sku: string): Promise<boolean> {
    const product = await prisma.products.findUnique({
      where: {
        sku,
      },
    });

    return !!product;
  }

  async create({ name, description, sku }: Product): Promise<Product> {
    const product = await prisma.products.create({
      data: {
        name,
        description,
        sku,
      },
    });

    return product;
  }
}

export { PrismaProductsRepository };
