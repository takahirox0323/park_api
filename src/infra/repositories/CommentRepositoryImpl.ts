import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";
import Comment from "@/infra/entities/Comment";
import CommentRepository from "../../domain/repository/CommentRepository";
import {
  CommentDeleteRequest,
  CommentRequest,
} from "@/presentation/types/comment";

@injectable()
export default class CommentRepositoryImpl implements CommentRepository {
  private repository: Repository<Comment>;

  constructor() {
    this.repository = getRepository(Comment);
  }

  // 一覧を取得
  public async find(): Promise<Comment[]> {
    return await this.repository.find();
  }

  // 支社を作成
  public async create(CommentRequest: CommentRequest): Promise<any> {
    return await this.repository.save({
      description: CommentRequest.description,
      parkId: CommentRequest.parkId,
    });
  }

  // 支社を削除
  public async delete(
    CommentDeleteRequest: CommentDeleteRequest
  ): Promise<Comment | undefined> {
    await this.repository.delete(CommentDeleteRequest);
    return;
  }

  // 支社の更新
  public async update(id: number, name: string): Promise<Comment | undefined> {
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
