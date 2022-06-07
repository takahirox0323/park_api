import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import TagService from "@/use-case/TagService";
import { logger } from "@/config";
import { TagRequest } from "@/presentation/types/tag";

@injectable()
export default class TagController {
  private TagService: TagService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("TagService") TagService: TagService) {
    this.TagService = TagService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /tags");

    // ユーザ取得
    try {
      const tags = await this.TagService.find();
      if (tags == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /tags");
      return res.status(200).json(tags).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const TagRequest: TagRequest = req.body;
    await this.TagService.create(TagRequest)
      .then((createdTag) => {
        logger.info("END - POST /tags");
        return res.status(200).json(createdTag);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const TagRequest: { id: number } = req.body;
    await this.TagService.delete(TagRequest)
      .then((createdTag) => {
        logger.info("END - delete /tags");
        return res.status(200).json(createdTag);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const TagRequest: { id: number; name: string } = req.body;
    await this.TagService.update(TagRequest.id, TagRequest.name)
      .then((createdTag) => {
        logger.info("END - delete /tags");
        return res.status(200).json(createdTag);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
