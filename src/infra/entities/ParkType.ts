import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Park from "./Park";

@Entity()
export default class ParkType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Park, (park) => park.id)
  parks: Park[];

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
