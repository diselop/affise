import { MigrationInterface, QueryRunner } from "typeorm";

export class Performance1605030657489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE performance (
            id int NOT NULL AUTO_INCREMENT,
            date bigint DEFAULT NULL,
            comission decimal(10,0) DEFAULT NULL,
            sales int DEFAULT NULL,
            leads int DEFAULT NULL,
            clicks int DEFAULT NULL,
            epc decimal(10,0) DEFAULT NULL,
            impressions int DEFAULT NULL,
            cr decimal(10,0) DEFAULT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('performance');
    }

}
