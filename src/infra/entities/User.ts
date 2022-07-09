import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  familyName: string;

  @Column({ type: "varchar" })
  givenName: string;

  @Column({ type: "varchar" })
  sexId: number;

  @Column({ type: "varchar" })
  age: number;

  @Column({ type: "varchar" })
  createdUserId: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
