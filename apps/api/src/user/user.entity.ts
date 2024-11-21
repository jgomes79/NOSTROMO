import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
} from 'sequelize-typescript';
  
@Table
export class User extends Model {
    // Information
    @PrimaryKey
    @Column({
      type: DataType.INTEGER,
    })
    id: number;
  
    @Column({
      type: DataType.STRING,
    })
    wallet: string;  
}
  