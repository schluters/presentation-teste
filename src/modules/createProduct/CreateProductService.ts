import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IProductRequest {
  name: string;
  description: string;
  sku: string;
}

class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({ name, description, sku }: IProductRequest) {
    const productAlreadyExists = await this.productsRepository.exists(sku);

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }
    const productCreate = Product.create({ name, description, sku });
    return this.productsRepository.create(productCreate);
  }
}

export { CreateProductService };
