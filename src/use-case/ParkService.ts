import { inject, injectable } from "inversify";
import ParkRepository from "@/domain/repository/ParkRepository";
import { ParkDeleteRequest, ParkRequest } from "@/presentation/types/park";
import PrefectureRepository from "@/domain/repository/PrefectureRepository";
import AreaRepository from "@/domain/repository/AreaRepositoryRepository";

@injectable()
export default class ParkService {
  private parkRepository: ParkRepository;
  private prefectureRepository: PrefectureRepository;
  private areaRepository: AreaRepository;

  constructor(
    @inject("ParkRepository")
    parkRepository: ParkRepository,
    @inject("PrefectureRepository")
    prefectureRepository: PrefectureRepository,
    @inject("AreaRepository")
    areaRepository: AreaRepository
  ) {
    this.parkRepository = parkRepository;
    this.prefectureRepository = prefectureRepository;
    this.areaRepository = areaRepository;
  }

  // 公園取得
  async find(): Promise<any[] | undefined> {
    const parkList = await this.parkRepository.find();
    const prefectureList = await this.prefectureRepository.find();
    const areaList = await this.areaRepository.find();

    if (!parkList) return;

    return parkList.map((park) => {
      const prefecture = prefectureList.find(
        (prefecture) => Number(park.prefectureId) === prefecture.id
      );
      const area = areaList.find((area) => area.id === Number(park.areaId));

      return {
        ...park,
        prefectureName: prefecture?.name,
        areaName: area?.name,
      };
    });
  }

  // 支社の作成
  async create(brachRequest: ParkRequest): Promise<any> {
    return await this.parkRepository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(ParkId: ParkDeleteRequest): Promise<any> {
    return await this.parkRepository
      .delete(ParkId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.parkRepository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
