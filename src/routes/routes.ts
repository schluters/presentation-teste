import { Router } from "express";
import { createProductFactory } from "../modules/createProduct/CreateProductFactory";

const routes = Router();

routes.post("/products", async (request, response) => {
  createProductFactory().handle(request, response);
});

export { routes };
