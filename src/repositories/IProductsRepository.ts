import { Product } from "../entities/Product";

interface IProductsRepository {
  create(product: Product): Promise<Product>;
  exists(sku: string): Promise<boolean>;
}

export { IProductsRepository };
