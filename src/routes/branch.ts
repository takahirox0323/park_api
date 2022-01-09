import express, { Request, Response } from "express";
import BranchController from "@controllers/BranchController";
import container from "@/inversify.config";

const router = express.Router();

let branchController: BranchController;

router.use((req, res, next) => {
  // DIコンテナから依存性が注入されたコントローラを取得
  branchController = container.get<BranchController>("BranchController");
  next();
});

router.get("/", (req: Request, res: Response) => {
  branchController.find(req, res);
});
router.post("/", (req: Request, res: Response) => {
  branchController.create(req, res);
});
router.delete("/", (req: Request, res: Response) => {
  branchController.delete(req, res);
});
router.put("/", (req: Request, res: Response) => {
  branchController.update(req, res);
});

export default router;
