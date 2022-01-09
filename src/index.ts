import express from "express";
import cors from "cors";
import "reflect-metadata";
import { getConnectionOptions, createConnection } from "typeorm";
import branchRouter from "@routes/branch";
import { logger } from "./config";

const main = async () => {
  // TypeORMの設定
  const connectionOptions = await getConnectionOptions();
  await createConnection(connectionOptions);

  // expressの設定
  const app = express();

  // CORSの許可
  app.use(cors());
  // リクエストボディを受け取るための設定
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());

  // ルータの登録
  app.use("/api/branches", branchRouter);

  app.get("/", (req, res) => {
    res.send("Hello");
  });
  const port = "8888";

  app.listen(port, () => {
    console.log(`app running!`);
  });
};

main();
