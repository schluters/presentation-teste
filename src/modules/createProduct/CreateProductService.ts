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

    return this.productsRepository.create({ name, description, sku });
  }
}

export { CreateProductService };
