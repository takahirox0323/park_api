module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ["src/infra/entities/**/*.ts"],
  migrations: ["src/infra/migrations/**/*.ts"],
  cli: {
    entitiesDir: "src/infra/entities",
    migrationsDir: "src/infra/migrations",
  },
};
