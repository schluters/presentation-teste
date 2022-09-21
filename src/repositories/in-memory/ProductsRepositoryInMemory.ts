import { v4 as uuid } from "uuid";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<Product> {
    Object.assign(product, {
      id: uuid(),
    });
    this.products.push(product);
    // console.log("ALL PRODUCTS: ", this.products);
    return product;
  }

  async exists(sku: string): Promise<boolean> {
    const product = this.products.some((product) => product.sku === sku);
    return product;
  }
}

export { ProductsRepositoryInMemory };
