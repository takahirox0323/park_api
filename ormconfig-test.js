module.exports = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3307,
  username: "docker",
  password: "docker",
  database: "park_api_test",
  synchronize: false,
  logging: true,
  entities: ["src/infra/entities/**/*.ts"],
  migrations: ["src/infra/migrations/**/*.ts"],
  subscribers: ["src/infra/subscribers/**/*.ts"],
  cli: {
    entitiesDir: "src/infra/entities",
    migrationsDir: "src/infra//migrations",
    subscribersDir: "src/infra//subscribers",
  },
};
