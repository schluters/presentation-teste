import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config(); // Load the environment variables
console.log(`The connection URL is ${process.env.DATABASE_URL}`);

const prisma = new PrismaClient();

export { prisma };
