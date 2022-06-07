import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import UserSettingService from "@/use-case/UserSettingService";
import { logger } from "@/config";
import { UserSettingRequest } from "@/presentation/types/userSetting";

@injectable()
export default class UserSettingController {
  private UserSettingService: UserSettingService;

  // サービスをコンストラクタで注入（DI）
  constructor(
    @inject("UserSettingService") UserSettingService: UserSettingService
  ) {
    this.UserSettingService = UserSettingService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /userSettings");

    // ユーザ取得
    try {
      const userSettings = await this.UserSettingService.find();
      if (userSettings == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /userSettings");
      return res.status(200).json(userSettings).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const UserSettingRequest: UserSettingRequest = req.body;
    await this.UserSettingService.create(UserSettingRequest)
      .then((createdUserSetting) => {
        logger.info("END - POST /userSettings");
        return res.status(200).json(createdUserSetting);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const UserSettingRequest: { id: number } = req.body;
    await this.UserSettingService.delete(UserSettingRequest)
      .then((createdUserSetting) => {
        logger.info("END - delete /userSettings");
        return res.status(200).json(createdUserSetting);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const UserSettingRequest: { id: number; name: string } = req.body;
    await this.UserSettingService.update(
      UserSettingRequest.id,
      UserSettingRequest.name
    )
      .then((createdUserSetting) => {
        logger.info("END - delete /userSettings");
        return res.status(200).json(createdUserSetting);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
