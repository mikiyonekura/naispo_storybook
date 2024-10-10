<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'テキストを入力'
  },
  title: {
    type: String,
    default: 'タイトルを入力'
  },
  image: {
    type: String,
    default: 'nasura_1.png'
  },
  titleFontSize: {
    type: String,
    default: '10px'
  },
  textFontSize: {
    type: String,
    default: '10px'
  },
});

const imgPath = './';
</script>

<template>
    <div class="modal-container"> 
        <v-card class="modal">
            <v-card-title class="modal-title">
                {{ title }}
            </v-card-title>

            <img v-if="image" width="60%" :src="imgPath + image" class="modal-image"/>

            <v-card-text class="modal-text">
                {{ text }}
            </v-card-text>

            <v-card-actions class="justify-center">
                <img width="70%" :src="'./buttons/toziru.png'" alt="">
            </v-card-actions>
        </v-card>
    </div>
</template>

<style>
.modal-container {
  display: flex;
  justify-content: center; 
  align-items: center;     
}

.modal-title {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  font-size: v-bind(titleFontSize);
}

.modal-text {
  font-size: 10px;
  text-align: center;
  font-size: v-bind(textFontSize);
}

.modal {
  width: 50%;     
  z-index: 1000;
  background-color: #dfb069;
  height: 50dvh;
}

.modal-image {
  display: block;
  margin: 0 auto;
}
</style>
