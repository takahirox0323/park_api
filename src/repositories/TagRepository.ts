import Tag from "@/entities/Tags";
import { TagDeleteRequest, TagRequest } from "@/types/tag";

export default interface TagRepository {
  // 支社を取得
  find(id?: number): Promise<Tag[]>;
  create(TagRequest: TagRequest): Promise<any>;
  delete(TagDeleteRequest: TagDeleteRequest): Promise<Tag | undefined>;
  update(id: number, name: string): Promise<Tag | undefined>;
}
