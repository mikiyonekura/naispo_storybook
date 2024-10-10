<script setup>
import { defineProps } from 'vue';
import NameForm from './NameForm.vue';

const props = defineProps({
  isSignIn: {
    type: Boolean,
    default: true,
  },
});

</script>

<template>
  <v-container class="pa-0 signup-container">
    <!-- VuetifyのDefaultのPaddingを回避するためpa-0を追加 -->
     
    <v-row class="mb-0">
      <v-col cols="12" class="d-flex justify-center pa-0 pt-15">
        <p v-if="isSignIn==true" class="title">お名前はなんだったっけ？</p>
        <p v-else class="title">あなたのお名前を教えて！</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="pa-0">
        <NameForm />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12"  class="d-flex justify-center pt-10">
        <img width="70%" :src="'./nasura_1.png'" alt="">
      </v-col>
    </v-row>


  </v-container>
</template>

<style scoped>
.signup-container {
  background-color: #f4f4f4;
  height: 100dvh;
  overflow: hidden; 
}

.title {
  font-size: 20px;
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
  filter: drop-shadow(1px 1px 1px rgba(43, 34, 34, 3.5));
}
</style>
