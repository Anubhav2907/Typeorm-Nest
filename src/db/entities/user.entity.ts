/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { TableName } from '../tableName';

@Entity({ name: TableName.User })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column({ name: 'full_name' })
  fullName: string;
}
