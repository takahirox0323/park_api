import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";
import ParkRepository from "../../domain/repository/ParkRepository";
import { ParkDeleteRequest, ParkRequest } from "@/presentation/types/park";
import Park from "@/infra/entities/Park";

@injectable()
export default class ParkRepositoryImpl implements ParkRepository {
  private repository: Repository<Park>;

  constructor() {
    this.repository = getRepository(Park);
  }

  // 一覧を取得
  public async find(): Promise<Park[] | undefined> {
    return await this.repository.find({
      relations: ["tag", "parkType"],
    });
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
      parkStatusId: brachRequest.parkStatusId,
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
  public async update(id: number, name: string): Promise<Park | undefined> {
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
