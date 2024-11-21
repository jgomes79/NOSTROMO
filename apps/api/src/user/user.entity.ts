import { Table, Column, Model, HasMany, PrimaryKey, DataType } from "sequelize-typescript";

import { Project } from "@/project/project.entity";

@Table
export class User extends Model {
  // Basic Information
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  wallet: string;

  // Relationships
  @HasMany(() => Project)
  projects: Project[];
}
