import { Table, Column, Model, DataType, ForeignKey, BelongsToMany } from "sequelize-typescript";
import { Actor } from "./Actor.model";
import { Director } from "./Director.model";



@Table({ timestamps: true })
export class Movie extends Model {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sinopsis!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  genre!: string;

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

  @ForeignKey(() => Director)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  directorId!: number;

  @BelongsToMany(() => Actor, "MovieActors", "movieId", "actorId")
  actors!: Actor[];


}
