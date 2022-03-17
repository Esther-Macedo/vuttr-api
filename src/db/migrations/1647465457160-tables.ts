import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1647465457160 implements MigrationInterface {
    name = 'tables1647465457160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tool\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`link\` text NOT NULL, \`description\` text NOT NULL, \`tags\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tool\``);
    }

}
