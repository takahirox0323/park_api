import express, { Request, Response } from "express";
import UserController from "@/controllers/UserController";
import container from "@/inversify.config";

const router = express.Router();

let userController: UserController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  userController = container.get<UserController>("UserController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  userController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  userController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  userController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  userController.update(req, res);
});

export default router;
