import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { PrismaProductsRepository } from "../../repositories/prisma/PrismaProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

export const createProductFactory = () => {
  const productsRepository = new PrismaProductsRepository();
  const productsRepositoryInMemory = new ProductsRepositoryInMemory();
  const createProduct = new CreateProductService(productsRepository);
  const createProductController = new CreateProductController(createProduct);
  return createProductController;
};
