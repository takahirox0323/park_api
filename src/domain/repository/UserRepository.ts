import User from "@/infra/entities/User";
import { UserDeleteRequest, UserRequest } from "@/presentation/types/user";

export default interface UserRepository {
  // 支社を取得
  find(id?: number): Promise<User[]>;
  create(userRequest: UserRequest): Promise<any>;
  delete(UserDeleteRequest: UserDeleteRequest): Promise<User | undefined>;
  update(id: number, name: string): Promise<User | undefined>;
}
