import Comment from "@/entities/Comment";
import { CommentDeleteRequest, CommentRequest } from "@/types/comment";

export default interface CommentRepository {
  // 支社を取得
  find(): Promise<Comment[]>;
  create(CommentRequest: CommentRequest): Promise<any>;
  delete(
    CommentDeleteRequest: CommentDeleteRequest
  ): Promise<Comment | undefined>;
  update(id: number, name: string): Promise<Comment | undefined>;
}
