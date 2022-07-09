import express, { Request, Response } from "express";
import PhotoController from "@/controllers/BranchController";
import container from "@/inversify.config";

const router = express.Router();

let photoController: PhotoController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  photoController = container.get<PhotoController>("PhotoController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  photoController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  photoController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  photoController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  photoController.update(req, res);
});

export default router;
