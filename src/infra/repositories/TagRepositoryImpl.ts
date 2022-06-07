import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import TagRepository from "../../domain/repository/TagRepository";
import { TagDeleteRequest, TagRequest } from "@/presentation/types/tag";
import Tag from "@/infra/entities//Tags";

@injectable()
export default class TagRepositoryImpl implements TagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  // 一覧を取得
  public async find(): Promise<Tag[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(TagRequest: TagRequest): Promise<any> {
    return await this.repository.save({
      name: TagRequest.name,
    });
  }

  // 支社を削除
  public async delete(
    TagDeleteRequest: TagDeleteRequest
  ): Promise<Tag | undefined> {
    await this.repository.delete(TagDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Tag | undefined> {
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
