import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { routes } from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      `http://localhost:${PORT}`,
      `http://127.0.0.1:${PORT}`,
      `http://0.0.0.0:${PORT}`,
    ],
  })
);
app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err}`,
    });
  }
);

export { app };
