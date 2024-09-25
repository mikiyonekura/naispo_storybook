# Introduction
StoryBookの使い方を簡単に記載します．実験的に使用するので途中で煩わしくなったらポイしようと思っています．

## About StoryBook
Storybookとは、React.jsやVue.js、Sveltなどを用いたモダンフロントエンド開発で利用できる、「UIカタログ」を作成できるツールです。 コンポーネント指向によるフロントエンド開発が人気な昨今、このUIカタログはフロントエンド開発において大きなメリットを与えてくれます。

## How to use
1. StoryBookより使用したいコンポーネントを探す
![alt text](<スクリーンショット 2024-09-25 17.37.33.png>)
2. Dockページ内で，コンポーネントの引数やデザインをカスタムした後，「view code」ボタンよりコードをコピーしておく
3. コンポーネントを配置したい場所で，該当のファイルをimportした後「2.」を貼り付ける

```
Quote(セリフ)コンポーネントを使用したい場合
import Quote from './stories/Quote.vue';

copyed from storybook dock
---------------------------------------------------------
<script lang="ts" setup>
const mockedSentence = ["みんな今日は奈良先端大へようこそ！"];
</script>

<template>
  <Quote
    fontSize="25px"
    label="ナスラくんのセリフパート"
    :mockedSentence="mockedSentence"
  />
</template>
---------------------------------------------------------
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```


