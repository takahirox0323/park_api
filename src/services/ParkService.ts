import { inject, injectable } from "inversify";
import Park from "@/entities/Park";
import ParkRepository from "@/repositories/ParkRepository";
import { ParkDeleteRequest, ParkRequest } from "@/types/park";

@injectable()
export default class ParkService {
  private repository: ParkRepository;

  constructor(
    @inject("ParkRepository")
    repository: ParkRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Park[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: ParkRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(ParkId: ParkDeleteRequest): Promise<any> {
    return await this.repository.delete(ParkId).catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
