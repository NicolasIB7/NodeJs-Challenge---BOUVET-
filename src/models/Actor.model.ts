import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import { Movie } from "./Movie.model";
import { TvShow } from "./TvShow/TvShow.model";


@Table({ timestamps: true })
export class Actor extends Model {
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

  @BelongsToMany(() => Movie, "MovieActors", "actorId", "movieId")
  movies!: Movie[];

  @BelongsToMany(() => TvShow, "TvShowActors", "actorId", "tvShowId")
  tvShows!: TvShow[];
}
