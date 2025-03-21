# Router

[![NPM Status](https://img.shields.io/badge/npm-public-green.svg)](https://www.npmjs.com/)
[![Node.js Version](https://img.shields.io/badge/node-20.x-brightgreen.svg)](https://nodejs.org/)

軽量な関数ルーター

## インストール

```sh
npm install @dependahub/router
```

## 使い方

```js
import router from '@dependahub/router';

// ルートを追加
router.add('RouteName', async payload => {
    const {param} = payload;
    return param * 3;
});

// ルートを呼び出し
const response = await router.post('RouteName', {
    param: 3,
});

console.log(response); // 9
```

## ライセンス

MIT License. 詳細は [LICENSE](./LICENSE) ファイルを参照してください。
