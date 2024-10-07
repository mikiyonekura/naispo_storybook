<script setup>
import { defineProps } from 'vue';
import MainQuestCounter from './MainQuestCounter.vue';
import MainQuestPanel from './MainQuestPanel.vue';
import NaispoButton from '../NaispoButton.vue';

const collectedItems = [1, 0, 0];
const mainQuestCount = 3;

</script>

<template>
  <v-container class="pa-0 mypage-container">
    <!-- VuetifyのDefaultのPaddingを回避するためpa-0を追加 -->
    <v-row class="mb-5">
      <v-col cols="12" class="d-flex justify-center pt-15">
        <p class="title">NASURAくんの実験道具を <br> 探しに行こう!</p>
      </v-col>
    </v-row>

    <v-row class="mb-10 pa-5">
      <v-col cols="7" class="d-flex justify-center pa-5">
        <MainQuestPanel :collectedItems="collectedItems" />
      </v-col>
      <v-col cols="5" class="d-flex justify-center pa-0">
        <MainQuestCounter :mainQuestCount="mainQuestCount" />
      </v-col>
    </v-row>

    <div class="orange-button-box"> 
      <v-row class="pa-5">
        <v-col cols="6" class="d-flex justify-center">
          <img class="button" width="80%" :src="'./buttons/qrwoyomu.png'" alt="">
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <img class="button" width="95%" :src="'./buttons/itemsorotta_before.png'" alt="">
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <img class="button" width="60%" :src="'./buttons/asobikata.png'" alt="">
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<style scoped>
.mypage-container {
  background-color: #f4f4f4;
  height: 100dvh;
  overflow: hidden; 
}

.title {
  font-size: 25px;
  color: #324b6d;
  font-weight: bold;
  text-align: center;
}

.orange-button-box {
  background-color: #dfb069;
  border-radius: 32px;
  height: 60vh; 
  border-top-left-radius: 32px; 
  border-top-right-radius: 32px; 
  border-bottom-left-radius: 0; 
  border-bottom-right-radius: 0; 
}

.button {
  filter: drop-shadow(3px 3px 3px rgba(43, 34, 34, 3.5));
}
</style>
