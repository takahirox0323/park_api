import {
  UserSettingDeleteRequest,
  UserSettingRequest,
} from "@/presentation/types/userSetting";
import UserSetting from "@/infra/entities/UserSetting";

export default interface UserSettingRepository {
  // 支社を取得
  find(id?: number): Promise<UserSetting[]>;
  create(brachRequest: UserSettingRequest): Promise<any>;
  delete(
    UserSettingDeleteRequest: UserSettingDeleteRequest
  ): Promise<UserSetting | undefined>;
  update(id: number, name: string): Promise<UserSetting | undefined>;
}
