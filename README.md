### ローカル用DBの起動
```
docker-compose up -d
```
※DBの停止は以下
```
docker-compose down
```

### 設定ファイルの作成
```
cp .env.example .env
```

### パッケージインストール
```
yarn
```

### DBマイグレーション
```
yarn migrate
```
↓jestでテストする際に使用するDBのマイグレーション
```
yarn migrate:test
```

### ローカルサーバ起動
watchあり
```
yarn dev
```
watchなし
```
yarn start
```

### テスト実行
```
yarn test
```
