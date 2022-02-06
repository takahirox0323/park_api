import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import Prefecture from "@entities/Prefecture";
import PrefectureRepository from "./PrefectureRepository";
import { PrefectureDeleteRequest, PrefectureRequest } from "@/types/prefecture";

@injectable()
export default class PrefectureRepositoryImpl implements PrefectureRepository {
  private repository: Repository<Prefecture>;

  constructor() {
    this.repository = getRepository(Prefecture);
  }

  // 一覧を取得
  public async find(): Promise<Prefecture[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(brachRequest: PrefectureRequest): Promise<any> {
    return await this.repository.save({
      name: brachRequest.name,
    });
  }

  // 支社を削除
  public async delete(
    PrefectureDeleteRequest: PrefectureDeleteRequest
  ): Promise<Prefecture | undefined> {
    await this.repository.delete(PrefectureDeleteRequest.id);
    return;
  }

  // 支社の更新
  public async update(
    id: number,
    name: string
  ): Promise<Prefecture | undefined> {
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
