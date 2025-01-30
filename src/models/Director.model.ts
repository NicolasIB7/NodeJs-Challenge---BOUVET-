import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Movie } from "./Movie.model";
import { TvShow } from "./TvShow/TvShow.model";

@Table
export class Director extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthDate!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW, 
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW, 
  })
  updatedAt!: Date;

  @HasMany(() => Movie)
  movies!: Movie[];

  @HasMany(() => TvShow)
  tvShows!: TvShow[];
}
