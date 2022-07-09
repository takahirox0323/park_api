import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";
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
