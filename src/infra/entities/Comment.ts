import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  parkId: number;

  @Column({ type: "varchar" })
  userId: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
