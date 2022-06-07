import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class UserSetting {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  userId?: number;

  @Column({ type: "varchar" })
  isNotification?: number;

  @Column({ type: "varchar" })
  hasMail?: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt?: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt?: Date;
}
