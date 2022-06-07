import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import Branch from "@/infra/entities/Branch";
import BranchRepository from "../../domain/repository/BranchRepository";
import { BranchDeleteRequest, BranchRequest } from "@/presentation/types/brach";

@injectable()
export default class BranchRepositoryImpl implements BranchRepository {
  private repository: Repository<Branch>;

  constructor() {
    this.repository = getRepository(Branch);
  }

  // 一覧を取得
  public async find(): Promise<Branch[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(brachRequest: BranchRequest): Promise<any> {
    return await this.repository.save({
      name: brachRequest.name,
    });
  }

  // 支社を削除
  public async delete(
    BranchDeleteRequest: BranchDeleteRequest
  ): Promise<Branch | undefined> {
    await this.repository.delete(BranchDeleteRequest.id);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Branch | undefined> {
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
