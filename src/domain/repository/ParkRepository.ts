import Park from "@/infra/entities/Park";
import { ParkDeleteRequest, ParkRequest } from "@/presentation/types/park";

export default interface ParkRepository {
  // 支社を取得
  find(id?: number): Promise<Park[] | undefined>;
  create(brachRequest: ParkRequest): Promise<any>;
  delete(BranchDeleteRequest: ParkDeleteRequest): Promise<Park | undefined>;
  update(id: number, name: string): Promise<Park | undefined>;
}
