import { inject, injectable } from "inversify";
import Comment from "@/infra/entities/Comment";
import CommentRepository from "@/domain/repository/CommentRepository";
import {
  CommentDeleteRequest,
  CommentRequest,
} from "@/presentation/types/comment";

@injectable()
export default class CommentService {
  private repository: CommentRepository;

  constructor(
    @inject("CommentRepository")
    repository: CommentRepository
  ) {
    this.repository = repository;
  }

  // 支社取得
  async find(id?: number): Promise<Comment[] | undefined> {
    return await this.repository.find();
  }

  // 支社の作成
  async create(brachRequest: CommentRequest): Promise<any> {
    return await this.repository
      .create(brachRequest)
      .catch((e) => Promise.reject(e));
  }
  // 支社の削除
  async delete(CommentId: CommentDeleteRequest): Promise<any> {
    return await this.repository
      .delete(CommentId)
      .catch((e) => Promise.reject(e));
  }

  // 支社の削除
  async update(id: number, name: string): Promise<any> {
    return await this.repository
      .update(id, name)
      .catch((e) => Promise.reject(e));
  }
}
