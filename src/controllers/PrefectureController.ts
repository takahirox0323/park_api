import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import PrefectureService from "@services/PrefectureService";
import { logger } from "@/config";
import { PrefectureRequest } from "@/types/prefecture";

@injectable()
export default class PrefectureController {
  private PrefectureService: PrefectureService;

  // サービスをコンストラクタで注入（DI）
  constructor(
    @inject("PrefectureService") PrefectureService: PrefectureService
  ) {
    this.PrefectureService = PrefectureService;
  }

  async find(req: Request, res: Response): Promise<void> {
    logger.info("START - GET /prefectures");

    // ユーザ取得
    try {
      const prefectures = await this.PrefectureService.find();
      if (prefectures == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /prefectures");
      return res.status(200).json(prefectures).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const PrefectureRequest: PrefectureRequest = req.body;
    await this.PrefectureService.create(PrefectureRequest)
      .then((createdPrefecture) => {
        logger.info("END - POST /prefectures");
        return res.status(200).json(createdPrefecture);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const PrefectureRequest: { id: number } = req.body;
    await this.PrefectureService.delete(PrefectureRequest)
      .then((createdPrefecture) => {
        logger.info("END - delete /prefectures");
        return res.status(200).json(createdPrefecture);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const PrefectureRequest: { id: number; name: string } = req.body;
    await this.PrefectureService.update(
      PrefectureRequest.id,
      PrefectureRequest.name
    )
      .then((createdPrefecture) => {
        logger.info("END - delete /prefectures");
        return res.status(200).json(createdPrefecture);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
