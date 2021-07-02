import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableName } from '../tableName';

export class createUserTable1625201047944 implements MigrationInterface {
  public userTable: Table = new Table({
    name: TableName.User,
    columns: [
      {
        name: 'id',
        type: 'integer',
        isGenerated: true,
        isPrimary: true,
        generationStrategy: 'increment',
      },
      {
        name: 'email',
        type: 'string',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'fullname',
        type: 'string',
        isNullable: true,
        isUnique: false,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.userTable);
  }
}
