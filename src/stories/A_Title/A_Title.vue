<script setup>
import { defineProps } from 'vue';

</script>

<template>
  <div class="title-container">

    <v-container class="pt-15">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <img class="logo" width="90%" :src="'./logo.png'" alt="">
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center pt-10">
          <img class="mb-5" width="80%" :src="'./buttons/hajimekara.png'" alt="">
          <img width="80%" :src="'./buttons/tudukikara.png'" alt="">
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>


<style scoped>
.title-container {
  height: 100dvh;
  background-color: #324b6d;
}

</style> 
