import { PhotoDeleteRequest, PhotoRequest } from "@/presentation/types/photo";
import Photo from "@/infra/entities/Photo";

export default interface PhotoRepository {
  // 支社を取得
  find(id?: number): Promise<Photo[]>;
  create(photoRequest: PhotoRequest): Promise<any>;
  delete(PhotoDeleteRequest: PhotoDeleteRequest): Promise<Photo | undefined>;
  update(id: number, name: string): Promise<Photo | undefined>;
}
