import express, { Request, Response } from "express";
import LikeController from "@controllers/LikeController";
import container from "@/inversify.config";

const router = express.Router();

let likeController: LikeController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  likeController = container.get<LikeController>("likeController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  likeController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  likeController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  likeController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  likeController.update(req, res);
});

export default router;
