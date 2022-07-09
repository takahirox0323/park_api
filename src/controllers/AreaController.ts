import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { logger } from "@/config";
import AreaService from "@/use-case/AreaService";

@injectable()
export default class AreaController {
  private AreaService: AreaService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("AreaService") AreaService: AreaService) {
    this.AreaService = AreaService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /prefectures");

    // ユーザ取得
    try {
      const prefectures = await this.AreaService.find();
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
}
