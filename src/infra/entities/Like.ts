import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  parkId: number;

  @Column({ type: "varchar" })
  userId: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
