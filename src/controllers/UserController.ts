import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import UserService from "@/use-case/UserService";
import { logger } from "@/config";
import { UserRequest } from "@/presentation/types/user";

@injectable()
export default class UserController {
  private UserService: UserService;

  // サービスをコンストラクタで注入（DI）
  constructor(@inject("UserService") UserService: UserService) {
    this.UserService = UserService;
  }

  async find(req: Request, res: Response) {
    logger.info("START - GET /users");

    // ユーザ取得
    try {
      const users = await this.UserService.find();
      if (users == undefined) {
        return res.sendStatus(404).end();
      }
      logger.info("END - GET /users");
      return res.status(200).json(users).end();
    } catch (err) {
      logger.error(err);
      return res.sendStatus(500).end();
    }
  }

  // 支社を作成
  async create(req: Request, res: Response): Promise<void> {
    const UserRequest: UserRequest = req.body;
    await this.UserService.create(UserRequest)
      .then((createdUser) => {
        logger.info("END - POST /users");
        return res.status(200).json(createdUser);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の削除
  async delete(req: Request, res: Response): Promise<void> {
    const UserRequest: { id: number } = req.body;
    await this.UserService.delete(UserRequest)
      .then((createdUser) => {
        logger.info("END - delete /users");
        return res.status(200).json(createdUser);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }

  // 支社の更新
  async update(req: Request, res: Response): Promise<void> {
    const UserRequest: { id: number; name: string } = req.body;
    await this.UserService.update(UserRequest.id, UserRequest.name)
      .then((createdUser) => {
        logger.info("END - delete /users");
        return res.status(200).json(createdUser);
      })
      .catch((e) => {
        logger.error(e);
        return res.sendStatus(500);
      });
  }
}
