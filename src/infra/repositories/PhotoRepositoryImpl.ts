import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import Photo from "@/infra/entities/Photo";
import PhotoRepository from "../../domain/repository/PhotoRepository";
import { PhotoDeleteRequest, PhotoRequest } from "@/presentation/types/photo";

@injectable()
export default class PhotoRepositoryImpl implements PhotoRepository {
  private repository: Repository<Photo>;

  constructor() {
    this.repository = getRepository(Photo);
  }

  // 一覧を取得
  public async find(): Promise<Photo[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(brachRequest: PhotoRequest): Promise<any> {
    return await this.repository.save({
      key: brachRequest.key,
      createdUserId: brachRequest.createdUserId,
      parkId: brachRequest.parkId,
    });
  }

  // 支社を削除
  public async delete(
    PhotoDeleteRequest: PhotoDeleteRequest
  ): Promise<Photo | undefined> {
    await this.repository.delete(PhotoDeleteRequest.id);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Photo | undefined> {
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
