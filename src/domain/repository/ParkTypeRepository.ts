import ParkType from "@/infra/entities/ParkType";
import {
  ParkTypeDeleteRequest,
  ParkTypeRequest,
} from "@/presentation/types/ParkType";

export default interface ParkTypeRepository {
  // 支社を取得
  find(id?: number): Promise<ParkType[]>;
  create(ParkTypeRequest: ParkTypeRequest): Promise<any>;
  delete(
    ParkTypeDeleteRequest: ParkTypeDeleteRequest
  ): Promise<ParkType | undefined>;
  update(id: number, name: string): Promise<ParkType | undefined>;
}
