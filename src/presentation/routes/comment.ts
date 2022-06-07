import express, { Request, Response } from "express";
import CommentController from "@/controllers/CommonController";
import container from "@/inversify.config";

const router = express.Router();

let commentController: CommentController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  commentController = container.get<CommentController>("CommentController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  commentController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  commentController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  commentController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  commentController.update(req, res);
});

export default router;
