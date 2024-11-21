import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType } from "sequelize-typescript";

import { ProjectStates } from "@/project/project.types";
import { User } from "@/user/user.entity";

@Table
export class Project extends Model {
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
  description: string;

  @Column({
    type: DataType.STRING,
  })
  avatar: string;

  @Column({
    type: DataType.STRING,
  })
  banner: string;

  // Documents
  @Column({
    type: DataType.STRING,
  })
  whitepaper: string;

  @Column({
    type: DataType.STRING,
  })
  litepaper: string;

  @Column({
    type: DataType.STRING,
  })
  tokenomics: string;

  // Token Information
  @Column({
    type: DataType.INTEGER,
  })
  tokensCreated: number;

  @Column({
    type: DataType.DECIMAL,
  })
  tokenPrice: number;

  @Column({
    type: DataType.DECIMAL,
  })
  amountToRaise: number;

  @Column({
    defaultValue: ProjectStates.DRAFT,
    type: DataType.ENUM(...Object.values(ProjectStates)),
  })
  state: ProjectStates;

  // Social Networks
  @Column({
    type: DataType.STRING,
  })
  instagramUrl: string;

  @Column({
    type: DataType.STRING,
  })
  xUrl: string;

  @Column({
    type: DataType.STRING,
  })
  discordUrl: string;

  @Column({
    type: DataType.STRING,
  })
  telegramUrl: string;

  @Column({
    type: DataType.STRING,
  })
  mediumUrl: string;

  // Relationships
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  ownerId: number;

  @BelongsTo(() => User)
  owner: User;
}
