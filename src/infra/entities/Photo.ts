import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  key: string;

  @Column({ type: "varchar" })
  parkId: number;

  @Column({ type: "varchar" })
  createdUserId: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
