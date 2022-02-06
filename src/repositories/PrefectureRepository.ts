import { PrefectureDeleteRequest, PrefectureRequest } from "@/types/prefecture";
import Prefecture from "@entities/Prefecture";

export default interface PrefectureRepository {
  // 支社を取得
  find(id?: number): Promise<Prefecture[]>;
  create(brachRequest: PrefectureRequest): Promise<any>;
  delete(
    PrefectureDeleteRequest: PrefectureDeleteRequest
  ): Promise<Prefecture | undefined>;
  update(id: number, name: string): Promise<Prefecture | undefined>;
}
