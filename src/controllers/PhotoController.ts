import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import PhotoService from "@/use-case/PhotoService";
import { logger } from "@/config";
import { PhotoRequest } from "@/presentation/types/photo";

@injectable()
export default class PhotoController {
  private photoService: PhotoService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("PhotoService") photoService: PhotoService) {
    this.photoService = photoService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /photos");

    // ユーザ取得
    try {
      const photoes = await this.photoService.find();
      if (photoes == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /photos");
      return res.status(200).json(photoes).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const photoRequest: PhotoRequest = req.body;
    await this.photoService
      .create(photoRequest)
      .then((createdphoto) => {
        logger.info("END - POST /photos");
        return res.status(200).json(createdphoto);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const photoRequest: { id: number } = req.body;
    await this.photoService
      .delete(photoRequest)
      .then((createdphoto) => {
        logger.info("END - delete /photoes");
        return res.status(200).json(createdphoto);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const photoRequest: { id: number; name: string } = req.body;
    await this.photoService
      .update(photoRequest.id, photoRequest.name)
      .then((createdphoto) => {
        logger.info("END - delete /photos");
        return res.status(200).json(createdphoto);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
