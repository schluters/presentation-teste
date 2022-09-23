import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { ProductsRepositoryLocal } from "../../repositories/local/ProductsRepositoryLocal";
import { PrismaProductsRepository } from "../../repositories/prisma/PrismaProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

export const createProductFactory = () => {
  const productsRepositoryInMemory = new ProductsRepositoryInMemory();
  const productsRepositoryLocal = new ProductsRepositoryLocal();
  const prismaProductsRepository = new PrismaProductsRepository();

  const createProduct = new CreateProductService(prismaProductsRepository);
  const createProductController = new CreateProductController(createProduct);
  return createProductController;
};
