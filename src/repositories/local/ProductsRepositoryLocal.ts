import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryLocal implements IProductsRepository {
  private products: Product[] = [];

  constructor() {
    const rawData = fs.readFileSync(
      path.join(__dirname, "../../database", "products.json"),
      "utf-8"
    );
    const products: Product[] = JSON.parse(rawData);
    this.products = products;
  }

  async create(product: Product): Promise<Product> {
    Object.assign(product, {
      id: uuid(),
    });
    this.products.push(product);
    const dataStr = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(
      path.join(__dirname, "../../database", "products.json"),
      dataStr
    );

    // console.log("ALL PRODUCTS: ", this.products);
    return product;
  }

  async exists(sku: string): Promise<boolean> {
    const rawData = fs.readFileSync(
      path.join(__dirname, "../../database", "products.json"),
      "utf-8"
    );
    const products: Product[] = JSON.parse(rawData);
    const product = products.some((product) => product.sku === sku);
    return product;
  }
}

export { ProductsRepositoryLocal };
