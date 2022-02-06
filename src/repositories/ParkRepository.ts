import Park from "@/entities/Park";
import { BranchDeleteRequest, BranchRequest } from "@/types/brach";
import { ParkDeleteRequest, ParkRequest } from "@/types/park";

export default interface ParkRepository {
  // 支社を取得
  find(id?: number): Promise<Park[]>;
  create(brachRequest: ParkRequest): Promise<any>;
  delete(BranchDeleteRequest: ParkDeleteRequest): Promise<Park | undefined>;
  update(id: number, name: string): Promise<Park | undefined>;
}
