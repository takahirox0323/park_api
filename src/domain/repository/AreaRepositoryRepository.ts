import Area from "@/infra/entities/Area";

export default interface AreaRepository {
  // 支社を取得
  find(id?: number): Promise<Area[]>;
}
