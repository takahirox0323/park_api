import express, { Request, Response } from "express";
import container from "@/inversify.config";
import AreaController from "@/controllers/AreaController";

const router = express.Router();

let prefectureController: AreaController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  prefectureController = container.get<AreaController>("AreaController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  prefectureController.find(req, res);
});

export default router;
