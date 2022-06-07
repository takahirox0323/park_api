import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import UserSetting from "@/infra/entities/UserSetting";
import UserSettingRepository from "../../domain/repository/UserSettingRepository";
import {
  UserSettingDeleteRequest,
  UserSettingRequest,
} from "@/presentation/types/userSetting";

@injectable()
export default class UserSettingRepositoryImpl
  implements UserSettingRepository {
  private repository: Repository<UserSetting>;

  constructor() {
    this.repository = getRepository(UserSetting);
  }

  // 一覧を取得
  public async find(): Promise<UserSetting[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(userSetting: UserSettingRequest): Promise<any> {
    return await this.repository.save({
      id: userSetting.id,
    });
  }

  // 支社を削除
  public async delete(
    UserSettingDeleteRequest: UserSettingDeleteRequest
  ): Promise<UserSetting | undefined> {
    await this.repository.delete(UserSettingDeleteRequest.id);
    return;
  }

  // 支社の更新
  public async update(
    id: number,
    name: string
  ): Promise<UserSetting | undefined> {
    const targetPicture = await this.repository.find({ where: { id: id } });
    if (!targetPicture) {
      return undefined;
    }
    return await this.repository.save({
      id: id,
      name: name,
    });
  }
}
