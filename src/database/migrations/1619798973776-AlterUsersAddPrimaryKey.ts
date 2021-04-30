import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUsersAddPrimaryKey1619798973776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumn("users", "id", new TableColumn ({
        name: "id",
        type: "uuid",
        isPrimary: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumns("users", [{
        oldColumn: new TableColumn ({
          name: "id",
          type: "uuid",
          isPrimary: true,
        }),
        newColumn: new TableColumn ({
          name: "id",
          type: "uuid",
        })
      }]);
    }
}
