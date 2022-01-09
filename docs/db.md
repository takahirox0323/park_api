### park

| column           | type      | pk  | uk  | fk  | nullable | description |
| ---------------- | --------- | --- | --- | --- | -------- | ----------- |
| id               | int4      | ◯   |     |     |          |             |
| name             |           |     |     |     |          |             |
| shortName        | varchar   |     |     |     |          |             |
| description      | varchar   |     |     |     |          |             |
| address          | varchar   |     |     |     |          |             |
| cost             | int4      |     |     |     |          |             |
| TrafficMethod    | varchar   |     |     |     |          |             |
| endTime          | timestamp |     |     |     |          |             |
| startTime        | timestamp |     |     |     |          |             |
| updatedAt        | timestamp |     |     |     |          |             |
| createdAt        | timestamp |     |     |     |          |             |
| createdUserId    | varchar   |     |     |     |          |             |
| lastUpdateUserId | varchar   |     |     |     |          |             |
| isApproved       | boolean   |     |     |     |          |             |

### facility-park (公園と設備の中間テーブル)

| column      | type | pk  | uk  | fk  | nullable | description |
| ----------- | ---- | --- | --- | --- | -------- | ----------- |
| id          | int4 | ◯   |     |     |          |             |
| parkId      | int4 |     |     |     |          |             |
| facilityIds | int4 |     |     |     |          |             |

### user

| column      | type      | pk  | uk  | fk  | nullable | description |
| ----------- | --------- | --- | --- | --- | -------- | ----------- |
| id          | int4      | ◯   |     |     |          |             |
| name        |           |     |     |     |          |             |
| description | varchar   |     |     |     |          |             |
| birthDate   | timestamp |     |     |     |          |             |
| area        | int4      |     |     |     |          |             |
| age         | int4      |     |     |     |          |             |
| createdAt   | timestamp |     |     |     |          |             |
| updatedAt   | timestamp |     |     |     |          |             |

### comment(公園のコメント)

| column    | type      | pk  | uk  | fk  | nullable | description |
| --------- | --------- | --- | --- | --- | -------- | ----------- |
| id        | int4      | ◯   |     |     |          |             |
| type      | int4      |     |     |     |          |             |
| parkId    | int4      |     |     |     |          |             |
| userId    | int4      |     |     |     |          |             |
| comment   | varchar   |     |     |     |          |             |
| createdAt | timestamp |     |     |     |          |             |
| updatedAt | timestamp |     |     |     |          |             |

### like(公園の like)

| column    | type      | pk  | uk  | fk  | nullable | description |
| --------- | --------- | --- | --- | --- | -------- | ----------- |
| id        | int4      | ◯   |     |     |          |             |
| type      | int4      |     |     |     |          |             |
| parkId    | int4      |     |     |     |          |             |
| userId    | int4      |     |     |     |          |             |
| like      | boolean   |     |     |     |          |             |
| createdAt | timestamp |     |     |     |          |             |
| updatedAt | timestamp |     |     |     |          |             |

## マスタテーブル

### branch

| column    | type      | pk  | uk  | fk  | nullable | description |
| --------- | --------- | --- | --- | --- | -------- | ----------- |
| id        | int4      | ◯   |     |     |          |             |
| name      |           |     |     |     |          |             |
| createdAt | timestamp |     |     |     |          |             |
| updatedAt | timestamp |     |     |     |          |             |

### scale

| column | type | pk  | uk  | fk  | nullable | description |
| ------ | ---- | --- | --- | --- | -------- | ----------- |
| id     | int4 | ◯   |     |     |          |             |
| type   | int4 |     |     |     |          |             |

### parkType(公園の種類)

| column | type    | pk  | uk  | fk  | nullable | description |
| ------ | ------- | --- | --- | --- | -------- | ----------- |
| id     | int4    | ◯   |     |     |          |             |
| type   | int4    |     |     |     |          |             |
| name   | varchar |     |     |     |          |             |

### category(公園のカテゴリー)

| column | type    | pk  | uk  | fk  | nullable | description |
| ------ | ------- | --- | --- | --- | -------- | ----------- |
| id     | int4    | ◯   |     |     |          |             |
| type   | int4    |     |     |     |          |             |
| name   | varchar |     |     |     |          |             |

※type →1:利用シーン,2:

### facility (設備マスタ)

| column | type    | pk  | uk  | fk  | nullable | description |
| ------ | ------- | --- | --- | --- | -------- | ----------- |
| id     | int4    | ◯   |     |     |          |             |
| type   | int4    |     |     |     |          |             |
| name   | varchar |     |     |     |          |             |
