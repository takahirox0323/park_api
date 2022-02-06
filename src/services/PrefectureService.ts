import { inject, injectable } from "inversify";
import Prefecture from "@/entities/Prefecture";
import PrefectureRepository from "@/repositories/PrefectureRepository";
import { PrefectureDeleteRequest, PrefectureRequest } from "@/types/prefecture";

@injectable()
export default class PrefectureService {
  private repository: PrefectureRepository;

  constructor(
    @inject("PrefectureRepository")
    repository: PrefectureRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Prefecture[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: PrefectureRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(PrefectureId: PrefectureDeleteRequest): Promise<any> {
    return await this.repository
      .delete(PrefectureId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
