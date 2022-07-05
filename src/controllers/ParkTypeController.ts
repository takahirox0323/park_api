import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import ParkTypeService from "@/use-case/ParkTypeService";
import { logger } from "@/config";
import { ParkTypeRequest } from "@/presentation/types/ParkType";

@injectable()
export default class ParkTypeController {
  private ParkTypeService: ParkTypeService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("ParkTypService") ParkTypeService: ParkTypeService) {
    this.ParkTypeService = ParkTypeService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /ParkType");

    // ユーザ取得
    try {
      const ParkType = await this.ParkTypeService.find();
      if (ParkType == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /ParkType");
      return res.status(200).json(ParkType).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const ParkTypeRequest: ParkTypeRequest = req.body;
    await this.ParkTypeService.create(ParkTypeRequest)
      .then((createdParkType) => {
        logger.info("END - POST /ParkType");
        return res.status(200).json(createdParkType);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const ParkTypeRequest: { id: number } = req.body;
    await this.ParkTypeService.delete(ParkTypeRequest)
      .then((createdParkType) => {
        logger.info("END - delete /ParkType");
        return res.status(200).json(createdParkType);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const ParkTypeRequest: { id: number; name: string } = req.body;
    await this.ParkTypeService.update(ParkTypeRequest.id, ParkTypeRequest.name)
      .then((createdParkType) => {
        logger.info("END - delete /ParkType");
        return res.status(200).json(createdParkType);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
