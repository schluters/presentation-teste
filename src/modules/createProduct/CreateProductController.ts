import { Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

class CreateProductController {
  constructor(private createProduct: CreateProductService) {}

  async handle(request: Request, response: Response) {
    const { name, description, sku } = request.body;
    const product = await this.createProduct.execute({
      name,
      description,
      sku,
    });
    return response.json(product);
  }
}

export { CreateProductController };
