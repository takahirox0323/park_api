import { inject, injectable } from "inversify";
import Branch from "@/infra//entities/Branch";
import BranchRepository from "@/domain/repository/BranchRepository";
import { BranchDeleteRequest, BranchRequest } from "@/presentation/types/brach";

@injectable()
export default class BranchService {
  private repository: BranchRepository;

  constructor(
    @inject("BranchRepository")
    repository: BranchRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Branch[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: BranchRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(branchId: BranchDeleteRequest): Promise<any> {
    return await this.repository
      .delete(branchId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
