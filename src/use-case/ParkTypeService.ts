import { inject, injectable } from "inversify";
import ParkType from "@/infra/entities/ParkType";
import ParkTypeRepository from "@/domain/repository/ParkTypeRepository";
import {
  ParkTypeDeleteRequest,
  ParkTypeRequest,
} from "@/presentation/types/ParkType";

@injectable()
export default class ParkTypeService {
  private repository: ParkTypeRepository;

  constructor(
    @inject("ParkTypeRepository")
    repository: ParkTypeRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<ParkType[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: ParkTypeRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(ParkTypeId: ParkTypeDeleteRequest): Promise<any> {
    return await this.repository
      .delete(ParkTypeId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
