import { BranchDeleteRequest, BranchRequest } from "@/presentation/types/brach";
import Branch from "@/infra/entities/Branch";

export default interface BranchRepository {
  // 支社を取得
  find(id?: number): Promise<Branch[]>;
  create(brachRequest: BranchRequest): Promise<any>;
  delete(BranchDeleteRequest: BranchDeleteRequest): Promise<Branch | undefined>;
  update(id: number, name: string): Promise<Branch | undefined>;
}
