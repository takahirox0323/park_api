import express, { Request, Response } from "express";
import ParkTypeController from "@/controllers/ParkTypeController";
import container from "@/inversify.config";

const router = express.Router();

let parkTypeController: ParkTypeController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  parkTypeController = container.get<ParkTypeController>("ParkTypeController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  parkTypeController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  parkTypeController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  parkTypeController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  parkTypeController.update(req, res);
});

export default router;
