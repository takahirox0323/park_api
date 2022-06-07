import { MigrationInterface, QueryRunner } from "typeorm";

export class inicial1654183436058 implements MigrationInterface {
  name = "inicial1654183436058";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`tags\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`
    );
    await queryRunner.query(
      `ALTER TABLE \`tags\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`tags\` ADD \`categoryId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`tags\` ADD \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`
    );
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`parkId\``);
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`parkId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`userId\``);
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` DROP COLUMN \`description\``
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`description\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`address\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`address\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`description\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`description\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP COLUMN \`prefectureId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`prefectureId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`areaId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`areaId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`countryId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`countryId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`parkTypeId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`parkTypeId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`parkUrl\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`parkUrl\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`openingTime\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`openingTime\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`price\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`price\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`categoryId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`categoryId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP COLUMN \`createdUserId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`createdUserId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`branch\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`branch\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`area\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`area\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`parkId\``);
    await queryRunner.query(
      `ALTER TABLE \`like\` ADD \`parkId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`userId\``);
    await queryRunner.query(
      `ALTER TABLE \`like\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`prefecture\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` DROP COLUMN \`areaId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` ADD \`areaId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`userId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`isNotification\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`isNotification\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`hasMail\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`hasMail\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`familyName\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`familyName\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`givenName\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`givenName\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`sexId\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`sexId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`age\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP COLUMN \`createdUserId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`createdUserId\` varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP COLUMN \`createdUserId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`createdUserId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`age\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`sexId\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`sexId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`givenName\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`givenName\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`familyName\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`familyName\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`hasMail\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`hasMail\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`isNotification\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`isNotification\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` DROP COLUMN \`userId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user_setting\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` DROP COLUMN \`areaId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` ADD \`areaId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`prefecture\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`prefecture\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`userId\``);
    await queryRunner.query(
      `ALTER TABLE \`like\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`parkId\``);
    await queryRunner.query(
      `ALTER TABLE \`like\` ADD \`parkId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`area\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`area\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`branch\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`branch\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP COLUMN \`createdUserId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`createdUserId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`categoryId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`categoryId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`price\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`price\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`openingTime\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`openingTime\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`parkUrl\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`parkUrl\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`parkTypeId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`parkTypeId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`countryId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`countryId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`areaId\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`areaId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP COLUMN \`prefectureId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`prefectureId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`description\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`description\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`address\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`address\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`park\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD \`name\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` DROP COLUMN \`description\``
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`description\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`userId\``);
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`userId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`parkId\``);
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`parkId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`createdAt\``);
    await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`categoryId\``);
    await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`id\``);
  }
}
