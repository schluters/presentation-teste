const NodeEnvironment = require("jest-environment-node");
const { v4: uuid } = require("uuid");
const { execSync } = require("child_process");
const { resolve } = require("path");
const { Client } = require("pg");

const prismaCli = "./node_modules/.bin/prisma";

require("dotenv").config({
  path: resolve(__dirname, "..", ".env.test"),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    const dbUser = process.env.DATABASE_USER;
    const dbPass = process.env.DATABASE_PASS;
    const dbHost = process.env.DATABASE_HOST;
    const dbPort = process.env.DATABASE_PORT;
    const dbName = process.env.DATABASE_NAME;

    this.schema = `teste_schema_${uuid()}`;
    this.connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`;
  }

  // Cria toda a estrutura
  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    // Rodar as migrations
    execSync(`${prismaCli} migrate dev`);
  }

  // Remove toda a estrutura
  async teardown() {
    const client = new Client({
      connectionString: this.connectionString,
    });

    await client.connect();
    // await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

module.exports = CustomEnvironment;
