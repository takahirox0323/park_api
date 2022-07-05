import { MigrationInterface, QueryRunner } from "typeorm";

export class inicialName1657029527451 implements MigrationInterface {
  name = "inicialName1657029527451";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`branch\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`like\` (\`id\` int NOT NULL AUTO_INCREMENT, \`parkId\` varchar(255) NOT NULL, \`userId\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`categoryId\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`park\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`prefectureId\` varchar(255) NOT NULL, \`areaId\` varchar(255) NOT NULL, \`countryId\` varchar(255) NOT NULL, \`parkTypeId\` int NOT NULL, \`parkUrl\` varchar(255) NOT NULL, \`openingTime\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`createdUserId\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`tagId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`park_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`area\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`parkId\` varchar(255) NOT NULL, \`userId\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`familyName\` varchar(255) NOT NULL, \`givenName\` varchar(255) NOT NULL, \`sexId\` varchar(255) NOT NULL, \`age\` varchar(255) NOT NULL, \`createdUserId\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`user_setting\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(255) NOT NULL, \`isNotification\` varchar(255) NOT NULL, \`hasMail\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`prefecture\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`areaId\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD CONSTRAINT \`FK_12853449087d2ce4f405872e9fe\` FOREIGN KEY (\`tagId\`) REFERENCES \`tags\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` ADD CONSTRAINT \`FK_b72c3e6e1940f1f9ee6bf8ce1a0\` FOREIGN KEY (\`parkTypeId\`) REFERENCES \`park_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );

    await queryRunner.query(
      "INSERT INTO `area` (`id`, `name`) VALUES (1, '北海道'), (2, '東北'),(3, '関東'),(4, '中部'), (5, '北陸'),(6, '関西'), (7, '四国・中国'),(8, '九州・沖縄')"
    );

    await queryRunner.query(
      "INSERT INTO `prefecture` (`id`, `name`,`areaId`) VALUES (1,'北海道','1'), (2,'青森県','2'),(3,'岩手県','2'),(4,'宮城県','2'),(5,'秋田県','2'),(6,'山形県','2'),(7,'福島県','2'),(8,'茨城県','3'),(9,'栃木県','3'),(10,'群馬県','3'),(11,'埼玉県','3'),(12,'千葉県','3'),(13,'東京都','3'),(14,'神奈川県','3'),(15,'新潟県','4'),(16,'富山県','4'),(17,'石川県','4'),(18,'福井県','4'),(19,'山梨県','4'),(20,'長野県','4'),(21,'岐阜県','4'),(22,'静岡県','4'),(23,'愛知県','4'),(24,'三重県','4'),(25,'滋賀県','4'),(26,'京都府','6'),(27,'大阪府','6'),(28,'兵庫県','6'),(29,'奈良県','6'),(30,'和歌山県','6'),(31,'鳥取県','7'),(32,'島根県','7'),(33,'岡山県','7'),(34,'広島県','7'),(35,'山口県','7'),(36,'徳島県','7'),(37,'香川県','7'),(38,'愛媛県','7'),(39,'高知県','7'),(40,'福岡県','8'),(41,'佐賀県','8'),(42,'長崎県','8'),(43,'熊本県','8'),(44,'大分県','8'),(45,'宮崎県','8'),(46,'鹿児島県','8'),(47,'沖縄県','8')"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP FOREIGN KEY \`FK_b72c3e6e1940f1f9ee6bf8ce1a0\``
    );
    await queryRunner.query(
      `ALTER TABLE \`park\` DROP FOREIGN KEY \`FK_12853449087d2ce4f405872e9fe\``
    );
    await queryRunner.query(`DROP TABLE \`prefecture\``);
    await queryRunner.query(`DROP TABLE \`user_setting\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`comment\``);
    await queryRunner.query(`DROP TABLE \`area\``);
    await queryRunner.query(`DROP TABLE \`park_type\``);
    await queryRunner.query(`DROP TABLE \`park\``);
    await queryRunner.query(`DROP TABLE \`tags\``);
    await queryRunner.query(`DROP TABLE \`like\``);
    await queryRunner.query(`DROP TABLE \`branch\``);
  }
}
