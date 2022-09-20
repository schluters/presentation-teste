import { Product } from "../../entities/Product";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { CreateProductService } from "./CreateProductService";

describe("Create Product", () => {
  let productsRepository: IProductsRepository;
  let createProductService: CreateProductService;

  beforeAll(() => {
    productsRepository = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepository);
  });

  it("should be able to create a new product", async () => {
    const productData: Product = {
      name: "Malbec Gold",
      description: "Malbec Gold Desodorante Colônia 100ml",
      sku: "B73849",
    };

    const product = await createProductService.execute(productData);

    expect(product).toHaveProperty("id");
    expect(product.sku).toBe("B73849");
  });

  it("should not be able to create an existing product", async () => {
    const productData: Product = {
      name: "Malbec Magnetic",
      description: "Malbec Magnetic Desodorante Colônia, 100ml",
      sku: "B73743",
    };

    await createProductService.execute(productData);

    await expect(createProductService.execute(productData)).rejects.toEqual(
      new Error("Product already exists!")
    );
  });
});
