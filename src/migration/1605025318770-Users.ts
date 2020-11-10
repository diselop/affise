import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1605025318770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                },
                {
                  name: 'email',
                  type: 'varchar(255)',
                  isNullable: true,
                },
                {
                  name: 'first_name',
                  type: 'varchar(255)',
                  isNullable: true,
                },
                {
                  name: 'last_name',
                  type: 'varchar(255)',
                  isNullable: true,
                },
                {
                  name: 'avatar',
                  type: 'varchar(255)',
                  isNullable: true,
                },
              ],
            }),
            true,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
