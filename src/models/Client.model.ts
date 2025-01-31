import { Table, Column, Model, DataType } from "sequelize-typescript";
import bcrypt from 'bcryptjs';

@Table({ timestamps: true })
export class Client extends Model<Client> {
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
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  password!: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birthDate!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW, 
  })
  createdAt!: Date;


  comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}



export default Client;



