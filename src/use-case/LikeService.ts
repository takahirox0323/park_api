import { inject, injectable } from "inversify";
import Like from "@/infra/entities/Like";
import LikeRepository from "@/domain/repository/LikeRepository";
import { LikeDeleteRequest, LikeRequest } from "@/presentation/types/like";

@injectable()
export default class LikeService {
  private repository: LikeRepository;

  constructor(
    @inject("LikeRepository")
    repository: LikeRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Like[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: LikeRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(LikeId: LikeDeleteRequest): Promise<any> {
    return await this.repository.delete(LikeId).catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
