import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import Prefecture from "@/infra/entities/Prefecture";
import PrefectureRepository from "../../domain/repository/PrefectureRepository";
import {
  PrefectureDeleteRequest,
  PrefectureRequest,
} from "@/presentation/types/prefecture";
import Area from "../entities/Area";

@injectable()
export default class AreaRepositoryImpl implements AreaRepositoryImpl {
  private repository: Repository<Area>;

  constructor() {
    this.repository = getRepository(Area);
  }

  // 一覧を取得
  public async find(): Promise<Area[]> {
    return await this.repository.find();
  }
}
