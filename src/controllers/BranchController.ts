import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import BranchService from "@/use-case/BranchService";
import { logger } from "@/config";
import { BranchRequest } from "@/presentation/types/brach";

@injectable()
export default class BranchController {
  private branchService: BranchService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("BranchService") branchService: BranchService) {
    this.branchService = branchService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /branches");

    // ユーザ取得
    try {
      const branches = await this.branchService.find();
      if (branches == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /branches");
      return res.status(200).json(branches).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const branchRequest: BranchRequest = req.body;
    await this.branchService
      .create(branchRequest)
      .then((createdbranch) => {
        logger.info("END - POST /branches");
        return res.status(200).json(createdbranch);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const branchRequest: { id: number } = req.body;
    await this.branchService
      .delete(branchRequest)
      .then((createdbranch) => {
        logger.info("END - delete /branches");
        return res.status(200).json(createdbranch);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const branchRequest: { id: number; name: string } = req.body;
    await this.branchService
      .update(branchRequest.id, branchRequest.name)
      .then((createdbranch) => {
        logger.info("END - delete /branches");
        return res.status(200).json(createdbranch);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
