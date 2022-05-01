import express, { Request, Response } from "express";
import TagController from "@controllers/TagController";
import container from "@/inversify.config";

const router = express.Router();

let tagController: TagController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  tagController = container.get<TagController>("TagController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  tagController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  tagController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  tagController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  tagController.update(req, res);
});

export default router;
