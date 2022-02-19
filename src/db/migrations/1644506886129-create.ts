import {MigrationInterface, QueryRunner} from "typeorm";

export class create1644506886129 implements MigrationInterface {
    name = 'create1644506886129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `area` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `branch` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comment` (`id` int NOT NULL AUTO_INCREMENT, `parkId` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `like` (`id` int NOT NULL AUTO_INCREMENT, `parkId` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `park` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `Address` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `prefectureId` varchar(255) NOT NULL, `areaId` varchar(255) NOT NULL, `countryId` varchar(255) NOT NULL, `parkTypeId` varchar(255) NOT NULL, `parkUrl` varchar(255) NOT NULL, `openingTime` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `categoryId` varchar(255) NOT NULL, `createdUserId` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `prefecture` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `areaId` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tags` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `categoryId` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `familyName` varchar(255) NOT NULL, `givenName` varchar(255) NOT NULL, `sexId` varchar(255) NOT NULL, `age` varchar(255) NOT NULL, `createdUserId` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_setting` (`id` int NOT NULL AUTO_INCREMENT, `userId` varchar(255) NOT NULL, `isNotification` varchar(255) NOT NULL, `hasMail` varchar(255) NOT NULL, `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user_setting`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `tags`");
        await queryRunner.query("DROP TABLE `prefecture`");
        await queryRunner.query("DROP TABLE `park`");
        await queryRunner.query("DROP TABLE `like`");
        await queryRunner.query("DROP TABLE `comment`");
        await queryRunner.query("DROP TABLE `branch`");
        await queryRunner.query("DROP TABLE `area`");
    }

}
