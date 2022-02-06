import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import CommentService from "@services/CommentService";
import { logger } from "@/config";
import { CommentRequest } from "@/types/comment";

@injectable()
export default class CommentController {
  private CommentService: CommentService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("CommonService") CommonService: CommentService) {
    this.CommentService = CommonService;
  }

  async find(req: Request, res: Response): Promise<void> {
    logger.info("START - GET /comments");

    // ユーザ取得
    try {
      const Comment = await this.CommentService.find();
      if (Comment == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /comments");
      return res.status(200).json(Comment).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const CommonRequest: CommentRequest = req.body;
    await this.CommentService.create(CommonRequest)
      .then((createdCommon) => {
        logger.info("END - POST /comments");
        return res.status(200).json(createdCommon);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const CommonRequest: { id: number } = req.body;
    await this.CommentService.delete(CommonRequest)
      .then((createdCommon) => {
        logger.info("END - delete /comments");
        return res.status(200).json(createdCommon);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const CommonRequest: { id: number; name: string } = req.body;
    await this.CommentService.update(CommonRequest.id, CommonRequest.name)
      .then((createdCommon) => {
        logger.info("END - delete /comments");
        return res.status(200).json(createdCommon);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
