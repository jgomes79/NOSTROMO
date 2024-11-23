import { Table, Column, Model, PrimaryKey, DataType, HasMany } from "sequelize-typescript";

import { Project } from "@/project/project.entity";

@Table
export class Currency extends Model {
  // Information
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  symbol: string;

  // Relationships
  @HasMany(() => Project)
  projects: Project[];
}
