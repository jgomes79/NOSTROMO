import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType } from "sequelize-typescript";

import { Currency } from "@/currency/currency.entity";
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
    defaultValue: ProjectStates.DRAFT,
    type: DataType.ENUM(...Object.values(ProjectStates)),
  })
  state: ProjectStates;

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
  photoUrl: string;

  @Column({
    type: DataType.STRING,
  })
  bannerUrl: string;

  // Documents
  @Column({
    type: DataType.STRING,
  })
  whitepaperUrl: string;

  @Column({
    type: DataType.STRING,
  })
  litepaperUrl: string;

  @Column({
    type: DataType.STRING,
  })
  tokenomicsUrl: string;

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

  @ForeignKey(() => Currency)
  @Column({
    type: DataType.INTEGER,
  })
  currencyId: number;

  @BelongsTo(() => Currency)
  currency: Currency;
}
