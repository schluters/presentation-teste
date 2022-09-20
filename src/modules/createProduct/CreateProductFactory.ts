import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

export const createProductFactory = () => {
  const productsRepositoryInMemory = new ProductsRepositoryInMemory();
  const createProduct = new CreateProductService(productsRepositoryInMemory);
  const createProductController = new CreateProductController(createProduct);
  return createProductController;
};
