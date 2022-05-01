import express, { Request, Response } from "express";
import UserSettingController from "@controllers/UserSettingController";
import container from "@/inversify.config";

const router = express.Router();

let userSettingController: UserSettingController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  userSettingController = container.get<UserSettingController>(
    "UserSettingController"
  );
  next();
});

router.get("/", (req: Request, res: Response) => {
  userSettingController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  userSettingController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  userSettingController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  userSettingController.update(req, res);
});

export default router;
