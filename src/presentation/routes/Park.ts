import express, { Request, Response } from "express";
import ParkController from "@/controllers/ParkController";
import container from "@/inversify.config";

const router = express.Router();

let parkController: ParkController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  parkController = container.get<ParkController>("ParkController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  parkController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  parkController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  parkController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  parkController.update(req, res);
});

export default router;
