import { inject, injectable } from "inversify";
import Photo from "@/infra//entities/Photo";
import PhotoRepository from "@/domain/repository/PhotoRepository";
import { PhotoDeleteRequest, PhotoRequest } from "@/presentation/types/photo";

@injectable()
export default class PhotoService {
  private repository: PhotoRepository;

  constructor(
    @inject("PhotoRepository")
    repository: PhotoRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Photo[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: PhotoRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(photoId: PhotoDeleteRequest): Promise<any> {
    return await this.repository
      .delete(photoId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
