import { Product } from "../entities/Product";

interface IProductsRepository {
  create(product: Product): Promise<Product>;
  exists(product: string): Promise<boolean>;
}

export { IProductsRepository };
