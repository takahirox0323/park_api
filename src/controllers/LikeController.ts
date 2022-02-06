import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import LikeService from "@services/LikeService";
import { logger } from "@/config";
import { LikeRequest } from "@/types/like";

@injectable()
export default class likeController {
  private LikeService: LikeService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("LikeService") LikeService: LikeService) {
    this.LikeService = LikeService;
  }

  async find(req: Request, res: Response): Promise<void> {
    logger.info("START - GET /likes");

    // ユーザ取得
    try {
      const Likees = await this.LikeService.find();
      if (Likees == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /likes");
      return res.status(200).json(Likees).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const LikeRequest: LikeRequest = req.body;
    await this.LikeService.create(LikeRequest)
      .then((createdLike) => {
        logger.info("END - POST /likes");
        return res.status(200).json(createdLike);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const LikeRequest: { id: number } = req.body;
    await this.LikeService.delete(LikeRequest)
      .then((createdLike) => {
        logger.info("END - delete /likes");
        return res.status(200).json(createdLike);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const LikeRequest: { id: number; name: string } = req.body;
    await this.LikeService.update(LikeRequest.id, LikeRequest.name)
      .then((createdLike) => {
        logger.info("END - delete /likes");
        return res.status(200).json(createdLike);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
