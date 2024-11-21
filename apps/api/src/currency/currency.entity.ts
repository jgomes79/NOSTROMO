import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
} from 'sequelize-typescript';
  
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
}
