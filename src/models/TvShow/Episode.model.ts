import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Season } from "./Season.model";

@Table
export class Episode extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Season)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seasonId!: number;

  @BelongsTo(() => Season) 
  season!: Season;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  episodeName!: string;
}
