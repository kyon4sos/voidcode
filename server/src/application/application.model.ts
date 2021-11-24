import { Component } from './../type/index';
import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
})
export class Application extends Model<Application> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.JSON,
  })
  components: Component;

  @Column
  version: number;

  @Column({
    defaultValue: false,
  })
  isPublic: boolean;

  @Column({
    defaultValue: false,
  })
  deployed: boolean;
}
