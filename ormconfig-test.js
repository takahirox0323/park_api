module.exports = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3307,
  username: "docker",
  password: "docker",
  database: "park_api_test",
  synchronize: false,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/db/migrations/**/*.ts"],
  subscribers: ["src/db/subscribers/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/db/migrations",
    subscribersDir: "src/db/subscribers",
  },
};
