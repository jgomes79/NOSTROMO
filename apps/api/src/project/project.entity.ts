import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { ProjectStates } from '@/project/project.types';

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
    defaultValue: ProjectStates.DRAFT,
    type: DataType.ENUM(...Object.values(ProjectStates)),
  })
  state: ProjectStates;

  // Social Networks
  @Column({
    type: DataType.STRING,
  })
  discordUrl: string;

  @Column({
    type: DataType.STRING,
  })
  xUrl: string;

  @Column({
    type: DataType.STRING,
  })
  telegramUrl: string;

  @Column({
    type: DataType.STRING,
  })
  mediumUrl: string;
}
