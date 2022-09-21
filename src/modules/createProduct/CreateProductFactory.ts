import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { ProductsRepositoryLocal } from "../../repositories/local/ProductsRepositoryLocal";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

export const createProductFactory = () => {
  const productsRepositoryInMemory = new ProductsRepositoryInMemory();
  const productsRepositoryLocal = new ProductsRepositoryLocal();

  const createProduct = new CreateProductService(productsRepositoryLocal);
  const createProductController = new CreateProductController(createProduct);
  return createProductController;
};
