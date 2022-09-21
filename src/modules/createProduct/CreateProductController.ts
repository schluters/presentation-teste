import { Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

class CreateProductController {
  constructor(private createProduct: CreateProductService) {}

  async handle(request: Request, response: Response) {
    const { name, description, sku } = request.body;
    try {
      const product = await this.createProduct.execute({
        name,
        description,
        sku,
      });
      return response.status(201).json(product);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { CreateProductController };
