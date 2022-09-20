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
      console.log("PRODUCT: ", product);
      return response.json(product).status(200);
    } catch (error: any) {
      console.log("ERROR", { error });
      return response.json({ error: error.message }).status(400);
    }
  }
}

export { CreateProductController };
