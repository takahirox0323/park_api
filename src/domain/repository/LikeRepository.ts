import Like from "@/infra/entities/Like";
import { LikeDeleteRequest, LikeRequest } from "@/presentation/types/like";

export default interface LikeRepository {
  // 支社を取得
  find(id?: number): Promise<Like[]>;
  create(LikeRequest: LikeRequest): Promise<any>;
  delete(LikeDeleteRequest: LikeDeleteRequest): Promise<Like | undefined>;
  update(id: number, name: string): Promise<Like | undefined>;
}
