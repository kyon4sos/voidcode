import { UUID } from 'sequelize';
import { Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

export class Form extends Model<Form> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUID,
  })
  id: string;

  @Column({
    type: DataType.JSON,
  })
  components: any;
}
