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
      name: "Malbec Absoluto",
      description: "Malbec Absoluto Desodorante Colônia 100ml",
      sku: "B75210",
    };

    const product = await createProductService.execute(productData);

    expect(product).toHaveProperty("id");
    expect(product.sku).toBe("B75210");
  });

  it("should not be able to create an existing product", async () => {
    const productData: Product = {
      name: "Malbec Ultra Blue",
      description: "Malbec Ultra Blue Desodorante Colônia 100ml",
      sku: "B50119",
    };

    await createProductService.execute(productData);

    await expect(createProductService.execute(productData)).rejects.toEqual(
      new Error("Product already exists!")
    );
  });
});
