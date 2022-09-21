class Product {
  id?: string;
  name: string;
  description: string;
  sku: string;

  private constructor({ name, description, sku }: Product) {
    return Object.assign(this, { name, description, sku });
  }

  static create({ name, description, sku }: Product) {
    const product = new Product({ name, description, sku });
    return product;
  }
}

export { Product };
