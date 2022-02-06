import { inject, injectable } from "inversify";
import Tag from "@/entities/Tags";
import TagRepository from "@/repositories/TagRepository";
import { TagDeleteRequest, TagRequest } from "@/types/tag";

@injectable()
export default class TagService {
  private repository: TagRepository;

  constructor(
    @inject("TagRepository")
    repository: TagRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Tag[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: TagRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(TagId: TagDeleteRequest): Promise<any> {
    return await this.repository.delete(TagId).catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
