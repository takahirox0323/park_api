import { inject, injectable } from "inversify";

import Area from "@/infra/entities/Area";
import AreaRepository from "@/domain/repository/AreaRepositoryRepository";

@injectable()
export default class AreaService {
  private repository: AreaRepository;

  constructor(
    @inject("AreaRepository")
    repository: AreaRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Area[] | undefined> {
    return await this.repository.find();
  }
}
