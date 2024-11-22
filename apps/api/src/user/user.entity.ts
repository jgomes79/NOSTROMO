import { Table, Column, Model, HasMany, PrimaryKey, DataType } from "sequelize-typescript";

import { Project } from "@/project/project.entity";
import { UserTiers, UserTypes } from "@/user/user.types";

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

  @Column({
    defaultValue: UserTiers.TIER_0,
    type: DataType.ENUM(...Object.values(UserTiers)),
  })
  tier: UserTiers;

  @Column({
    defaultValue: UserTypes.USER,
    type: DataType.ENUM(...Object.values(UserTypes)),
  })
  type: UserTypes;

  // Relationships
  @HasMany(() => Project)
  projects: Project[];
}
