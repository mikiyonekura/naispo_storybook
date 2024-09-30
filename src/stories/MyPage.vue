<script setup>
import { defineProps } from 'vue';
import MainQuestCounter from './MainQuestCounter.vue';
import MainQuestPanel from './MainQuestPanel.vue';
import NaispoButton from './NaispoButton.vue';

const collectedItems = [true, false, true];
const mainQuestCount = 3;

</script>

<template>
  <v-container class="mypage-container" fluid>
    <v-row style="margin: 5%" justify="center">
      <v-col cols="12">
        <p class="title">ナスラくんの実験道具を探そう</p>
      </v-col>
    </v-row>

    <v-row class="main-quest-container mb-6" justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <MainQuestCounter :mainQuestCount="mainQuestCount" />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <MainQuestPanel :collectedItems="collectedItems" />
      </v-col>
    </v-row>

    <v-row class="mb-4" justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <NaispoButton :sentence="'ゲームの遊び方'" :fontSize="'20px'" />
      </v-col>
    </v-row>

    <v-row class="button-group" justify="center">
      <v-col cols="5" class="d-flex justify-center">
        <NaispoButton :sentence="'QR読み込み'" :fontSize="'20px'" />
      </v-col>
      <v-col cols="5" class="d-flex justify-center">
        <NaispoButton :sentence="'アイテムが揃った'" :fontSize="'20px'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mypage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  white-space: nowrap;
}

.title {
  font-size: 20px;
}

.main-quest-container {
 
}

.button-group {
  gap: 10%;
}
</style>
