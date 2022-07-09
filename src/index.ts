import express from "express";
import cors from "cors";
import "reflect-metadata";
import { getConnectionOptions, createConnection } from "typeorm";
import branchRouter from "@/presentation/routes/branch";
import commentRouter from "@/presentation/routes/comment";
import likeRouter from "@/presentation/routes/like";
import parkRouter from "@/presentation/routes/Park";
import prefectureRouter from "@/presentation/routes/Prefecture";
import tagRouter from "@/presentation/routes/Tag";
import userRouter from "@/presentation/routes/User";
import userSettingRouter from "@/presentation/routes/userSetting";
import areaRouter from "@/presentation/routes/Area";
import parkType from "@/presentation/routes/ParkType";
import Photos from "@/presentation/routes/photo";
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

  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    if (["POST", "PUT", "PATCH"].includes(req.method))
      logger.info(`body: ${JSON.stringify(req.body)}`);
    if (["GET"].includes(req.method))
      logger.info(`query: ${JSON.stringify(req.query)}`);
    next();
  });

  // ルータの登録
  app.use("/api/areas", areaRouter);
  app.use("/api/branches", branchRouter);
  app.use("/api/comments", commentRouter);
  app.use("/api/likes", likeRouter);
  app.use("/api/parks", parkRouter);
  app.use("/api/prefectures", prefectureRouter);
  app.use("/api/tags", tagRouter);
  app.use("/api/parkTypes", parkType);
  app.use("/api/users", userRouter);
  app.use("/api/userSettings", userSettingRouter);
  app.use("/api/photos", Photos);

  app.get("/", (req, res) => {
    res.send("Hello");
  });
  const port = "4000";

  app.listen(port, () => {
    console.log(`app running!`);
  });
};

main();
