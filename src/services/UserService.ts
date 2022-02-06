import { inject, injectable } from "inversify";
import User from "@/entities/User";
import UserRepository from "@/repositories/UserRepository";
import { UserDeleteRequest, UserRequest } from "@/types/user";

@injectable()
export default class UserService {
  private repository: UserRepository;

  constructor(
    @inject("UserRepository")
    repository: UserRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<User[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: UserRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(UserId: UserDeleteRequest): Promise<any> {
    return await this.repository.delete(UserId).catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
