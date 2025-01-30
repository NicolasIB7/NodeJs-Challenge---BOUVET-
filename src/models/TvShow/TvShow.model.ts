import { Table, Column, Model, DataType, ForeignKey, HasMany, BelongsToMany } from "sequelize-typescript";
import { Actor } from "../Actor.model";
import { Director } from "../Director.model";
import { Season } from "./Season.model";

@Table
export class TvShow extends Model {
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
  title!: string;

  @ForeignKey(() => Director)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  directorId!: number;

  @BelongsToMany(() => Actor, "TvShowActors", "tvShowId", "actorId")
  actors!: Actor[];

  @HasMany(() => Season)
  seasons!: Season[];
}
