import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Project extends Model {
  @Column
  name: string;
}
