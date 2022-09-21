import request from "supertest";
import { app } from "../../app";

describe("Create Product Controller", () => {
  it("Should be able to create a new product", async () => {
    const response = await request(app).post("/products").send({
      name: "Malbec Magnetic",
      description: "Malbec Magnetic Desodorante Colônia, 100ml",
      sku: "B73743",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create an existing product", async () => {
    await request(app).post("/products").send({
      name: "Malbec Gold",
      description: "Malbec Gold Desodorante Colônia 100ml",
      sku: "B73849",
    });

    const response = await request(app).post("/products").send({
      name: "Malbec Gold",
      description: "Malbec Gold Desodorante Colônia 100ml",
      sku: "B73849",
    });
    expect(response.status).toBe(400);
  });
});
