import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import Branch from "@entities/Branch";
import ParkRepository from "./ParkRepository";
import { ParkDeleteRequest, ParkRequest } from "@/types/park";
import Park from "@/entities/Park";

@injectable()
export default class ParkRepositoryImpl implements ParkRepository {
  private repository: Repository<Park>;

  constructor() {
    this.repository = getRepository(Park);
  }

  // 一覧を取得
  public async find(): Promise<Park[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(brachRequest: ParkRequest): Promise<any> {
    return await this.repository.save({
      name: brachRequest.name,
      address: brachRequest.address,
      description: brachRequest.description,
      prefectureId: brachRequest.prefectureId,
      areaId: brachRequest.areaId,
      countryId: brachRequest.countryId,
      parkUrl: brachRequest.parkUrl,
      openingTime: brachRequest.openingTime,
      price: brachRequest.price,
      categoryId: brachRequest.categoryId,
      parkTypeId: brachRequest.parkTypeId,
      createdUserId: brachRequest.createdUserId,
    });
  }

  // 支社を削除
  public async delete(
    ParkDeleteRequest: ParkDeleteRequest
  ): Promise<Park | undefined> {
    await this.repository.delete(ParkDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Branch | undefined> {
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
