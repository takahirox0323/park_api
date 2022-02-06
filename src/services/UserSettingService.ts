import { inject, injectable } from "inversify";
import UserSetting from "@/entities/UserSetting";
import UserSettingRepository from "@/repositories/UserSettingRepository";
import {
  UserSettingDeleteRequest,
  UserSettingRequest,
} from "@/types/userSetting";

@injectable()
export default class UserSettingService {
  private repository: UserSettingRepository;

  constructor(
    @inject("UserSettingRepository")
    repository: UserSettingRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<UserSetting[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: UserSettingRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(UserSettingId: UserSettingDeleteRequest): Promise<any> {
    return await this.repository
      .delete(UserSettingId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
