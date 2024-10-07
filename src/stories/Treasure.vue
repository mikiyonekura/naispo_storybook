<script setup>
import { defineProps } from 'vue';
import AnswerForm from './AnswerForm.vue';
import Header from './Header.vue';

const props = defineProps({
    treasureType: {
        type: String,
        default: 'quest'
    }
});

</script>

<template>

  <v-container class="treasure_container" fluid>

    <v-row justify="center">
      <v-col cols="12" class="text-center d-flex align-center">
        <Header />
      </v-col>
      <v-col cols="12">
        <img class="treasure_image" :src="'./nazo_1.png'" alt="">
      </v-col>
    </v-row>

    <v-row justify="center" v-if="treasureType=='quest'">
      <v-col cols="12">
        <AnswerForm />
      </v-col>
      <v-col cols="12">
        <img width="100%" :src="'./hint.png'" alt="">
      </v-col>
    </v-row>

    <v-row justify="'center'" v-else>
      <v-col cols="12">
        <img width="100%" :src="'./toziru.png'">
      </v-col>
    </v-row>

  </v-container>

</template>

<style scoped>
.treasure_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  white-space: nowrap;
  background-color: #dfb069;
}

.treasure_title {
  font-size: 23px;
} 

.treasure_image {
  width: 100%;
}
</style>
