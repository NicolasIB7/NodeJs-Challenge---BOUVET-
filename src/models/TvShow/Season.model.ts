import { Table, Column, Model, DataType, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
import { TvShow } from "./TvShow.model";
import { Episode } from "./Episode.model";

@Table
export class Season extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => TvShow)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tvShowId!: number;

  @BelongsTo(() => TvShow)  
  tvShow!: TvShow;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  seasonName!: string;

  @HasMany(() => Episode)
  episodes!: Episode[];
}
