import { MigrationInterface, QueryRunner } from "typeorm";

export class prefectureData1658505417165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `area` (`id`, `name`) VALUES (1, '北海道'), (2, '東北'),(3, '関東'),(4, '中部'), (5, '北陸'),(6, '関西'), (7, '四国・中国'),(8, '九州・沖縄')"
    );

    await queryRunner.query(
      "INSERT INTO `prefecture` (`id`, `name`,`areaId`) VALUES (1,'北海道','1'), (2,'青森県','2'),(3,'岩手県','2'),(4,'宮城県','2'),(5,'秋田県','2'),(6,'山形県','2'),(7,'福島県','2'),(8,'茨城県','3'),(9,'栃木県','3'),(10,'群馬県','3'),(11,'埼玉県','3'),(12,'千葉県','3'),(13,'東京都','3'),(14,'神奈川県','3'),(15,'新潟県','4'),(16,'富山県','4'),(17,'石川県','4'),(18,'福井県','4'),(19,'山梨県','4'),(20,'長野県','4'),(21,'岐阜県','4'),(22,'静岡県','4'),(23,'愛知県','4'),(24,'三重県','4'),(25,'滋賀県','4'),(26,'京都府','6'),(27,'大阪府','6'),(28,'兵庫県','6'),(29,'奈良県','6'),(30,'和歌山県','6'),(31,'鳥取県','7'),(32,'島根県','7'),(33,'岡山県','7'),(34,'広島県','7'),(35,'山口県','7'),(36,'徳島県','7'),(37,'香川県','7'),(38,'愛媛県','7'),(39,'高知県','7'),(40,'福岡県','8'),(41,'佐賀県','8'),(42,'長崎県','8'),(43,'熊本県','8'),(44,'大分県','8'),(45,'宮崎県','8'),(46,'鹿児島県','8'),(47,'沖縄県','8')"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM area`);
    await queryRunner.query(`DELETE FROM prefecture`);
  }
}
