import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Park {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name?: string;

  @Column({ type: "varchar" })
  Address?: string;

  @Column({ type: "varchar" })
  description?: string;

  @Column({ type: "varchar" })
  prefectureId?: number;

  @Column({ type: "varchar" })
  areaId?: number;

  @Column({ type: "varchar" })
  countryId?: number;

  @Column({ type: "varchar" })
  parkTypeId?: number;

  @Column({ type: "varchar" })
  parkUrl?: string;

  @Column({ type: "varchar" })
  openingTime?: string;

  @Column({ type: "varchar" })
  price?: number;

  @Column({ type: "varchar" })
  categoryId?: number;

  @Column({ type: "varchar" })
  createdUserId?: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt?: Date;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt?: Date;
}
