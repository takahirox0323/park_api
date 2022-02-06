import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import ParkService from "@services/ParkService";
import { logger } from "@/config";
import { ParkRequest } from "@/types/park";
import Park from "@/entities/Park";

@injectable()
export default class ParkController {
  private ParkService: ParkService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("ParkService") ParkService: ParkService) {
    this.ParkService = ParkService;
  }

  async find(req: Request, res: Response): Promise<void> {
    logger.info("START - GET /parks");

    // ユーザ取得
    try {
      const Parkes = await this.ParkService.find();
      if (Parkes == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /parks");
      return res.status(200).json(Parkes).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const ParkRequest: ParkRequest = req.body;
    await this.ParkService.create(ParkRequest)
      .then((createdPark) => {
        logger.info("END - POST /parks");
        return res.status(200).json(createdPark);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const ParkRequest: { id: number } = req.body;
    await this.ParkService.delete(ParkRequest)
      .then((createdPark) => {
        logger.info("END - delete /parks");
        return res.status(200).json(createdPark);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const ParkRequest: { id: number; name: string } = req.body;
    await this.ParkService.update(ParkRequest.id, ParkRequest.name)
      .then((createdPark) => {
        logger.info("END - delete /parks");
        return res.status(200).json(createdPark);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
