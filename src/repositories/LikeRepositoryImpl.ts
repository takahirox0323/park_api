import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import UserRepository from "./UserRepository";
import { UserDeleteRequest, UserRequest } from "@/types/user";
import User from "@/entities/User";

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  // 一覧を取得
  public async find(): Promise<User[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(userRequest: UserRequest): Promise<any> {
    return await this.repository.save({
      familyName: userRequest.familyName,
      givenName: userRequest.givenName,
    });
  }

  // 支社を削除
  public async delete(
    UserDeleteRequest: UserDeleteRequest
  ): Promise<User | undefined> {
    await this.repository.delete(UserDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<User | undefined> {
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
