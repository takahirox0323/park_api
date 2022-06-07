import express, { Request, Response } from "express";
import PrefectureController from "@/controllers/PrefectureController";
import container from "@/inversify.config";

const router = express.Router();

let prefectureController: PrefectureController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  prefectureController = container.get<PrefectureController>(
    "PrefectureController"
  );
  next();
});

router.get("/", (req: Request, res: Response) => {
  prefectureController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  prefectureController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  prefectureController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  prefectureController.update(req, res);
});

export default router;
