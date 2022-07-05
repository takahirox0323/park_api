import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import ParkTypeRepository from "../../domain/repository/ParkTypeRepository";
import {
  ParkTypeDeleteRequest,
  ParkTypeRequest,
} from "@/presentation/types/ParkType";
import ParkType from "@/infra/entities//ParkType";

@injectable()
export default class ParkTypeRepositoryImpl implements ParkTypeRepository {
  private repository: Repository<ParkType>;

  constructor() {
    this.repository = getRepository(ParkType);
  }

  // 一覧を取得
  public async find(): Promise<ParkType[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(ParkTypeRequest: ParkTypeRequest): Promise<any> {
    return await this.repository.save({
      name: ParkTypeRequest.name,
    });
  }

  // 支社を削除
  public async delete(
    ParkTypeDeleteRequest: ParkTypeDeleteRequest
  ): Promise<ParkType | undefined> {
    await this.repository.delete(ParkTypeDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<ParkType | undefined> {
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
