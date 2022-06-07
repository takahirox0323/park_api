import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";
import { UserDeleteRequest, UserRequest } from "@/presentation/types/user";
import LikeRepository from "../../domain/repository/LikeRepository";
import Like from "@/infra/entities//Like";
import { LikeRequest } from "@/presentation/types/like";

@injectable()
export default class LikeRepositoryImpl implements LikeRepository {
  private repository: Repository<Like>;

  constructor() {
    this.repository = getRepository(Like);
  }

  // 一覧を取得
  public async find(): Promise<Like[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(likeRequest: LikeRequest): Promise<any> {
    return await this.repository.save({
      parkId: likeRequest.parkId,
      name: likeRequest.name,
    });
  }

  // 支社を削除
  public async delete(
    UserDeleteRequest: UserDeleteRequest
  ): Promise<Like | undefined> {
    await this.repository.delete(UserDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Like | undefined> {
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
